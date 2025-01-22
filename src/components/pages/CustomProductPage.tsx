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
import { getUser, uploadFile } from "../../services/authService"
import { v4 as uuidv4 } from "uuid"
import Button from "../elements/buttons/Button"
import { useNavigate } from "react-router-dom"
import { createProductRequest } from "../../services/ProductService"

const CustomProductPage = () => {
     const navigate = useNavigate()
     const queryClient = useQueryClient()
     const [onPublish, setOnPublish] = React.useState(false)
     const [selectedFile, setSelectedFile] = React.useState<File | null>(null)
     const [previewUrl, setPreviewUrl] = React.useState<string>('')
     const [isPublishDisabled, setIsPublishDisabled] = React.useState(false)
     const { data: userData } = useQuery(['user'], () => getUser(''))
     const getDefaultValues = () => ({
          uuid: uuidv4(),
          user: userData?.id as number,
          references: null,
          name: '',
          productType: undefined,
          imvu: undefined
     })

     const {
          register,
          handleSubmit,
          setValue,
          watch,
          reset,
          formState: { errors }
     } = useForm<CreateProductSchema>({
          resolver: zodResolver(createProductSchema),
          defaultValues: getDefaultValues()
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
               return createProductRequest({
                    ...formData,
                    references: imageId
               })
          },
          onSuccess: (data) => {
               queryClient.invalidateQueries(['user'])
               setOnPublish(true)
               setIsPublishDisabled(true)
               resetForm()
               setTimeout(() => {
                    setIsPublishDisabled(false)
                    createProductMutation.reset()
               }, 5000);
               console.log('Create product success:', data)
          },
          onError: (error) => {
               console.log('Create product error:', error)
               setIsPublishDisabled(false)
          }
     })

     const onSubmit = (data: CreateProductSchema) => {
          if (isPublishDisabled) return
          createProductMutation.mutate(data)
     }

     const handleFileSelect = (file: File) => {
          setSelectedFile(file)
          setPreviewUrl(URL.createObjectURL(file))
     }

     const handleCancel = () => {
          resetForm()
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
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-16">
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
                                        : isPublishDisabled ? 'Published' : 'Publish'
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