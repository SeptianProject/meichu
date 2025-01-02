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
import RoundedButton from "../elements/buttons/RoundedBtn"
import { getUser } from "../../services/AuthService"
import { v4 as uuidv4 } from "uuid"

const CustomProductPage = () => {
     const [imageUrl, setImageUrl] = React.useState<string>("")
     const [imageId, setImageId] = React.useState<number>(0)
     const [onPublish, setOnPublish] = React.useState(false)
     const queryClient = useQueryClient()
     const { data: userData } = useQuery({
          queryKey: ['user'],
          queryFn: () => getUser('')
     })

     const {
          register,
          handleSubmit,
          setValue,
          formState: { errors }
     } = useForm<CreateProductSchema>({
          resolver: zodResolver(createProductSchema),
          defaultValues: {
               uuid: uuidv4(),
               user: userData?.id as number,
               productType: 'Single',
               imvu: false
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
                              onBlur={() => setValue('productType', 'Single')}
                              name="productType"
                              type="product"
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
                              onBlur={() => setValue('imvu', false)}
                              name="imvu"
                              type="imvu"
                              error={errors.imvu}
                         />
                         <TextInput
                              type="number"
                              label="user"
                              error={errors.user}
                              {...register('user')}
                         />
                         <div className="flex items-center gap-x-5 pb-20 lg:pb-0">
                              <RoundedButton title="Cancel" />
                              <RoundedButton type="submit" title="Publish" />
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