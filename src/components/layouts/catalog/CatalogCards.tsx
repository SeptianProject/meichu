/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import useUI from '../../../hooks/useUI'
import CatalogCard from './CatalogCard'
import ButtonBorderGradient from '../../elements/buttons/ButtonBorderGradient'
import CatalogCardSkeleton from '../../elements/skeletons/CatalogCardSkeleton.tsx'
import { useNavigate } from 'react-router-dom'
import { CardStaggerAnimation, ContainerStaggerAnimation } from '../../animations/StaggerAnimation'
import { useAppSelector } from '../../../redux/hook.ts'
import { useProductCatalog } from '../../../hooks/useQueryRequest.ts'

interface CatalogCardsProps {
     type: 'homePage' | 'catalogPage'
     selectedCategory: number | null
}

const CatalogCards: React.FC<CatalogCardsProps> = React.memo(({ type, selectedCategory }) => {
     const navigate = useNavigate()
     const { screenSize } = useUI()
     const isMobile = screenSize === 'mobile'
     const categoriesRef = React.useRef<HTMLDivElement>(null)

     const [isExpanded, setIsExpanded] = React.useState(false)
     const [displayCount, setDisplayCount] = React.useState(getInitialDisplayCount())

     const { userId, isAuthenticated } = useAppSelector((state) => state.auth)
     const { data: productData, isLoading } = useProductCatalog()

     React.useEffect(() => {
          setIsExpanded(false)
          setDisplayCount(getInitialDisplayCount())
     }, [selectedCategory, screenSize])

     const handleExpandToggle = () => {
          setIsExpanded(!isExpanded)
          if (isExpanded) {
               setTimeout(() => {
                    categoriesRef.current?.scrollIntoView({ behavior: 'smooth' })
               }, 100);
          }
     }

     function getInitialDisplayCount() {
          if (type === 'homePage') return 3
          if (isMobile) return 2
          return Infinity
     }

     const filteredCatalog = React.useMemo(() => {
          if (!productData?.data) return []

          return productData.data.filter((product) => {
               if (selectedCategory === null) return true
               return product.attributes.categories.data.some(category => category.id === selectedCategory)
          }).map((product) => {
               const isLiked = isAuthenticated && Array.isArray(product.attributes.likes)
                    ? product.attributes.likes.some(like => like.id === userId) : false

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
          })
     }, [productData, selectedCategory, isAuthenticated, userId])

     const getCurrentDisplayCount = React.useCallback(() => {
          if (isExpanded) return filteredCatalog.length
          return Math.min(displayCount, filteredCatalog.length)
     }, [])

     const displayedCards = React.useMemo(() => filteredCatalog.slice(0, getCurrentDisplayCount()), [])

     const showExpandButton = type === 'catalogPage' &&
          filteredCatalog.length > getInitialDisplayCount() &&
          (isMobile || !isExpanded)

     if (isLoading) return <CatalogCardSkeleton type={type} />

     return (
          <div className='flex flex-col items-center gap-y-10'>
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
                    <ButtonBorderGradient onClick={() => navigate('/catalog')} />
               ) : showExpandButton ? (
                    <ButtonBorderGradient
                         isExpanded={isExpanded}
                         onClick={handleExpandToggle}
                    />
               ) : null}
          </div>
     )
})

export default CatalogCards