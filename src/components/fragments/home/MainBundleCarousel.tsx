import React from 'react'
import BounceAnimation from '../../animations/BounceAnimation'
import { BundleProducts } from '../../../interface'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Swiper as SwiperType } from 'swiper/types'
import 'swiper/swiper-bundle.css'
import { createMainBundleSwiperConfig } from '../../../configs/createMainBundleSwiperConfig'

interface MainBundleCarouselProps {
     bundleProducts: BundleProducts[]
     activeIndex: number
     setActiveIndex: React.Dispatch<React.SetStateAction<number>>
     swiperRef: React.MutableRefObject<SwiperType | null>
}

const MainBundleCarousel: React.FC<MainBundleCarouselProps> = React.memo(({
     swiperRef,
     bundleProducts,
     setActiveIndex,
}) => {
     const swiperConfigMainBundle = createMainBundleSwiperConfig(setActiveIndex, swiperRef)

     return (
          <div className='w-full pb-5'>
               <Swiper {...swiperConfigMainBundle}
                    className='size-full max-w-[50rem]'>
                    {bundleProducts.map((product, index) => (
                         <SwiperSlide key={index} className='!max-w-[40rem] lg:!max-w-[50rem]'>
                              <div className="flex flex-col h-full
                              lg:flex-row lg:items-center lg:gap-x-10">
                                   <BounceAnimation
                                        delayVal={0.8}
                                        hiddenCoordinates={{ x: -50 }}
                                        className="rounded-3xl">
                                        <img className="rounded-3xl object-cover object-center 
                                        border-4 border-[#5E5A5A] w-full h-[22rem] max-w-[65vw] 
                                        sm:h-[25rem] sm:max-w-[70vw] md:h-[28rem] 
                                        md:max-w-[22rem] lg:h-[30rem] xl:h-[34rem] 
                                        lg:max-w-[22rem] xl:max-w-[24rem]"
                                             src={product.main}
                                             alt={`${product.name} Bundle`} />
                                   </BounceAnimation>
                                   <h1 className="text-2xl mt-6 font-semibold lg:text-4xl lg:pb-10
                                   text-light lg:max-w-[20rem]">
                                        {product.name} Product Bundle
                                   </h1>
                              </div>
                         </SwiperSlide>
                    ))}
               </Swiper>
          </div>
     )
})

export default MainBundleCarousel