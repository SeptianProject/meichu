import React from 'react'
import ButtonBorderGradient from '../../elements/buttons/ButtonBorderGradient'
import CatalogCard from './CatalogCard'
import { useNavigate } from 'react-router-dom'
import { CardStaggerAnimation, ContainerStaggerAnimation } from '../../animations/StaggerAnimation'
import useUI from '../../../hooks/useUI'
import { useQuery } from '@tanstack/react-query'
import { getProductCatalogs } from '../../../services/ProductService.ts'
import { ProductCatalogsResponse } from '../../../types/product.ts'
import { useAppSelector } from '../../../redux/hook.ts'

interface CatalogCardsProps {
     type: 'homePage' | 'catalogPage'
}

const CatalogCards: React.FC<CatalogCardsProps> = React.memo(({ type }) => {
     const { screenSize } = useUI()
     const navigate = useNavigate()
     const { userId, isAuthenticated } = useAppSelector((state) => state.auth)
     const { data: productData } = useQuery<ProductCatalogsResponse>(['products'], getProductCatalogs)

     const listCatalog = React.useMemo(() => productData?.data.map((product) => {
          const isLiked = isAuthenticated && Array.isArray(product.attributes.likes)
               ? product.attributes.likes.some(like => like.id === userId)
               : false

          return (
               <CatalogCard
                    key={product.id}
                    productId={product.id}
                    isFavored={false}
                    title={product.attributes.name}
                    image={product.attributes.thumbnail.data.attributes.url}
                    initialLikeStatus={isLiked}
               />
          )
     }), [productData, isAuthenticated, userId])

     const displayedCards = screenSize === 'mobile'
          ? listCatalog?.slice(0, 2)
          : type === 'homePage' ? listCatalog?.slice(0, 3) : listCatalog

     return (
          <div className='flex flex-col items-center gap-y-10'>
               <ContainerStaggerAnimation
                    initialDelay={0.5}
                    staggerDelay={0.4}
                    className='mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
                    gap-6 lg:gap-4 w-full'>
                    {displayedCards?.map((card, index) => (
                         <CardStaggerAnimation
                              key={index}
                              hiddenPosition={{ y: 100 }}
                              className='w-full'>
                              {card}
                         </CardStaggerAnimation>
                    ))}
               </ContainerStaggerAnimation>
               {type === 'homePage'
                    ? <ButtonBorderGradient onClick={() => navigate('/catalog')} />
                    : screenSize === 'mobile'
                         ? <ButtonBorderGradient onClick={() => navigate('/catalog')} />
                         : null
               }
          </div>
     )
})

export default CatalogCards