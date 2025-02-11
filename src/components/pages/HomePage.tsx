import React from "react"
import HeroCarousel from "../fragments/home/HeroCarousel"
import Heading from "../fragments/home/Heading"
const BundleProductsLayout = React.lazy(() => import("../layouts/home/BundleProductsLayout"))
const BestSellerLayout = React.lazy(() => import("../layouts/home/BestSellerLayout"))
const CatalogLayout = React.lazy(() => import("../layouts/home/CatalogLayout"))
const CustomProductsLayout = React.lazy(() => import("../layouts/home/CustomProductsLayout"))

const HomePage = () => {
     return (
          <section className="px-7 md:px-12 lg:px-20 overflow-hidden flex flex-col gap-y-20">
               <div className='min-h-[50vh] pt-28 flex items-center 
               justify-center lg:min-h-screen lg:pt-36'>
                    <div className="flex flex-col items-center gap-y-10">
                         <HeroCarousel />
                         <Heading />
                    </div>
               </div>
               <BundleProductsLayout />
               <BestSellerLayout />
               <CatalogLayout />
               <CustomProductsLayout />
          </section>
     )
}

export default HomePage