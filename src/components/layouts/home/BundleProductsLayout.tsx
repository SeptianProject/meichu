import TextTagline from "../../fragments/home/TextTagline"
import React from "react"
import { Swiper as SwiperType } from 'swiper/types';
import ArrowCardCarousel from "../../elements/ArrowCardCarousel"
import { LuChevronLeft, LuChevronRight } from "react-icons/lu"
import BundleCarouselLayout from "../../fragments/home/BundleCarouselLayout";


const BundleProductsLayout = () => {
     const swiperRef = React.useRef<SwiperType | null>(null)

     return (
          <div className="lg:min-h-screen relative isolate">
               <TextTagline text="Bundle Products" className="font-semibold" />
               <div className="mt-8 relative md:mt-20 min-h-[30rem] w-full">
                    <BundleCarouselLayout swiperRef={swiperRef} />
                    <div className="absolute -z-10 top-[23.5rem] -right-7 w-[100vw] h-[8rem]
                         bg-gradient-to-r from-transparent to-yellowBloobs/30 from-40% 
                         md:w-[70rem] md:h-[15rem] lg:h-[20rem] md:top-36 lg:top-36 lg:-right-20
                         dark:to-transparent dark:to-95% dark:from-0% md:dark:bg-gradient-to-r 
                         md:dark:from-dark/0 md:dark:to-transparent md:dark:from-10%
                         md:dark:to-100% md:dark:w-[40rem] lg:dark:left-40" />
                    <div className="hidden absolute w-fit -right-10 top-20 items-center justify-end gap-x-5">
                         <ArrowCardCarousel
                              icon={LuChevronLeft}
                              onClick={() => swiperRef.current?.slidePrev()} />
                         <ArrowCardCarousel
                              icon={LuChevronRight}
                              onClick={() => swiperRef.current?.slideNext()} />
                    </div>
               </div>
          </div>
     )
}

export default BundleProductsLayout