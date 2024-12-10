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
                    <div className="absolute -z-10 top-60 left-0 w-[100vw] h-[40vh]
                         bg-gradient-to-r from-light via-[#7C64B0]/50 to-[#6A45BE]/60
                         dark:from-transparent dark:to-[#312058] lg:h-[50vh] lg:top-40 lg:bottom-0" />
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