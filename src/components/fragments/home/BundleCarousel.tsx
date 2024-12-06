import React from "react";
import BounceAnimation from "../../animations/BounceAnimation";
import { CardStaggerAnimation, ContainerStaggerAnimation } from "../../animations/StaggerAnimation";
import { Autoplay, EffectCoverflow, Navigation } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import { Swiper as SwiperType } from 'swiper/types';
import 'swiper/swiper-bundle.css'

interface BundleCarouselProps {
     bundleProducts: Productbundle[]
     swiperRef: React.MutableRefObject<SwiperType | null>
}

interface Productbundle {
     id: number
     name: string
     main: string
     items: string[]
}

const BundleCarousel: React.FC<BundleCarouselProps> = ({ bundleProducts, swiperRef }) => {
     const [activeIndex, setActiveIndex] = React.useState(0)

     return (
          <div className="lg:absolute left-10 xl:left-40">
               <div className="flex flex-col lg:flex-row lg:items-center lg:gap-x-10 h-full">
                    <BounceAnimation
                         delayVal={0.5}
                         hiddenCoordinates={{ x: -50 }}
                         className="rounded-tl-[12rem] md:rounded-tl-[15rem] lg:rounded-t-full">
                         <img className="rounded-tl-[12rem] object-cover object-center border-4 
                              border-[#5E5A5A] md:rounded-tl-[15rem] lg:rounded-t-full
                              w-full h-[24rem] max-w-[75vw] sm:h-[25rem] sm:max-w-[70vw]
                              md:h-[28rem] md:max-w-[22rem]
                              lg:h-[30rem] xl:h-[34rem] lg:max-w-[22rem] xl:max-w-[24rem] "
                              src={bundleProducts[activeIndex].main}
                              alt={`${bundleProducts[activeIndex].name} Bundle`} />
                    </BounceAnimation>
                    <BounceAnimation
                         delayVal={0.5}
                         hiddenCoordinates={{ y: 100 }}
                         className="">
                         <h1 className="text-2xl mt-6 font-semibold lg:text-4xl lg:pb-10
                                   text-[#312058] dark:text-light">
                              {bundleProducts[activeIndex].name} Product Bundle
                         </h1>
                    </BounceAnimation>
               </div>
               <ContainerStaggerAnimation
                    staggerDelay={0.3}
                    className="w-full">
                    <div className="mt-5 -bottom-10 left-40 lg:absolute lg:max-w-[40rem]">
                         <Swiper
                              effect={'coverflow'}
                              grabCursor={true}
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
                                   stretch: -20,
                                   depth: 100,
                                   modifier: 2.5,
                                   slideShadows: false
                              }}
                              autoplay={{
                                   delay: 3000,
                                   disableOnInteraction: false
                              }}
                              modules={[EffectCoverflow, Navigation, Autoplay]}
                              className='mx-auto size-full'>
                              {bundleProducts[activeIndex].items.map((product, index) => (
                                   <SwiperSlide key={index} className="!w-auto">
                                        <CardStaggerAnimation
                                             hiddenPosition={{ x: 100 }}>
                                             <div className={`overflow-hidden w-36 h-48 rounded-xl 
                                                  border-[#5E5A5A] border-2 md:w-64 md:h-56 
                                                  transition-all duration-500`}>
                                                  <img
                                                       className="size-full object-cover object-top"
                                                       src={product}
                                                       alt={`${bundleProducts[activeIndex].name} Item ${index + 1}`}
                                                  />
                                             </div>
                                        </CardStaggerAnimation>
                                   </SwiperSlide>
                              ))}
                         </Swiper>
                    </div>
               </ContainerStaggerAnimation>
          </div>
     );
}

export default BundleCarousel;