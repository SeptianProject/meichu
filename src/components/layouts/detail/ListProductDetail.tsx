import CatalogCard from '../catalog/CatalogCard'
import React from 'react'
import { CardStaggerAnimation, ContainerStaggerAnimation } from '../../animations/StaggerAnimation'
import { useProducts } from '../../../hooks/useQueryRequest'
import CatalogCardSkeleton from '../../elements/skeletons/CatalogCardSkeleton'
import Skeleton from 'react-loading-skeleton'
import { getCloudinaryUrl } from '../../../services'
import Button from '../../elements/buttons/Button'

interface ListProductDetailProps {
     currentProductId: number
}

const ListProductDetail: React.FC<ListProductDetailProps> = React.memo(({ currentProductId }) => {
     const [isExpanded, setIsExpanded] = React.useState(false)
     const [displayCount] = React.useState(3)
     const productRef = React.useRef<HTMLDivElement>(null)
     const { data: products, isLoading } = useProducts()

     const filteredProducts = React.useMemo(() =>
          products?.data?.filter((product) => product.id !== currentProductId) || [],
          [currentProductId, products]
     )

     const getCurrentDisplayCount = React.useCallback(() => {
          return isExpanded ? filteredProducts.length : Math.min(displayCount, filteredProducts.length)
     }, [displayCount, filteredProducts, isExpanded])

     const handleExpandToggle = React.useCallback(() => {
          setIsExpanded((prev) => !prev)
          if (isExpanded) {
               productRef.current?.scrollIntoView({ behavior: 'smooth' })
          }
     }, [isExpanded])

     const displayedCards = filteredProducts?.slice(0, getCurrentDisplayCount())

     if (isLoading) {
          return (
               <div className='border-t-2 border-dark/30 dark:border-light/20 lg:pb-0'>
                    <Skeleton className='w-60 h-10 mt-5' />
                    <CatalogCardSkeleton type='catalogPage' />
               </div>
          )
     }

     return (
          <div ref={productRef} className="border-t-2 border-dark/30 dark:border-light/20 space-y-10 pb-10 lg:pb-0">
               <h1 className="text-2xl font-semibold pt-5 dark:text-light">
                    Explore Others Products
               </h1>
               <div className="flex flex-col items-center gap-y-16">
                    <ContainerStaggerAnimation
                         initialDelay={0.5}
                         staggerDelay={0.4}
                         className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
                         {displayedCards?.map((item) => (
                              <CardStaggerAnimation
                                   key={item.id}
                                   hiddenPosition={{ y: 100 }}>
                                   <CatalogCard
                                        isFavored={false}
                                        productId={item.id}
                                        title={item.attributes.name}
                                        image={getCloudinaryUrl(item.attributes.thumbnail.data.attributes.url)}
                                   />
                              </CardStaggerAnimation>
                         ))}
                    </ContainerStaggerAnimation>
                    <Button
                         isGold
                         title={isExpanded ? 'Show Less' : 'Load More'}
                         onClick={handleExpandToggle}
                         className='w-28 md:w-32'
                    />
               </div>
          </div>
     )
})

export default ListProductDetail