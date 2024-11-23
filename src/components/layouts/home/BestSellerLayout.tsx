import { useEffect, useState } from 'react'
import CardBestSeller from '../../fragments/home/CardBestSeller'
import TextTagline from '../../fragments/home/TextTagline'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.css'

const BestSellerLayout = () => {
     const [isMobile, setIsMobile] = useState(false)
     const [isTablet, setIsTablet] = useState(false)
     const [bestSeller] = useState([
          <CardBestSeller />,
          <CardBestSeller />,
          <CardBestSeller />,
          <CardBestSeller />,
          <CardBestSeller />,
          <CardBestSeller />
     ])

     const handleResize = () => {
          if (window.innerWidth < 768) {
               setIsMobile(true)
          } else if (window.innerWidth > 760 && window.innerWidth < 1024) {
               setIsTablet(true)
          }
     }

     useEffect(() => {
          handleResize()
          window.addEventListener('resize', handleResize)
          return () => window.removeEventListener('resize', handleResize)
     })

     return (
          <div className="min-h-full">
               <TextTagline text="Best Seller" className='font-semibold' />
               <div className='mt-6'>
                    {/* Card best seller */}
                    {isMobile ?
                         <Swiper
                              slidesPerView={1}
                              className='size-full'>
                              {bestSeller.map((card, index) => (
                                   <SwiperSlide key={index} className='px-2'>
                                        {card}
                                   </SwiperSlide>
                              ))}
                         </Swiper>
                         : isTablet ?
                              <Swiper
                                   slidesPerView={2}
                                   className='size-full'>
                                   {bestSeller.map((card, index) => (
                                        <SwiperSlide key={index} className='px-2'>
                                             {card}
                                        </SwiperSlide>
                                   ))}
                              </Swiper>
                              : <Swiper
                                   slidesPerView={3}
                                   className='size-full'>
                                   {bestSeller.map((card, index) => (
                                        <SwiperSlide key={index} className='px-2 py-5'>
                                             {card}
                                        </SwiperSlide>
                                   ))}
                              </Swiper>
                    }
               </div>
          </div>
     )
}

export default BestSellerLayout