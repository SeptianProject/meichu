import React from "react";
import { Swiper as SwiperType } from 'swiper/types';
import 'swiper/swiper-bundle.css'
import MainBundleCarousel from "./MainBundleCarousel";
import { BundleProducts } from "../../../interface";
import ItemsBundleCarousel from "./ItemsBundleCarousel";

interface BundleCarouselLayoutProps {
     bundleProducts: BundleProducts[]
     swiperRef: React.MutableRefObject<SwiperType | null>
}


const BundleCarouselLayout: React.FC<BundleCarouselLayoutProps> = ({ bundleProducts, swiperRef }) => {
     const [activeIndex, setActiveIndex] = React.useState(0)

     return (
          <div className="lg:absolute lg:left-20 xl:left-40">
               <MainBundleCarousel
                    swiperRef={swiperRef}
                    activeIndex={activeIndex}
                    setActiveIndex={setActiveIndex}
                    bundleProducts={bundleProducts}
               />
               <ItemsBundleCarousel
                    activeIndex={activeIndex}
                    bundleProducts={bundleProducts}
               />
          </div>
     );
}

export default BundleCarouselLayout;