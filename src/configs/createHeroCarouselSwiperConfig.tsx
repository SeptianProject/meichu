/* eslint-disable @typescript-eslint/no-unused-vars */
import { EffectCoverflow, Navigation, Autoplay } from 'swiper/modules'
import { Swiper as SwiperType } from 'swiper'

export const createHeroCarouselSwiperConfig = (
     swiperInstance: SwiperType | null
) => {
     return {
          effect: 'coverflow',
          initialSlide: 2,
          slidesPerView: 'auto' as const,
          centeredSlides: true,
          grabCursor: true,
          loop: true,
          loopedSlides: 4,
          loopPreventsSliding: true,
          coverflowEffect: {
               rotate: 0,
               stretch: 0,
               depth: 100,
               modifier: 2.5,
               slideShadows: false
          },
          autoplay: {
               delay: 3500,
               disableOnInteraction: false
          },
          onBeforeInit: (swiper: SwiperType) => {
               swiperInstance = swiper;
          },
          onAfterInit: (swiper: SwiperType) => {
               swiperInstance = swiper;
          },
          modules: [EffectCoverflow, Navigation, Autoplay]
     }
}