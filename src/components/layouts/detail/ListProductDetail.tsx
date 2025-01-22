import CatalogCard from '../catalog/CatalogCard'
import ButtonBorderGradient from '../../elements/buttons/ButtonBorderGradient'
import React from 'react'
import { CardStaggerAnimation, ContainerStaggerAnimation } from '../../animations/StaggerAnimation'
import { useQuery } from '@tanstack/react-query'
import { ProductCatalogsResponse } from '../../../types'
import { getProductCatalogs } from '../../../services/productService'

interface ListProductDetailProps {
     currentProductId: number
}

const ListProductDetail: React.FC<ListProductDetailProps> = React.memo(({ currentProductId }) => {
     const [limit, setLimit] = React.useState(4)
     const { data: productData } = useQuery<ProductCatalogsResponse>(['product'], getProductCatalogs)

     const filteredProducts = productData?.data.filter((product) => product.id !== currentProductId)
     const visibleProducts = filteredProducts?.slice(0, limit)

     return (
          <div className="border-t-2 border-dark/30 dark:border-light/20 space-y-10 pb-40 lg:pb-0">
               <h1 className="text-2xl font-semibold pt-5 dark:text-light">
                    Explore Others Products
               </h1>
               <div className="flex flex-col items-center gap-y-16">
                    <ContainerStaggerAnimation
                         initialDelay={0.5}
                         staggerDelay={0.4}
                         className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
                         {visibleProducts?.map((item) => (
                              <CardStaggerAnimation
                                   key={item.id}
                                   hiddenPosition={{ y: 100 }}>
                                   <CatalogCard
                                        isFavored={false}
                                        productId={item.id}
                                        title={item.attributes.name}
                                        image={item.attributes.thumbnail.data.attributes.url}
                                        initialLikeStatus={false}
                                   />
                              </CardStaggerAnimation>
                         ))}
                    </ContainerStaggerAnimation>
                    <ButtonBorderGradient onClick={() => setLimit((prev) => prev + 4)} />
               </div>
          </div>
     )
})

export default ListProductDetail