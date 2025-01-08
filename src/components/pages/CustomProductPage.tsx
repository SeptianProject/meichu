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
import { createProductRequest } from "../../services/ProductService"
import { getUser } from "../../services/AuthService"
import { v4 as uuidv4 } from "uuid"
import Button from "../elements/buttons/Button"
import { useNavigate } from "react-router-dom"

const CustomProductPage = () => {
     const [imageUrl, setImageUrl] = React.useState<string>("")
     const [imageId, setImageId] = React.useState<number>(0)
     const [onPublish, setOnPublish] = React.useState(false)
     const navigate = useNavigate()
     const queryClient = useQueryClient()
     const { data: userData } = useQuery({
          queryKey: ['user'],
          queryFn: () => getUser('')
     })

     const {
          register,
          handleSubmit,
          setValue,
          watch,
          formState: { errors }
     } = useForm<CreateProductSchema>({
          resolver: zodResolver(createProductSchema),
          defaultValues: {
               uuid: uuidv4(),
               user: userData?.id as number,
          }
     })

     React.useEffect(() => {
          if (userData?.id) {
               setValue('user', userData?.id as number)
          }
     }, [setValue, userData])

     const createProductMutation = useMutation(createProductRequest, {
          onSuccess: () => {
               queryClient.invalidateQueries(['user', userData?.id])
               setOnPublish(true)
          },
          onError: (error) => {
               console.log('Create product error:', error)
          }
     })

     const onSubmit = (data: CreateProductSchema) => {
          console.log('Data:', data)
          if (!createProductMutation.isLoading) {
               createProductMutation.mutate({
                    ...data,
                    user: userData?.id as number,
                    references: imageId,
               });
          }
     }

     const handleImageUpload = (url: string, id: number) => {
          setImageUrl(url)
          setImageId(id)
          setValue('references', id)
     }

     const handleModalClose = () => {
          setOnPublish(false)
          queryClient.clear()
     }

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
                         <ProductTypeSelect
                              {...register('productType')}
                              name="productType"
                              type="product"
                              value={watch('productType')}
                              error={errors.productType}
                         />
                         <UploadImageProduct
                              currentImageUrl={imageUrl}
                              onUploadSuccess={handleImageUpload}
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
                              type="number"
                              label="user"
                              error={errors.user}
                              {...register('user')}
                         />
                         <div className="flex items-center gap-x-5 pb-20 lg:pb-0">
                              <Button
                                   isCancel
                                   isGradient={false}
                                   title="Cancel"
                                   onClick={() => navigate('/')}
                                   className="lg:w-44"
                              />
                              <Button
                                   isGradient
                                   type="submit"
                                   title="Publish"
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