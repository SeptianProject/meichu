import { useEffect, useState } from 'react'
import CardBestSeller from '../../fragments/home/CardBestSeller'
import TextTagline from '../../fragments/home/TextTagline'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.css'
import { CardStaggerAnimation, ContainerStaggerAnimation } from '../../../animations/StaggerAnimation'

const BestSellerLayout = () => {
     const [screenSize, setScreenSize] = useState<'mobile' | 'tablet' | 'desktop'>('desktop')
     const [bestSeller] = useState([
          <CardBestSeller />,
          <CardBestSeller />,
          <CardBestSeller />,
          <CardBestSeller />,
          <CardBestSeller />,
          <CardBestSeller />
     ])

     const handleResize = () => {
          const width = window.innerWidth
          if (width < 768) {
               setScreenSize('mobile')
          } else if (width >= 768 && width < 1024) {
               setScreenSize('tablet')
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
          <div className="min-h-full">
               <TextTagline text="Best Seller" className='font-semibold' />
               <ContainerStaggerAnimation
                    initialDelay={0.5}
                    staggerDelay={0.4}
                    className='mt-6'>
                    <Swiper
                         slidesPerView={screenSize === 'mobile' ? 1 :
                              screenSize === 'tablet' ? 2 : 3}
                         className='size-full'>
                         {bestSeller.map((card, index) => (
                              <SwiperSlide key={index} className='px-2 py-5'>
                                   <CardStaggerAnimation
                                        hiddenPosition={{ y: 100 }}
                                        className='w-full'>
                                        {card}
                                   </CardStaggerAnimation>
                              </SwiperSlide>
                         ))}
                    </Swiper>
               </ContainerStaggerAnimation>
          </div>
     )
}

export default BestSellerLayout