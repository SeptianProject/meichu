import { EffectCoverflow, Navigation, Autoplay } from 'swiper/modules'
import { Swiper as SwiperType } from 'swiper'

export const createHeadCarouselSwiperConfig = (
     swiperRef: React.MutableRefObject<SwiperType | undefined>
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
               delay: 3000,
               disableOnInteraction: false
          },
          onBeforeInit: (swiper: SwiperType) => {
               swiperRef.current = swiper;
          },
          onAfterInit: (swiper: SwiperType) => {
               swiperRef.current = swiper;
          },
          modules: [EffectCoverflow, Navigation, Autoplay]
     }
}