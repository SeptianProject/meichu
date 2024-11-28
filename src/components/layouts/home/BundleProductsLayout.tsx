import { EffectCards } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import TextTagline from "../../fragments/home/TextTagline"
import { assetsImage, bundleProducts } from "../../../assets/assets"
import React from "react"


const BundleProductsLayout = () => {
     const [activeIndex, setActiveIndex] = React.useState(0)
     const [screenSize, setScreenSize] = React.useState<'mobile' | 'tablet' | 'desktop'>('desktop')

     React.useEffect(() => {
          const handleResize = () => {
               if (window.innerWidth < 768) {
                    setScreenSize('mobile')
               } else if (window.innerWidth < 1024) {
                    setScreenSize('tablet')
               } else {
                    setScreenSize('desktop')
               }
          }
          handleResize()
          window.addEventListener('resize', handleResize)
          return () => window.removeEventListener('resize', handleResize)
     }, [])

     const isMobile = screenSize === 'mobile'

     return (
          <div className="lg:min-h-screen relative isolate">
               <TextTagline text="Bundle Products" className="font-semibold" />
               <div className="mt-8 relative lg:mt-20 lg:absolute xl:right-60">
                    <div className="flex flex-col relative lg:flex-row lg:items-center lg:gap-x-10 h-full">
                         <img className="rounded-tl-[12rem] object-cover object-center border-4 
                         border-[#5E5A5A] md:rounded-tl-[15rem] lg:rounded-t-full
                         h-full w-[18rem] md:w-[22rem] lg:w-[25rem]"
                              src={assetsImage.BundleProduct} alt="" />
                         <h1 className="text-2xl mt-6 font-semibold lg:text-3xl lg:pb-10
                         text-[#312058] dark:text-light">
                              Nama Products Bundle
                         </h1>
                    </div>
                    <div className="mt-5 -bottom-10 left-40 
                    lg:absolute lg:max-w-[45rem]">
                         <Swiper
                              effect={'cards'}
                              grabCursor={true}
                              initialSlide={activeIndex}
                              onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                              slidesPerView={1}
                              cardsEffect={{
                                   rotate: false,
                                   perSlideOffset: isMobile ? 50 : 40,
                                   slideShadows: false,
                              }}
                              modules={[EffectCards]}
                              className='mx-auto size-full'>
                              {bundleProducts.map((product, index) => (
                                   <SwiperSlide key={index}>
                                        <div className={`overflow-hidden w-36 h-52 rounded-xl 
                                        border-[#5E5A5A] border-2 md:w-64 md:h-56 lg:w-64
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

export default BundleProductsLayout