import { useEffect, useState } from 'react'
import CardBestSeller from '../../fragments/home/CardBestSeller'
import TextTagline from '../../fragments/home/TextTagline'

const BestSeller = () => {
     const [displayMob, setDisplayMob] = useState(false)

     const handleDisplayMob = () => {
          if (window.innerWidth <= 1024) {
               setDisplayMob(true)
          }
     }

     useEffect(() => {
          handleDisplayMob()
          window.addEventListener('resize', handleDisplayMob)
          return () => window.removeEventListener('resize', handleDisplayMob)
     })

     return (
          <div className="min-h-[50vh]">
               <TextTagline text="Best Seller" className='font-semibold' />
               <div className='mt-6 grid grid-rows-1 grid-cols-1 lg:grid-cols-3 gap-4'>
                    {/* Card best seller */}
                    {
                         displayMob ?
                              <CardBestSeller />
                              : <>
                                   <CardBestSeller />
                                   <CardBestSeller />
                                   <CardBestSeller />
                              </>
                    }
               </div>
          </div>
     )
}

export default BestSeller