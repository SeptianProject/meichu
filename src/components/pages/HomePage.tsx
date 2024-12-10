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
               <div className='min-h-[50vh] pt-28 flex items-center 
               justify-center lg:min-h-screen lg:pt-36'>
                    <div className="flex flex-col items-center gap-y-10">
                         <HeadCarousel />
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