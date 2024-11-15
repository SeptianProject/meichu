import { EffectCards } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import TextTagline from "../../fragments/home/TextTagline"
import { assetsImage, bundleProducts } from "../../../assets/assets"
import { useState } from "react"


const BundleProducts = () => {
     const [activeIndex, setActiveIndex] = useState(0)

     return (
          <div className="lg:min-h-screen relative isolate">
               <TextTagline text="Bundle Products" className="font-semibold" />
               <div className="mt-8 relative lg:mt-20">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:gap-x-10">
                         <img className="rounded-tl-[12rem] h-[40vh] w-[60vw] object-cover 
                         object-center border-4 border-[#5E5A5A]
                         lg:rounded-t-full lg:w-[23vw] lg:h-[65vh] lg:ml-40"
                              src={assetsImage.BundleProduct} alt="" />
                         <h1 className="text-2xl mt-6 font-semibold
                              lg:text-3xl lg:pb-40 text-[#312058] dark:text-light">
                              Nama Products Bundle
                         </h1>
                    </div>
                    <div className="mt-5 lg:absolute -bottom-10 left-80 lg:max-w-screen-md">
                         <Swiper
                              effect={'cards'}
                              grabCursor={true}
                              centeredSlides={true}
                              initialSlide={activeIndex}
                              onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                              slidesPerView={1}
                              cardsEffect={{
                                   rotate: false,
                                   perSlideOffset: 40,
                                   slideShadows: false,
                              }}
                              modules={[EffectCards]}
                              className='mx-auto'
                         >
                              {bundleProducts.map((product, index) => (
                                   <SwiperSlide key={index}>
                                        <div className={`overflow-hidden w-36 h-52 rounded-xl 
                                        border-[#5E5A5A] border-2 lg:w-72 lg:h-60
                                        transition-all duration-500 
                                             ${index === activeIndex ? 'scale-100' : 'scale-[.8]'}`}>
                                             <img className={`size-full object-cover object-top`}
                                                  src={product} alt="" />
                                        </div>
                                   </SwiperSlide>
                              ))}
                         </Swiper>
                    </div>
                    <div className="absolute -z-10 bottom-20 inset-x-0 w-[100vw] h-[40vh]
                         bg-gradient-to-r from-transparent to-[#312058]/50
                         dark:from-[#191820] dark:to-[#312058] lg:h-[50vh] lg:bottom-0" />
               </div>
          </div>
     )
}

export default BundleProducts