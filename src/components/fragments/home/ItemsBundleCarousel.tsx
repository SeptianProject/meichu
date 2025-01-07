import React from "react";
import { CardStaggerAnimation, ContainerStaggerAnimation } from "../../animations/StaggerAnimation";
import { Swiper, SwiperSlide } from "swiper/react"
import { BundleProducts } from "../../../interface";
import 'swiper/swiper-bundle.css'
import { createItemsBundleSwiperConfig } from "../../../configs/createItemsBundleSwiperConfig";

interface ItemsBundleCarouselProps {
     bundleProducts: BundleProducts[]
     activeIndex: number
}

const ItemsBundleCarousel: React.FC<ItemsBundleCarouselProps> = React.memo(({
     activeIndex,
     bundleProducts,
}) => {
     const swiperConfigItemsBundle = createItemsBundleSwiperConfig()

     return (
          <ContainerStaggerAnimation
               staggerDelay={0.3}
               className="w-full">
               <div className="max-w-full -bottom-10 left-40 md:absolute md:max-w-[35rem] lg:max-w-[40rem]">
                    <Swiper {...swiperConfigItemsBundle}
                         className='mx-auto size-full'>
                         {bundleProducts[activeIndex].items.map((product, index) => (
                              <SwiperSlide key={index} className="!w-auto rounded-xl">
                                   <CardStaggerAnimation
                                        hiddenPosition={{ x: 100 }}>
                                        <div className={`w-32 h-40 rounded-xl overflow-hidden
                                                  border-[#5E5A5A] border-2 md:w-52 md:h-48 lg:w-64 lg:h-56 
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
})

export default ItemsBundleCarousel;