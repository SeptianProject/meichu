import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow } from 'swiper/modules'

const HeroCarouselSkeleton = () => {
     const skeletonItems = Array.from({ length: 5 })

     return (
          <div className='relative mx-auto w-full max-w-[380px] sm:max-w-[430px] 
          md:max-w-[700px] lg:max-w-[1024px] lg:px-[5.5rem] bg-transparent'>
               <div className="w-full">
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
                         className="w-full">
                         {skeletonItems.map((_, index) => (
                              <SwiperSlide key={index}
                                   className="!w-28 !h-36 sm:!w-32 sm:!h-40 md:!w-48 md:!h-60 lg:!w-60 lg:!h-80">
                                   <div className="h-full w-full overflow-hidden rounded-xl">
                                        <Skeleton className="h-full w-full" />
                                   </div>
                              </SwiperSlide>
                         ))}
                    </Swiper>
                    <div className="hidden lg:flex items-center justify-between absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 w-[95vw] xl:w-[80vw]">
                         <div className="size-12">
                              <Skeleton circle className="w-full h-full" />
                         </div>
                         <div className="size-12">
                              <Skeleton circle className="w-full h-full" />
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default HeroCarouselSkeleton