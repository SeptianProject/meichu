import React from 'react'
import BtnBorderGradient from '../../elements/buttons/BorderGradientBtn'
import CatalogCard from './CatalogCard'
import { useNavigate } from 'react-router-dom'
import { CardStaggerAnimation, ContainerStaggerAnimation } from '../../animations/StaggerAnimation'
import { useResize } from '../../../hooks/useResize'

interface CatalogCardsProps {
     type: 'homePage' | 'catalogPage'
}

const catalogCard = <CatalogCard type='catalog' />
const listCatalog = [
     { id: 1, component: catalogCard },
     { id: 2, component: catalogCard },
     { id: 3, component: catalogCard },
     { id: 4, component: catalogCard },
     { id: 5, component: catalogCard },
     { id: 6, component: catalogCard },
     { id: 7, component: catalogCard },
     { id: 8, component: catalogCard },
     { id: 9, component: catalogCard },
]

const CatalogCards: React.FC<CatalogCardsProps> = ({ type }) => {
     const { screenSize } = useResize()
     const navigate = useNavigate()

     const displayedCards = screenSize === 'mobile'
          ? listCatalog.slice(0, 2)
          : type === 'homePage' ? listCatalog.slice(0, 3) : listCatalog

     return (
          <div className='flex flex-col items-center gap-y-10'>
               <ContainerStaggerAnimation
                    initialDelay={0.5}
                    staggerDelay={0.4}
                    className='mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
                    gap-6 lg:gap-4 w-full'>
                    {displayedCards.map((card) => (
                         <CardStaggerAnimation
                              key={card.id}
                              hiddenPosition={{ y: 100 }}
                              className='w-full'>
                              {card.component}
                         </CardStaggerAnimation>
                    ))}
               </ContainerStaggerAnimation>
               {type === 'homePage' && (
                    <BtnBorderGradient onClick={() => navigate('/catalog')} />
               )}
          </div>
     )
}

export default CatalogCards