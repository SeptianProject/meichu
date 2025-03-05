import React from "react"
import { v4 as uuidv4 } from "uuid"
import { useProductRequest, useUserData } from "./useQueryRequest"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { CreateProductSchema, createProductSchema, UpdateProductSchema, updateProductSchema } from "../schema/ProductSchema"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { uploadFile } from "../services/authService"
import { createProductRequest, updateProductRequest } from "../services/productService"
import { setTapDiscover } from "../redux/slices/profileSlice"
import { useNavigate } from "react-router-dom"
import { useAppDispatch } from "../redux/hook"

export const useProductForm = (uuidParams: string, isEditing: boolean) => {
     const queryClient = useQueryClient()
     const navigate = useNavigate()
     const dispatch = useAppDispatch()

     const [onPublish, setOnPublish] = React.useState(false)
     const [selectedFile, setSelectedFile] = React.useState<File | null>(null)
     const [previewUrl, setPreviewUrl] = React.useState<string>('')
     const [isPublishDisabled, setIsPublishDisabled] = React.useState(false)
     const [, setSelectedCategoryId] = React.useState<string | null>(null)

     const { data: userData } = useUserData('user')
     const { data: requestData } = useProductRequest(uuidParams)

     const getDefaultValues = React.useCallback(() => {
          const baseDefaults = {
               uuid: isEditing ? requestData?.data.attributes.uuid : uuidv4(),
               user: userData?.id,
               name: isEditing ? requestData?.data.attributes.name : "",
               productType: isEditing ? requestData?.data.attributes.productType : undefined,
               imvu: isEditing ? requestData?.data.attributes.imvu : undefined,
               custom_categories: isEditing && requestData?.data.attributes.custom_categories?.data
                    ? requestData.data.attributes.custom_categories.data.map((category: { uuid: string }) => category.uuid)
                    : []
          }

          return !isEditing
               ? {
                    ...baseDefaults,
                    references: undefined
               }
               : baseDefaults
     }, [isEditing, requestData, userData])

     const {
          register,
          handleSubmit,
          setValue,
          watch,
          reset,
          formState: { errors },
          trigger
     } = useForm<CreateProductSchema>({
          resolver: zodResolver(isEditing ? updateProductSchema : createProductSchema),
          defaultValues: getDefaultValues(),
          mode: 'onSubmit'
     })

     const resetForm = React.useCallback(() => {
          reset(getDefaultValues())
          if (previewUrl) {
               URL.revokeObjectURL(previewUrl)
          }
          setSelectedFile(null)
          setPreviewUrl('')
          setSelectedCategoryId(null)
     }, [getDefaultValues, previewUrl, reset])

     const handleCategorySelect = (categoryId: string[] | string) => {
          const categoryArray = Array.isArray(categoryId) ? categoryId : [categoryId]
          setSelectedCategoryId(categoryArray.length > 0 ? categoryArray[0] : null)
          setValue('custom_categories', categoryArray)

          if (categoryArray.length > 0) {
               trigger('custom_categories')
          }
          setValue('custom_categories', categoryArray, { shouldValidate: true })
     }

     const handleFileSelect = (file: File) => {
          setSelectedFile(file)
          const objectUrl = URL.createObjectURL(file)
          setPreviewUrl(objectUrl)
          if (!isEditing) {
               setValue('references', 0)
          }
     }

     const productMutation = useMutation({
          mutationFn: async (formData: CreateProductSchema | UpdateProductSchema) => {
               let imageId = null

               if (!isEditing && selectedFile) {
                    try {
                         const uploadResult = await uploadFile(selectedFile)
                         imageId = uploadResult[0].id
                    } catch (error) {
                         console.error('Failed upload ImageProduct', error)
                    }
               }

               const payload = {
                    ...formData,
                    ...(imageId && { references: imageId }),
                    custom_categories: formData.custom_categories || []
               }

               if (isEditing) {
                    delete payload.references
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
          if (productMutation.isLoading) return

          const productType = watch('productType')
          const categories = watch('custom_categories')

          if ((productType === 'Single' || productType === 'Bundle') && (!categories || categories.length === 0)) {
               setValue('custom_categories', [], { shouldValidate: true })
               return
          }

          productMutation.mutate(data)
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

               if (attributes.custom_categories?.data?.length) {
                    const categoryId = attributes.custom_categories.data.map(
                         (category: { attributes: { uuid: string } }) => category.attributes.uuid
                    )
                    setSelectedCategoryId(categoryId[0])
                    setValue('custom_categories', categoryId)
               }

               if (attributes.references.data?.attributes?.url) {
                    setPreviewUrl(attributes.references.data.attributes.url)
               }
          }
     }, [requestData, setValue, isEditing])

     const handleModalClose = () => {
          setOnPublish(false)
          document.body.style.overflow = ''
          document.body.style.paddingRight = ''

          setTimeout(() => {
               setIsPublishDisabled(false)
               productMutation.reset()
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

     const handleCancel = () => {
          if (!isEditing) {
               resetForm()
          }
          navigate('/')
     }

     React.useEffect(() => {
          if (onPublish) {
               document.body.style.overflow = 'hidden'
               document.body.style.paddingRight = `${window.innerWidth - document.documentElement.clientWidth}px`
          } else {
               const timer = setTimeout(() => {
                    document.body.style.overflow = ''
                    document.body.style.paddingRight = ''
               }, 200)

               return () => clearTimeout(timer)
          }

          return () => {
               document.body.style.overflow = ''
               document.body.style.paddingRight = ''
          }
     }, [onPublish])

     return {
          register,
          handleSubmit,
          setValue,
          watch,
          trigger,
          onSubmit,
          errors,
          selectedFile,
          previewUrl,
          isPublishDisabled,
          onPublish,
          setOnPublish,
          handleFileSelect,
          handleModalClose,
          handleCancel,
          handleCategorySelect,
          resetForm,
          userData,
          productMutation,
          productTypeSelected: watch('productType') === 'Single' || watch('productType') === 'Bundle'
     }
}