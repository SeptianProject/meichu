import React from 'react'
import ButtonBorderGradient from '../../elements/buttons/ButtonBorderGradient'
import CatalogCard from './CatalogCard'
import { useNavigate } from 'react-router-dom'
import { ContainerStaggerAnimation } from '../../animations/StaggerAnimation'
import useUI from '../../../hooks/useUI'
import { useQuery } from '@tanstack/react-query'
import { ProductCatalogsResponse } from '../../../types/product.ts'
import { useAppSelector } from '../../../redux/hook.ts'
import { getProductCatalogs } from '../../../services/productService'
import Skeleton from 'react-loading-skeleton'

interface CatalogCardsProps {
     type: 'homePage' | 'catalogPage'
     selectedCategory: number | null
}

const CatalogCards: React.FC<CatalogCardsProps> = React.memo(({ type, selectedCategory }) => {
     const { screenSize } = useUI()
     const navigate = useNavigate()
     const isMobile = screenSize === 'mobile'
     const { userId, isAuthenticated } = useAppSelector((state) => state.auth)
     const { data: productData, isLoading } = useQuery<ProductCatalogsResponse>(['product'], getProductCatalogs)
     const [isExpanded, setIsExpanded] = React.useState(false)

     React.useEffect(() => {
          setIsExpanded(false)
     }, [selectedCategory])

     const filteredCatalog = React.useMemo(() => {
          if (!productData) return []

          return productData.data.filter((product) => {
               if (selectedCategory === null) return true
               return product.attributes.categories.data.some(category => category.id === selectedCategory)
          }).map((product) => {
               const isLiked = isAuthenticated && Array.isArray(product.attributes.likes)
                    ? product.attributes.likes.some(like => like.id === userId) : false

               return (
                    <>
                         {isLoading ? <Skeleton className='h-60 md:h-[22rem] lg:h-[28rem] rounded-xl ' />
                              : <CatalogCard
                                   key={product.id}
                                   productId={product.id}
                                   isFavored={false}
                                   title={product.attributes.name}
                                   image={product.attributes.thumbnail.data.attributes.url}
                                   initialLikeStatus={isLiked}
                              />}
                    </>
               )
          })
     }, [productData, selectedCategory, isAuthenticated, userId, isLoading])


     if (isLoading) {
          return (
               <div className='flex flex-col items-center gap-y-10'>
                    <ContainerStaggerAnimation
                         initialDelay={0.5}
                         staggerDelay={0.4}
                         className='mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
                         gap-6 lg:gap-5 w-full'>
                         {[...Array(type === 'homePage' ? 3 : isMobile ? 2 : 6)].map((_, index) => (
                              <Skeleton key={index} className='h-40 lg:h-[25rem] px-20 rounded-2xl' />
                         ))}
                    </ContainerStaggerAnimation>
                    <Skeleton className='w-28 md:w-32 h-10 rounded-full' />
               </div>
          )
     }

     const getDisplayCount = () => {
          if (type === 'homePage') return 3
          if (isMobile && !isExpanded) return 2
          return filteredCatalog.length
     }

     const displayedCards = filteredCatalog.slice(0, isExpanded ? filteredCatalog.length : getDisplayCount())

     const showExpandButton = type === 'catalogPage' &&
          (isMobile || filteredCatalog.length > getDisplayCount())

     return (
          <div className='flex flex-col items-center gap-y-10'>
               <ContainerStaggerAnimation
                    initialDelay={0.5}
                    staggerDelay={0.4}
                    className='mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
                    gap-6 lg:gap-4 w-full'>
                    {displayedCards?.map((card, index) => (
                         <div key={index}>
                              {card}
                         </div>
                    ))}
               </ContainerStaggerAnimation>
               {type === 'homePage'
                    ? <ButtonBorderGradient onClick={() => navigate('/catalog')} />
                    : showExpandButton
                         ? <ButtonBorderGradient
                              isExpanded={isExpanded}
                              onClick={() => setIsExpanded(!isExpanded)} />
                         : null
               }
          </div>
     )
})

export default CatalogCards