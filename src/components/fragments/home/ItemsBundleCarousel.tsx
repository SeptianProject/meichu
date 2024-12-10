import React from "react";
import { CardStaggerAnimation, ContainerStaggerAnimation } from "../../animations/StaggerAnimation";
import { EffectCoverflow, Navigation } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import { BundleProducts } from "../../../interfaces";
import 'swiper/swiper-bundle.css'
import { useResize } from "../../../hooks/useResize";

interface ItemsBundleCarouselProps {
     bundleProducts: BundleProducts[]
     activeIndex: number
}

const ItemsBundleCarousel: React.FC<ItemsBundleCarouselProps> = ({
     activeIndex,
     bundleProducts,
}) => {
     const { screenSize } = useResize()

     return (
          <ContainerStaggerAnimation
               staggerDelay={0.3}
               className="w-full">
               <div className="max-w-full -bottom-10 left-40 lg:absolute lg:max-w-[40rem]">
                    <Swiper
                         effect={'coverflow'}
                         grabCursor={true}
                         slidesPerView={'auto'}
                         centeredSlides={true}
                         loop={true}
                         loopedSlides={1}
                         coverflowEffect={{
                              rotate: 0,
                              stretch: (screenSize === 'mobile') ? 50 : -25,
                              depth: 100,
                              modifier: 3,
                              slideShadows: false
                         }}
                         modules={[EffectCoverflow, Navigation]}
                         className='mx-auto size-full'>
                         {bundleProducts[activeIndex].items.map((product, index) => (
                              <SwiperSlide key={index} className="!w-auto rounded-xl">
                                   <CardStaggerAnimation
                                        hiddenPosition={{ x: 100 }}>
                                        <div className={`w-36 h-48 rounded-xl overflow-hidden
                                                  border-[#5E5A5A] border-2 md:w-64 md:h-56 
                                                  transition-all duration-500`}>
                                             <img
                                                  src={product}
                                                  alt={`${bundleProducts[activeIndex].name} Item ${index + 1}`}
                                                  className="size-full object-cover object-top"
                                             />
                                        </div>
                                   </CardStaggerAnimation>
                              </SwiperSlide>
                         ))}
                    </Swiper>
               </div>
          </ContainerStaggerAnimation>
     );
}

export default ItemsBundleCarousel;