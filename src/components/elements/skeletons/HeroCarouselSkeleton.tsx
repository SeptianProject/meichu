import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow } from 'swiper/modules'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const HeroCarouselSkeleton = () => {

     const skeletonItems = Array.from({ length: 5 })

     return (
          <div className='relative mx-auto w-full max-w-[380px] sm:max-w-[430px] 
          md:max-w-[700px] lg:max-w-[1024px] lg:px-[5.5rem] h-full'>
               <div className="w-full h-full">
                    <Swiper
                         effect={'coverflow'}
                         grabCursor={true}
                         centeredSlides={true}
                         slidesPerView={'auto'}
                         initialSlide={2}
                         modules={[EffectCoverflow]}
                         coverflowEffect={{
                              rotate: 0,
                              stretch: 0,
                              depth: 100,
                              modifier: 2.5,
                              slideShadows: false,
                         }}
                         className="w-full h-full">
                         {skeletonItems.map((_, index) => (
                              <SwiperSlide key={index}
                                   className="!w-28 !h-36 sm:!w-32 sm:!h-40 md:!w-48 md:!h-60 lg:!w-60 lg:!h-80">
                                   <div className="h-full w-full overflow-hidden rounded-xl">
                                        <Skeleton className="h-full w-full border dark:border-dark rounded-xl" />
                                   </div>
                              </SwiperSlide>
                         ))}
                    </Swiper>
                    <div className="hidden lg:flex items-center justify-between absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 w-[95vw] xl:w-[80vw]">
                         {[...Array(2)].map((_, index) => (
                              <Skeleton key={index} circle className="size-12 border dark:border-dark" />
                         ))}
                    </div>
               </div>
          </div>
     )
}

export default HeroCarouselSkeleton