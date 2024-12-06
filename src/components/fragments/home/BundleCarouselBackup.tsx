import React from "react";
import BounceAnimation from "../../animations/BounceAnimation";
import { CardStaggerAnimation, ContainerStaggerAnimation } from "../../animations/StaggerAnimation";
import { EffectCards, Navigation } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import { Swiper as SwiperType } from 'swiper/types';
import { useResize } from "../../../hooks/useResize"

import 'swiper/swiper-bundle.css'
import { bundleProducts } from "../../../assets/meichuBundle";

interface BundleCarouselProps {
     swiperRef: React.MutableRefObject<SwiperType | null>
}

const BundleCarousel: React.FC<BundleCarouselProps> = ({ swiperRef }) => {
     const [activeIndex, setActiveIndex] = React.useState(0)
     const { screenSize } = useResize()
     const isMobile = screenSize === 'mobile'

     return (
          <>
               <div className="flex flex-col relative lg:flex-row lg:items-center lg:gap-x-10 h-full">
                    <BounceAnimation
                         delayVal={0.5}
                         hiddenCoordinates={{ x: -50 }}
                         className="rounded-tl-[12rem] md:rounded-tl-[15rem] lg:rounded-t-full">
                         <img className="rounded-tl-[12rem] object-cover object-center border-4 
                              border-[#5E5A5A] md:rounded-tl-[15rem] lg:rounded-t-full
                              h-[30rem] w-[22rem]"
                              src={bundleProducts[2].main} alt="" />
                    </BounceAnimation>
                    <BounceAnimation
                         delayVal={0.5}
                         hiddenCoordinates={{ y: 100 }}
                         className="">
                         <h1 className="text-2xl mt-6 font-semibold lg:text-4xl lg:pb-10
                                   text-[#312058] dark:text-light">
                              Nama Products Bundle
                         </h1>
                    </BounceAnimation>
               </div>
               <ContainerStaggerAnimation
                    staggerDelay={0.3}>
                    <div className="mt-5 -bottom-10 left-40 lg:absolute lg:max-w-[45rem]">
                         <Swiper
                              effect={'cards'}
                              grabCursor={true}
                              initialSlide={activeIndex}
                              onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                              onBeforeInit={(swiper) => {
                                   swiperRef.current = swiper
                              }}
                              slidesPerView={1}
                              cardsEffect={{
                                   rotate: false,
                                   perSlideOffset: isMobile ? 50 : 40,
                                   slideShadows: false,
                              }}
                              modules={[EffectCards, Navigation]}
                              className='mx-auto size-full'>
                              {bundleProducts[2].items.map((product, index) => (
                                   <SwiperSlide key={index}>
                                        <CardStaggerAnimation
                                             hiddenPosition={{ x: 100 }}>
                                             <div className={`overflow-hidden w-36 h-52 rounded-xl 
                                                  border-[#5E5A5A] border-2 md:w-64 md:h-56 lg:w-64
                                                  transition-all duration-500
                                                  ${index === activeIndex ? 'scale-100' : 'scale-[.8]'}`}>
                                                  <img className={`size-full object-cover object-top`}
                                                       src={product} alt="" />
                                             </div>
                                        </CardStaggerAnimation>
                                   </SwiperSlide>
                              ))}
                         </Swiper>
                    </div>
               </ContainerStaggerAnimation>
          </>
     );
}

export default BundleCarousel;