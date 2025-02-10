import { EffectCoverflow, Navigation, Autoplay } from 'swiper/modules'
import type { SwiperOptions } from 'swiper/types'

export const createHeroCarouselSwiperConfig = (): SwiperOptions => {
     return {
          effect: 'coverflow',
          initialSlide: 2,
          slidesPerView: 'auto',
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
          modules: [EffectCoverflow, Navigation, Autoplay]
     }
}