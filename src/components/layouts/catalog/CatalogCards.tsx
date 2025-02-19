/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import useUI from '../../../hooks/useUI'
import CatalogCard from './CatalogCard'
import CatalogCardSkeleton from '../../elements/skeletons/CatalogCardSkeleton.tsx'
import { useNavigate } from 'react-router-dom'
import { CardStaggerAnimation, ContainerStaggerAnimation } from '../../animations/StaggerAnimation'
import { useAppSelector } from '../../../redux/hook.ts'
import { useProducts } from '../../../hooks/useQueryRequest.ts'
import { getCloudinaryUrl } from '../../../services/index.ts'
import Button from '../../elements/buttons/Button.tsx'

interface CatalogCardsProps {
     type: 'homePage' | 'catalogPage'
     selectedCategory: number | null
}

const CatalogCards: React.FC<CatalogCardsProps> = React.memo(({ type, selectedCategory }) => {
     const navigate = useNavigate()
     const { screenSize } = useUI()
     const isMobile = screenSize === 'mobile'
     const productRef = React.useRef<HTMLDivElement>(null)
     const likedProducts = useAppSelector((state) => state.like.likedProducts)

     const [isExpanded, setIsExpanded] = React.useState(false)
     const [displayCount, setDisplayCount] = React.useState(getInitialDisplayCount())

     const { data: products, isLoading } = useProducts()

     React.useEffect(() => {
          setIsExpanded(false)
          setDisplayCount(getInitialDisplayCount())
     }, [selectedCategory, screenSize])

     const handleExpandToggle = () => {
          setIsExpanded(!isExpanded)
          if (isExpanded) {
               productRef.current?.scrollIntoView({ behavior: 'smooth' })
          }
     }

     function getInitialDisplayCount() {
          if (type === 'homePage') return 3
          if (isMobile) return 2
          return Infinity
     }

     const filteredCatalog = React.useMemo(() => {
          if (!products?.data) return []

          return products.data.filter((product) => {
               if (selectedCategory === null) return true
               return product.attributes.categories.data.some(category => category.id === selectedCategory)
          }).map((product) => {
               return (
                    <CatalogCard
                         key={product.id}
                         productId={product.id}
                         isFavored={false}
                         title={product.attributes.name}
                         image={getCloudinaryUrl(product.attributes.thumbnail.data.attributes.url)}
                         isProfileView={false}
                    />
               )
          })
     }, [products, selectedCategory, likedProducts])

     const getCurrentDisplayCount = () => {
          if (isExpanded) return filteredCatalog.length
          return Math.min(displayCount, filteredCatalog.length)
     }

     const displayedCards = filteredCatalog.slice(0, getCurrentDisplayCount())

     const showExpandButton = type === 'catalogPage' &&
          filteredCatalog.length > getInitialDisplayCount() &&
          (isMobile || !isExpanded)

     if (isLoading) return <CatalogCardSkeleton type={type} />

     return (
          <div ref={productRef} className='flex flex-col items-center gap-y-10'>
               <ContainerStaggerAnimation
                    initialDelay={0.5}
                    staggerDelay={0.4}
                    className='mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
                    gap-6 lg:gap-4 w-full'>
                    {displayedCards.map((card, index) => (
                         <CardStaggerAnimation
                              hiddenPosition={{ y: 50 }}
                              key={`${selectedCategory}-${index}`}>
                              {card}
                         </CardStaggerAnimation>
                    ))}
               </ContainerStaggerAnimation>
               {type === 'homePage' ? (
                    <Button
                         isGold
                         title='Load More'
                         onClick={() => navigate('/catalog')}
                         className='w-28 md:w-32'
                    />
               ) : showExpandButton ? (
                    <Button
                         isGold
                         title={isExpanded ? 'Show Less' : 'Load More'}
                         onClick={handleExpandToggle}
                         className='w-28 md:w-32'
                    />
               ) : null}
          </div>
     )
})

export default CatalogCards