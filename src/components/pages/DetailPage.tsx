import RouteHistory from "../layouts/RouteHistory"
import React from "react"
import ListProductDetail from "../layouts/detail/ListProductDetail"
import { FadeAnimation } from "../animations/FadeAnimation"
import { useNavigate, useParams } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"
import { ProductCatalogsResponse } from "../../types"
import { getProductCatalogs } from "../../services/productService"
import { AnimatePresence } from "framer-motion"
import ScaleAnimation from "../animations/ScaleAnimtion"
import ProductDetail from "../fragments/detail/ProductDetail"
import Button from "../elements/buttons/Button"

const DetailPage = () => {
     const navigate = useNavigate();
     const { productId } = useParams<{ productId: string }>()
     const [selectContent, setSelectContent] = React.useState<number | null>(null)
     const { data: productData } = useQuery({
          queryKey: ['product', productId],
          queryFn: async () => {
               const response: ProductCatalogsResponse = await getProductCatalogs()
               const product = response.data.find(product => product.id === Number(productId))
               if (!product) throw new Error('Product not found')
               return product
          }
     })

     const handleSelectContent = (contentId: number) => {
          setSelectContent(contentId)
     }

     if (!productData) {
          return <div>Loading...</div>
     }

     const thumbnail = productData.attributes.thumbnail.data
     const itemsImage = productData.attributes.images.data.slice(0, 2)

     const images = [
          {
               id: thumbnail?.id,
               source: thumbnail?.attributes.url
          },
          ...itemsImage.map((image) => ({
               id: image.id,
               source: image.attributes.url
          }))
     ]

     const initialImageId = selectContent || thumbnail?.id
     const contentActive = images.find(img => img.id === initialImageId)?.source || images[0].source;


     return (
          <FadeAnimation className="px-7 space-y-10 lg:px-20 relative">
               <RouteHistory
                    prevRoute="/catalog"
                    prevText="Catalog"
                    currentRoute={`/catalog-detail/${productId}`}
                    currentText="Detail" />
               <div className="space-y-10 lg:flex items-start gap-x-16">
                    <FadeAnimation
                         style={{ backgroundImage: `url(${contentActive})` }}
                         className="w-full h-[22rem] rounded-2xl bg-cover bg-center 
               transition-all duration-500 flex flex-col items-start justify-center
               gap-y-5 p-5 lg:h-[38rem]">
                         <AnimatePresence>
                              {images.map((image) => (
                                   <ScaleAnimation key={image.id}>
                                        <ProductDetail
                                             source={image.source}
                                             onClick={() => handleSelectContent(image.id)} />
                                   </ScaleAnimation>
                              ))}
                         </AnimatePresence>
                    </FadeAnimation>
                    <div className="space-y-8 lg:space-y-5 w-full">
                         <div className="space-y-1 lg:max-w-80">
                              <h1 className="dark:text-light uppercase text-3xl font-bold">
                                   {productData.attributes.name} Couple Series
                              </h1>
                              <div className='flex flex-col gap-y-1 w-fit'>
                                   <h5 className='font-light text-opacity-70 dark:text-light/60'>
                                        {productData.attributes.categories.data[0].attributes.name}
                                   </h5>
                                   <div className="w-full h-[3px] rounded-full bg-gold" />
                              </div>
                         </div>
                         <div className="space-y-2 lg:max-w-[23rem]">
                              <h3 className="dark:text-light text-xl font-semibold">Description</h3>
                              <p className="dark:text-light/60 text-sm text-opacity-70 font-light dark:font-extralight">
                                   {productData.attributes.description}
                              </p>
                         </div>
                         <div className="space-y-2">
                              <h3 className="dark:text-light text-xl text-opacity-70 font-semibold">Price</h3>
                              <p className="dark:text-light/60 text-opacity-70 font-light dark:font-extralight">
                                   ${productData.attributes.price}
                              </p>
                         </div>
                         <div className="flex items-center gap-x-5 pb-10">
                              <Button
                                   isGradient
                                   title="Buy Now!"
                                   onClick={() => { }}
                                   className="lg:w-44"
                              />
                              <Button
                                   isCancel
                                   isGradient={false}
                                   title="Cancel"
                                   onClick={() => navigate('/')}
                                   className="lg:w-44"
                              />
                         </div>
                    </div>
               </div>
               <ListProductDetail currentProductId={Number(productId)} />
          </FadeAnimation>
     )
}

export default DetailPage