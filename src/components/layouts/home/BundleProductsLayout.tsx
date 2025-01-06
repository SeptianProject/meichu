import TextTagline from "../../fragments/home/TextTagline"
import React from "react"
import { Swiper as SwiperType } from 'swiper/types';
import ArrowCardCarousel from "../../elements/ArrowCardCarousel"
import { LuChevronLeft, LuChevronRight } from "react-icons/lu"
import BundleCarouselLayout from "../../fragments/home/BundleCarouselLayout";
import { bundleProducts } from "../../../assets/meichuBundle";

const BundleProductsLayout = () => {
     const swiperRef = React.useRef<SwiperType | null>(null)

     return (
          <div className="lg:min-h-screen relative isolate">
               <TextTagline text="Bundle Products" className="font-semibold" />
               <div className="mt-8 relative lg:mt-20 min-h-[80vh] w-full">
                    <BundleCarouselLayout
                         bundleProducts={bundleProducts}
                         swiperRef={swiperRef}
                    />
                    <div className="absolute -z-10 top-[23.5rem] -right-7 w-[100vw] h-[8rem]
                         bg-gradient-to-t from-yellowBloobs via-yellowBloobs/30 to-transparent 
                         via-50% to-100%
                         lg:bg-gradient-to-br lg:from-[#D59A29]/30 lg:to-transparent 
                         lg:to-40%
                         lg:h-[50vh] lg:top-40 lg:w-[70vw] lg:bottom-0 lg:right-0" />
                    <div className="hidden absolute w-fit -right-10 top-20 lg:flex items-center justify-end gap-x-5">
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