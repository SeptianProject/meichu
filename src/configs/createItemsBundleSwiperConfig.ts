import { EffectCoverflow, Navigation } from "swiper/modules"

export const createItemsBundleSwiperConfig = () => {
     return {
          effect: 'coverflow',
          grabCursor: true,
          slidesPerView: 'auto' as const,
          centeredSlides: true,
          loop: true,
          loopedSlides: 1,
          coverflowEffect: {
               rotate: 0,
               stretch: -20,
               depth: 100,
               modifier: 2.5,
               slideShadows: false
          },
          modules: [EffectCoverflow, Navigation]
     }
}