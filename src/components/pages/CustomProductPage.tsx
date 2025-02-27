import React from "react"
import Button from "../elements/buttons/Button"
import TextTagline from "../fragments/home/TextTagline"
import TextInput from "../fragments/customProduct/TextInput"
import RouteHistory from "../../routes/HistoryRoute"
import ProductTypeSelect from "../layouts/customProduct/ProductTypeSelect"
import UploadImageProduct from "../layouts/customProduct/UploadImageProduct"
import { useForm } from "react-hook-form"
import { createProductSchema, CreateProductSchema } from "../../schema/ProductSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { v4 as uuidv4 } from "uuid"
import { useLocation, useNavigate } from "react-router-dom"
import { uploadFile } from "../../services/authService"
import { createProductRequest, updateProductRequest } from "../../services/productService"
import { useAppDispatch } from "../../redux/hook"
import { useProductRequest, useUserData } from "../../hooks/useQueryRequest"
import ModalInformation from "../layouts/modal/ModalInformation"
import { setTapDiscover } from "../../redux/slices/profileSlice"

const CustomProductPage = () => {
     const queryClient = useQueryClient()
     const navigate = useNavigate()
     const location = useLocation()
     const dispatch = useAppDispatch()

     const uuidParams = location.state?.requestData
     const isEditing = location.state?.isEditing

     const [onPublish, setOnPublish] = React.useState(false)
     const [selectedFile, setSelectedFile] = React.useState<File | null>(null)
     const [previewUrl, setPreviewUrl] = React.useState<string>('')
     const [isPublishDisabled, setIsPublishDisabled] = React.useState(false)
     const [, setSelectedCategoryId] = React.useState<string | null>(null)

     const { data: userData } = useUserData('user')
     const { data: requestData } = useProductRequest(uuidParams)

     const getDefaultValues = React.useCallback(() => ({
          uuid: isEditing ? requestData?.data.attributes.uuid : uuidv4(),
          user: userData?.id as number,
          references: isEditing ? requestData?.data.attributes?.references?.data?.id : null,
          name: isEditing ? requestData?.data.attributes.name : "",
          productType: isEditing ? requestData?.data.attributes.productType : undefined,
          imvu: isEditing ? requestData?.data.attributes.imvu : undefined,
          custom_categories: isEditing && requestData?.data.attributes.custom_categories?.data
               ? requestData.data.attributes.custom_categories.data.map((category: { uuid: string }) => category.uuid)
               : []
     }), [isEditing, requestData, userData])

     const {
          register,
          handleSubmit,
          setValue,
          watch,
          reset,
          formState: { errors },
          trigger
     } = useForm<CreateProductSchema>({
          resolver: zodResolver(createProductSchema),
          defaultValues: getDefaultValues(),
          mode: 'onSubmit'
     })

     const resetForm = React.useCallback((() => {
          reset(getDefaultValues())
          if (previewUrl) {
               URL.revokeObjectURL(previewUrl)
          }
          setSelectedFile(null)
          setPreviewUrl('')
          setSelectedCategoryId(null)
     }), [getDefaultValues, previewUrl, reset])

     const handleCategorySelect = (categoryId: string[] | string) => {
          const categoryArray = Array.isArray(categoryId) ? categoryId : [categoryId]
          setSelectedCategoryId(categoryArray.length > 0 ? categoryArray[0] : null)
          setValue('custom_categories', categoryArray)

          if (categoryArray.length > 0) {
               trigger('custom_categories')
          }
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

               const payload = {
                    ...formData,
                    references: imageId || formData.references,
                    custom_categories: formData.custom_categories
               }

               if (isEditing && uuidParams) {
                    return updateProductRequest(uuidParams, payload)
               }

               return createProductRequest(payload)
          },
          onSuccess: () => {
               queryClient.invalidateQueries(['user'])
               queryClient.invalidateQueries(['userAvatar'])
               setOnPublish(true)
               setIsPublishDisabled(true)
               resetForm()
          },
          onError: (error) => {
               console.error('Create product error:', error)
               setIsPublishDisabled(false)
          }
     })

     const onSubmit = async (data: CreateProductSchema) => {
          if (isPublishDisabled) return
          if (createProductMutation.isLoading) return

          const productType = watch('productType')
          const categories = watch('custom_categories')
          if ((productType === 'Single' || productType === 'Bundle') && (!categories || categories.length === 0)) {
               setValue('custom_categories', [], { shouldValidate: true })
               return
          }

          createProductMutation.mutate(data)
          console.log('Data:', data)
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
          document.body.style.overflow = ''
          document.body.style.paddingRight = ''

          setTimeout(() => {
               setIsPublishDisabled(false)
               createProductMutation.reset()
          }, 3000);

          navigate('/dashboard')
          dispatch(setTapDiscover(true))

          setTimeout(() => {
               window.scrollTo({
                    top: document.body.scrollHeight,
                    behavior: 'smooth'
               })
          }, 500)
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

               if (attributes.custom_categories?.data?.length) {
                    const categoryId = attributes.custom_categories.data[0].attributes.uuid;
                    setSelectedCategoryId(categoryId);
                    setValue('custom_categories', [categoryId]);
               }

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

          return () => {
               document.body.style.overflow = ''
               document.body.style.paddingRight = ''
          }
     }, [onPublish])

     const productTypeSelected = watch('productType') === 'Single' || watch('productType') === 'Bundle'

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
                         <input type="hidden"{...register('custom_categories')} />
                         <ProductTypeSelect
                              {...register('productType')}
                              name="productType"
                              type="product"
                              value={watch('productType')}
                              error={errors.productType}
                              onCategorySelect={handleCategorySelect}
                              categoryRequired={productTypeSelected}
                              categoryError={errors.custom_categories?.[0]}
                         />
                         <UploadImageProduct
                              currentImageUrl={previewUrl}
                              onFileSelect={handleFileSelect}
                         />
                         <TextInput
                              {...register('name')}
                              type="text"
                              label="product"
                              value={watch('name')}
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
                                   type="button"
                                   isGold={false}
                                   title="Cancel"
                                   onClick={handleCancel}
                                   className="w-32 lg:w-44"
                              />
                              <Button
                                   isGold
                                   type="submit"
                                   disabled={createProductMutation.isLoading || isPublishDisabled}
                                   title={createProductMutation.isLoading ? 'Publishing...'
                                        : isPublishDisabled ? 'Published' : isEditing ? 'Update' : 'Publish'
                                   }
                                   className="w-32 lg:w-44"
                              />
                         </div>
                    </form>
               </section>
               <ModalInformation
                    isOpen={onPublish}
                    onClose={handleModalClose}
                    title="Request Received!"
                    message="Thank you for your request. It will be processed within 1-2 weeks. We'll notify you via email once it's ready. Thank you for your patience!"
                    buttonText="Okay!"
               />
          </>
     )
}

export default CustomProductPage