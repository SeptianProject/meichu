import TextTagline from "../fragments/home/TextTagline"
import TextInput from "../fragments/customProduct/TextInput"
import RouteHistory from "../layouts/RouteHistory"
import ProductTypeSelect from "../layouts/customProduct/ProductTypeSelect"
import UploadImageProduct from "../layouts/customProduct/UploadImageProduct"
import React from "react"
import ModalPublishCustomProduct from "../layouts/customProduct/ModalPublishCustomProduct"
import { useForm } from "react-hook-form"
import { createProductSchema, CreateProductSchema } from "../../schema/ProductSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { v4 as uuidv4 } from "uuid"
import Button from "../elements/buttons/Button"
import { useLocation, useNavigate } from "react-router-dom"
import { getUser, uploadFile } from "../../services/authService"
import { createProductRequest, getProductRequest, updateProductRequest } from "../../services/productService"
import { ProductRequest } from "../../types"

interface ProductRequestResponse {
     data: {
          id: number
          attributes: ProductRequest
     }
}

const CustomProductPage = () => {
     const navigate = useNavigate()
     const location = useLocation()
     const queryClient = useQueryClient()
     const [onPublish, setOnPublish] = React.useState(false)
     const [selectedFile, setSelectedFile] = React.useState<File | null>(null)
     const [previewUrl, setPreviewUrl] = React.useState<string>('')
     const [isPublishDisabled, setIsPublishDisabled] = React.useState(false)

     const { data: userData } = useQuery(['user'], () => getUser('populate[requests][populate]=*&populate[likes][populate][product][populate]=*'))
     const uuidParams = location.state?.requestData
     const isEditing = location.state?.isEditing
     const { data: requestData } = useQuery<ProductRequestResponse>(
          ['productRequest'],
          () => getProductRequest(`${uuidParams}`)
     )
     const getDefaultValues = () => ({
          uuid: isEditing ? requestData?.data.attributes.uuid : uuidv4(),
          user: userData?.id as number,
          references: isEditing ? requestData?.data.attributes?.references?.data?.id : null,
          name: isEditing ? requestData?.data.attributes.name : '',
          productType: isEditing ? requestData?.data.attributes.productType : undefined,
          imvu: isEditing ? requestData?.data.attributes.imvu : undefined
     })

     React.useEffect(() => {
          console.log('requestData', requestData)
     }, [requestData])

     const {
          register,
          handleSubmit,
          setValue,
          watch,
          reset,
          formState: { errors }
     } = useForm<CreateProductSchema>({
          resolver: zodResolver(createProductSchema),
          defaultValues: getDefaultValues(),
          mode: 'onSubmit'
     })

     const resetForm = () => {
          reset(getDefaultValues())
          if (previewUrl) {
               URL.revokeObjectURL(previewUrl)
          }
          setSelectedFile(null)
          setPreviewUrl('')
     }

     const createProductMutation = useMutation({
          mutationFn: async (formData: CreateProductSchema) => {
               let imageId = null
               if (selectedFile) {
                    try {
                         const uploadResult = await uploadFile(selectedFile)
                         imageId = uploadResult[0].id
                    } catch (error) {
                         console.error('Failed upload ImageProduct', error)
                    }
               }

               if (isEditing && uuidParams) {
                    return updateProductRequest(uuidParams, {
                         ...formData,
                         references: imageId || formData.references
                    })
               }

               return createProductRequest({
                    ...formData,
                    references: imageId || formData.references
               })
          },
          onSuccess: () => {
               queryClient.invalidateQueries(['user'])
               setOnPublish(true)
               setIsPublishDisabled(true)
               resetForm()
               setTimeout(() => {
                    setIsPublishDisabled(false)
                    createProductMutation.reset()
               }, 5000);
          },
          onError: (error) => {
               console.log('Create product error:', error)
               setIsPublishDisabled(false)
          }
     })

     const onSubmit = async (data: CreateProductSchema) => {
          if (isPublishDisabled) return
          if (createProductMutation.isLoading) return
          createProductMutation.mutate(data)
     }

     const handleFileSelect = (file: File) => {
          setSelectedFile(file)
          const objectUrl = URL.createObjectURL(file)
          setPreviewUrl(objectUrl)
     }

     const handleCancel = () => {
          if (!isEditing) {
               resetForm()
          }
          navigate('/')
     }

     const handleModalClose = () => {
          setOnPublish(false)
          queryClient.clear()
     }

     React.useEffect(() => {
          if (userData?.id) {
               setValue('user', userData.id)
          }
     }, [setValue, userData])

     React.useEffect(() => {
          return () => {
               if (previewUrl) {
                    URL.revokeObjectURL(previewUrl)
               }
          }
     }, [previewUrl])

     React.useEffect(() => {
          if (isEditing && requestData?.data) {
               const { attributes } = requestData.data
               setValue('name', attributes.name)
               setValue('productType', attributes.productType)
               setValue('imvu', attributes.imvu)
               setValue('references', attributes.references.data?.id || null)

               if (attributes.references.data?.attributes?.url) {
                    setPreviewUrl(attributes.references.data.attributes.url)
               }
          }
     }, [requestData, setValue, isEditing, userData?.id])

     React.useEffect(() => {
          if (onPublish) {
               document.body.style.overflow = 'hidden'
               document.body.style.paddingRight = `${window.innerWidth - document.documentElement.clientWidth}px`
          } else {
               const timer = setTimeout(() => {
                    document.body.style.overflow = ''
                    document.body.style.paddingRight = ''
               }, 200);

               return () => clearTimeout(timer)
          }
     }, [onPublish])

     return (
          <>
               <section className="px-7 space-y-16 lg:px-20 relative">
                    <div className="space-y-10">
                         <RouteHistory currentRoute="/custom-product" currentText="Custom Product" />
                         <TextTagline text="custom product" className="dark:text-light font-semibold" />
                    </div>
                    <form onSubmit={(e) => {
                         e.preventDefault()
                         handleSubmit(onSubmit)(e)
                    }} className="space-y-16">
                         <input type="hidden" {...register('uuid')} />
                         <input type="hidden" {...register('references')} />
                         <input type="hidden"{...register('user')} />
                         <ProductTypeSelect
                              {...register('productType')}
                              name="productType"
                              type="product"
                              value={watch('productType')}
                              error={errors.productType}
                         />
                         <UploadImageProduct
                              currentImageUrl={previewUrl}
                              onFileSelect={handleFileSelect}
                         />
                         <TextInput
                              {...register('name')}
                              type="text"
                              label="product"
                              error={errors.name}
                         />
                         <ProductTypeSelect
                              {...register('imvu')}
                              name="imvu"
                              type="imvu"
                              value={watch('imvu')}
                              error={errors.imvu}
                         />
                         <TextInput
                              label="user"
                              value={userData?.username || userData?.email}
                              readOnly
                         />
                         <div className="flex items-center gap-x-5 pb-20 lg:pb-0">
                              <Button
                                   isCancel
                                   isGradient={false}
                                   title="Cancel"
                                   onClick={handleCancel}
                                   className="lg:w-44"
                              />
                              <Button
                                   isGradient
                                   type="submit"
                                   disabled={createProductMutation.isLoading || isPublishDisabled}
                                   title={createProductMutation.isLoading ? 'Publishing...'
                                        : isPublishDisabled ? 'Published' : isEditing ? 'Update' : 'Publish'
                                   }
                                   className="lg:w-44"
                              />
                         </div>
                    </form>
               </section>
               <ModalPublishCustomProduct
                    isModalOpen={onPublish}
                    isModalClose={handleModalClose} />
          </>
     )
}

export default CustomProductPage