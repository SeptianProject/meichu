import React from 'react'
import BounceAnimation from '../../animations/BounceAnimation'
import { BundleProducts } from '../../../interfaces'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Swiper as SwiperType } from 'swiper/types'
import { Autoplay, EffectCoverflow, Navigation } from 'swiper/modules'
import 'swiper/swiper-bundle.css'

interface MainBundleCarouselProps {
     bundleProducts: BundleProducts[]
     activeIndex: number
     setActiveIndex: React.Dispatch<React.SetStateAction<number>>
     swiperRef: React.MutableRefObject<SwiperType | null>
}

const MainBundleCarousel: React.FC<MainBundleCarouselProps> = ({
     swiperRef,
     bundleProducts,
     setActiveIndex,
}) => {
     return (
          <div className='w-full pb-5'>
               <Swiper
                    effect={'coverflow'}
                    initialSlide={0}
                    slidesPerView={'auto'}
                    centeredSlides={true}
                    loop={true}
                    loopedSlides={1}
                    loopPreventsSliding={true}
                    onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                    onBeforeInit={(swiper) => {
                         swiperRef.current = swiper;
                    }}
                    onAfterInit={(swiper) => {
                         swiperRef.current = swiper;
                    }}
                    coverflowEffect={{
                         rotate: 0,
                         stretch: -50,
                         depth: 100,
                         modifier: 2.5,
                         slideShadows: false
                    }}
                    autoplay={{
                         delay: 3000,
                         disableOnInteraction: false
                    }}
                    modules={[EffectCoverflow, Navigation, Autoplay]}
                    className='size-full max-w-[50rem]'>
                    {bundleProducts.map((product, index) => (
                         <SwiperSlide key={index} className='!max-w-[40rem] lg:!max-w-[50rem]'>
                              <div className="flex flex-col h-full
                              lg:flex-row lg:items-center lg:gap-x-10">
                                   <BounceAnimation
                                        delayVal={0.5}
                                        hiddenCoordinates={{ x: -50 }}
                                        className="rounded-tl-[12rem] md:rounded-tl-[15rem] lg:rounded-t-full">
                                        <img className="rounded-tl-[12rem] object-cover object-center border-4 
                                        border-[#5E5A5A] md:rounded-tl-[15rem] lg:rounded-t-full
                                        w-full h-[24rem] max-w-[65vw] sm:h-[25rem] sm:max-w-[70vw]
                                        md:h-[28rem] md:max-w-[22rem] lg:h-[30rem] 
                                        xl:h-[34rem] lg:max-w-[22rem] xl:max-w-[24rem]"
                                             src={product.main}
                                             alt={`${product.name} Bundle`} />
                                   </BounceAnimation>
                                   <h1 className="text-2xl mt-6 font-semibold lg:text-4xl lg:pb-10
                                   text-[#312058] dark:text-light lg:max-w-[20rem]">
                                        {product.name} Product Bundle
                                   </h1>
                              </div>
                         </SwiperSlide>
                    ))}
               </Swiper>
          </div>
     )
}

export default MainBundleCarousel