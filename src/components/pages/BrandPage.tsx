import { BsInstagram, BsTiktok, BsTwitterX, BsYoutube } from "react-icons/bs"
import { brandAmbassadorItems } from "../../assets/assets"
import BtnBorderGradient from "../elements/BtnBorderGradient"
import TextTagline from "../fragments/home/TextTagline"
import RouteHistory from "../layouts/RouteHistory"

const BrandPage = () => {
     return (
          <section className="px-7 space-y-10 lg:px-20">
               <RouteHistory currentRoute="/brand-ambassador"
                    currentText="Brand Ambassador Meichu" />
               <div className="space-y-5">
                    <TextTagline text="Brand Ambassador" className="font-semibold" />
                    <p className="font-light text-dark dark:text-light tracking-wide">
                         Whether you have a question about talents, pricing, portfolio, or anything else, our team is ready.
                    </p>
               </div>
               {/* Main Content */}
               <div className="flex flex-col items-center gap-y-16">
                    <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-5">
                         {brandAmbassadorItems.map((item, index) => (
                              <div key={index}
                                   className="h-[30rem] bg-center bg-cover rounded-2xl 
                                   relative overflow-hidden"
                                   style={{ backgroundImage: `url(${item})` }}>
                                   {/* Typograph & badge */}
                                   <div className="absolute bottom-7 z-10 left-5 flex flex-col gap-y-2">
                                        <h1 className="font-semibold text-xl text-light">
                                             Jenny Rubyjane
                                        </h1>
                                        <p className="text-sm font-extralight text-light">
                                             Whether you have a question about talents, pricing, portfolio, or anything else, our team...
                                        </p>
                                        {/* Badge sosmed */}
                                        <div className="flex items-center gap-x-2">
                                             <button className="border-2 border-light 
                                             border-opacity-30 rounded-full size-9">
                                                  <BsTwitterX className="text-light w-full size-4" />
                                             </button>
                                             <button className="border-2 border-light 
                                             border-opacity-30 rounded-full size-9">
                                                  <BsInstagram className="text-light w-full size-4" />
                                             </button>
                                             <button className="border-2 border-light 
                                             border-opacity-30 rounded-full size-9">
                                                  <BsYoutube className="text-light w-full size-4" />
                                             </button>
                                             <button className="border-2 border-light 
                                             border-opacity-30 rounded-full size-9">
                                                  <BsTiktok className="text-light w-full size-4" />
                                             </button>
                                        </div>
                                   </div>
                                   {/* Linear gradient */}
                                   <div className="absolute h-52 w-full bottom-0 rounded-t-2xl 
                                   bg-gradient-to-t from-[#312058] via-[#3848E9]/40
                                   to-transparent via-60% from-[5%]"/>
                              </div>
                         ))}
                    </div>
                    <BtnBorderGradient />
               </div>
          </section>
     )
}

export default BrandPage