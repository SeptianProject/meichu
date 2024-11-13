import { EffectCards, Navigation } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import TextTagline from "../../fragments/home/TextTagline"
import { assetsImage, bundleProducts } from "../../../assets/assets"


const BundleProducts = () => {
     return (
          <div className="min-h-screen pt-20">
               <TextTagline className="max-w-60" text="Bundle Products" />
               <div className="mt-8 relative">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:gap-x-10">
                         <img className="rounded-tl-[12rem] h-[40vh] w-[60vw]
                              object-cover object-center border-4 border-[#5E5A5A]
                              lg:rounded-t-full lg:w-[23vw] lg:h-[65vh] lg:ml-40"
                              src={assetsImage.BundleProduct} alt="" />
                         <h1 className="text-2xl mt-6 font-semibold
                              lg:text-3xl lg:mb-40">
                              Nama Products Bundle
                         </h1>
                    </div>
                    <div className="mt-5 lg:absolute -bottom-10 left-80 lg:max-w-[670px]">
                         <Swiper
                              effect={'cards'}
                              grabCursor={true}
                              centeredSlides={true}
                              initialSlide={0}
                              slidesPerView={1}
                              cardsEffect={{
                                   rotate: false,
                                   perSlideOffset: 50,
                                   slideShadows: false,
                              }}
                              modules={[EffectCards, Navigation]}
                              className='mx-auto'
                         >
                              {bundleProducts.map((product, index) => (
                                   <SwiperSlide key={index}>
                                        <img className="w-32 h-52 rounded-xl border-2 border-[#5E5A5A]
                                             object-cover object-top lg:w-72 lg:h-60"
                                             src={product} alt="" />
                                   </SwiperSlide>
                              ))}
                         </Swiper>
                    </div>
                    <div className="absolute -z-10 bottom-20 w-[100vw] h-[50vh] 
                         bg-gradient-to-r from-[#191820] to-[#312058] lg:bottom-0 lg:h-[60vh]" />
               </div>
          </div>
     )
}

export default BundleProducts