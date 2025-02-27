import React from "react"
import { EffectCoverflow, Navigation } from "swiper/modules";
import { Swiper as SwiperType } from "swiper/types"

export const createMainBundleSwiperConfig = (
     handleSlideChange: (index: number) => void,
     swiperRef: React.MutableRefObject<SwiperType | null>
) => {
     return {
          effect: 'coverflow',
          initialSlide: 0,
          slidesPerView: 'auto' as const,
          centeredSlides: true,
          loop: true,
          loopedSlides: 1,
          loopPreventsSliding: true,
          coverflowEffect: {
               rotate: 0,
               stretch: -50,
               depth: 100,
               modifier: 2.5,
               slideShadows: false
          },
          modules: [EffectCoverflow, Navigation],
          onSlideChange: (swiper: SwiperType) => handleSlideChange(swiper.realIndex),
          onBeforeInit: (swiper: SwiperType) => {
               swiperRef.current = swiper;
          },
          onAfterInit: (swiper: SwiperType) => {
               swiperRef.current = swiper;
          }
     }
}