import { useEffect, useState } from 'react'
import BtnBorderGradient from '../../elements/BtnBorderGradient'
import CatalogCard from './CatalogCard'
import { useNavigate } from 'react-router-dom'

const catalogCard = <CatalogCard type='catalog' />

const listCatalog = [
     { id: 1, component: catalogCard },
     { id: 2, component: catalogCard },
     { id: 3, component: catalogCard },
     { id: 4, component: catalogCard },
     { id: 5, component: catalogCard },
]

const CatalogCards = () => {
     const [screenSize, setScreenSize] = useState<'mobile' | 'desktop'>('desktop')
     const navigate = useNavigate()

     const displayedCards = screenSize === 'mobile'
          ? listCatalog.slice(0, 4) : listCatalog.slice(0, 3)

     const handleResize = () => {
          if (window.innerWidth < 1024) {
               setScreenSize('mobile')
          } else {
               setScreenSize('desktop')
          }
     }

     useEffect(() => {
          handleResize()
          window.addEventListener('resize', handleResize)
          return () => window.removeEventListener('resize', handleResize)
     }, [])

     return (
          <div className='flex flex-col items-center gap-y-10'>
               <div className='mt-12 grid grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 lg:gap-4 w-full'>
                    {/* Card catalog */}
                    {displayedCards.map((card) => (
                         <div key={card.id} className='w-full'>
                              {card.component}
                         </div>
                    ))}
               </div>
               <BtnBorderGradient onClick={() => navigate('/catalog-detail')} />
          </div>
     )
}

export default CatalogCards