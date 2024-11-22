import HeadCarousel from "../fragments/home/HeadCarousel"
import Heading from "../fragments/home/Heading"
import 'swiper/swiper-bundle.css'
import BundleProductsLayout from "../layouts/home/BundleProductsLayout"
import BestSellerLayout from "../layouts/home/BestSellerLayout"
import CatalogLayout from "../layouts/home/CatalogLayout"
import CustomProductsLayout from "../layouts/home/CustomProductsLayout"

const HomePage = () => {
     return (
          <section className="px-7 md:px-12 lg:px-20 overflow-hidden flex flex-col gap-y-20">
               <div className="bg-[#8474DB]/20 size-60 lg:size-[32rem]
               absolute -left-40 top-10 rounded-full blur-[100px] pointer-events-none"/>
               <div className="bg-[#8474DB]/20 size-60 lg:size-[32rem]
               absolute -right-40 top-[28rem] rounded-full blur-[100px] pointer-events-none"/>
               <div className="bg-[#8474DB]/20 size-60 lg:size-[30rem] z-10
               absolute -left-40 top-[70rem] rounded-full blur-[100px] pointer-events-none"/>
               {/* Main */}
               <div className='min-h-[50vh] pt-32 lg:pt-40 flex items-center 
               justify-center lg:min-h-screen'>
                    <div className="flex flex-col items-center gap-y-10">
                         <HeadCarousel />
                         <Heading />
                    </div>
               </div>
               {/* Bundle Products */}
               <BundleProductsLayout />
               {/* Best Seller */}
               <BestSellerLayout />
               {/* Catalog */}
               <CatalogLayout />
               {/* Custom Product */}
               <CustomProductsLayout />
          </section>
     )
}

export default HomePage