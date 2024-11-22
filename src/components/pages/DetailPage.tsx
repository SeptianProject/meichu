import { assetsImage } from "../../assets/assets"
import BtnBorderGradient from "../elements/BtnBorderGradient"
import CatalogCard from "../layouts/catalog/CatalogCard"
import TextTagline from "../fragments/home/TextTagline"
import RouteHistory from "../layouts/RouteHistory"

const DetailPage = () => {
     return (
          <section className="px-7 space-y-10 lg:px-20">
               <RouteHistory prevRoute="/catalog" prevText="Catalog"
                    currentRoute="/catalog-detail" currentText="Detail" />
               <div className="space-y-10 lg:flex items-center gap-x-16">
                    {/* product image */}
                    <div className="w-full h-[22rem] rounded-2xl bg-cover bg-left-top
                         flex flex-col items-start justify-center gap-y-5 p-5 lg:h-[40rem]"
                         style={{ backgroundImage: `url(${assetsImage.DetailImg1})` }}>
                         <img className="w-fit h-24 border-2 border-light rounded-xl lg:h-32"
                              src={assetsImage.DetailImg2} alt="" />
                         <img className="w-fit h-24 border-2 border-light rounded-xl lg:h-32"
                              src={assetsImage.DetailImg3} alt="" />
                         <img className="hidden lg:block w-fit h-24 border-2 border-light rounded-xl lg:h-32"
                              src={assetsImage.DetailImg1} alt="" />
                    </div>
                    {/* product detail */}
                    <div className="space-y-10 lg:space-y-5 w-full">
                         {/* title */}
                         <div className="space-y-4 lg:max-w-80">
                              <h1 className="dark:text-light uppercase text-4xl font-bold">
                                   autumn couple series
                              </h1>
                              <TextTagline text="Korean Style"
                                   className="font-light text-xl capitalize font-poppins text-opacity-80" />
                         </div>
                         {/* description */}
                         <div className="space-y-2 lg:max-w-[23rem]">
                              <h3 className="dark:text-light text-2xl font-semibold">Description</h3>
                              <p className="dark:text-light/70 text-sm font-light">Whether you have a question about talents, pricing, portfolio, or anything else, our team.
                                   Whether you have a question about talents, pricing, portfolio, or anything else, our team.
                                   Whether you have a question about talents, pricing, portfolio, or anything else, our team.</p>
                         </div>
                         {/* price */}
                         <div className="space-y-2">
                              <h3 className="dark:text-light text-2xl font-semibold">Price</h3>
                              <p className="dark:text-light/70 text-lg font-light">$70000</p>
                         </div>
                         {/* buy button */}
                         <div className="flex items-center gap-x-5 pb-10">
                              <button className="text-light bg-bluePrimary font-semibold 
                              border border-transparent w-36 py-3 rounded-full lg:w-52">
                                   Buy Now!
                              </button>
                              <button className="text-[#5E5A5A] border border-[#5E5A5A] 
                              font-semibold bg-transparent rounded-full w-36 py-3 lg:w-52">
                                   Cancel
                              </button>
                         </div>
                    </div>
               </div>
               {/* list product */}
               <div className="border-t-2 border-dark/30 dark:border-light/20 space-y-4 pb-40 lg:pb-0">
                    <h1 className="text-2xl font-semibold pt-5 dark:text-light">
                         Explore Others Products
                    </h1>
                    <div className="flex flex-col items-center gap-y-16">
                         <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 w-full">
                              <CatalogCard />
                              <CatalogCard />
                              <CatalogCard />
                         </div>
                         <BtnBorderGradient />
                    </div>
               </div>
          </section>
     )
}

export default DetailPage