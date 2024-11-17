import HeadCarousel from "../fragments/home/HeadCarousel"
import Heading from "../fragments/home/Heading"
import 'swiper/swiper-bundle.css'
import BundleProducts from "../layouts/home/BundleProducts"
import BestSeller from "../layouts/home/BestSeller"
import Catalog from "../layouts/home/Catalog"
import CustomProducts from "../layouts/home/CustomProducts"

const HomePage = () => {
     return (
          <section className="px-7 lg:px-20 overflow-hidden flex flex-col gap-y-20">
               {/* Main */}
               <div className='min-h-[50vh] pt-40 flex items-center 
               justify-center lg:min-h-screen'>
                    <div className="flex flex-col items-center gap-y-10">
                         <HeadCarousel />
                         <Heading />
                    </div>
               </div>
               {/* Bundle Products */}
               <BundleProducts />
               {/* Best Seller */}
               <BestSeller />
               {/* Catalog */}
               <Catalog />
               {/* Custom Product */}
               <CustomProducts />
          </section>
     )
}

export default HomePage