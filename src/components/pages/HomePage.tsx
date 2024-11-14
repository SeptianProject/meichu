import HeadCarousel from "../fragments/home/HeadCarousel"
import Heading from "../fragments/home/Heading"
import 'swiper/swiper-bundle.css'
import BundleProducts from "../layouts/home/BundleProducts"
import BestSeller from "../layouts/home/BestSeller"
import Catalog from "../layouts/home/Catalog"
import CustomProducts from "../layouts/home/CustomProducts"

const HomePage = () => {
     return (
          <section className="space-y-10 px-7 lg:px-20 overflow-hidden relative">
               {/* Main */}
               <div className='min-h-screen flex items-center justify-center lg:pt-32'>
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