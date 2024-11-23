import { useEffect, useState } from 'react'
import BtnBorderGradient from '../../elements/BtnBorderGradient'
import CatalogCard from './CatalogCard'
import { useNavigate } from 'react-router-dom'


const CatalogCards = () => {
     const [isMobile, setIsMobile] = useState(false)
     const navigate = useNavigate()

     const handleResize = () => {
          if (window.innerWidth < 1024) {
               setIsMobile(true)
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
                    {isMobile ? <>
                         <CatalogCard />
                         <CatalogCard />
                         <CatalogCard />
                         <CatalogCard />
                    </> : <>
                         <CatalogCard />
                         <CatalogCard />
                         <CatalogCard />
                    </>
                    }
               </div>
               <BtnBorderGradient onClick={() => navigate('/catalog-detail')} />
          </div>
     )
}

export default CatalogCards