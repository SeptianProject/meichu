import React from "react";
import Skeleton from "react-loading-skeleton";
import BounceAnimation from "../../animations/BounceAnimation";
import BundleCarouselSkeleton from "../../elements/skeletons/BundleCarouselSkeleton";
import { Swiper as SwiperType } from 'swiper/types';
import { Swiper, SwiperSlide } from "swiper/react";
import { createMainBundleSwiperConfig } from "../../../configs/createMainBundleSwiperConfig";
import { createItemsBundleSwiperConfig } from "../../../configs/createItemsBundleSwiperConfig";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../../../hooks/useQueryRequest";
import 'swiper/css'
import 'react-loading-skeleton/dist/skeleton.css'

interface BundleCarouselLayoutProps {
     swiperRef: React.MutableRefObject<SwiperType | null>
}

const BundleCarouselLayout: React.FC<BundleCarouselLayoutProps> = React.memo(({
     swiperRef
}) => {
     const navigate = useNavigate()
     const [activeMainBundleId, setActiveMainBundleId] = React.useState<number | null>(null)
     const [mainImageLoading, setMainImageLoading] = React.useState<{ [key: number]: boolean }>({})
     const [itemsImageLoading, setItemsImageLoading] = React.useState<{ [key: number]: boolean }>({})

     const { data: productData, isLoading } = useProducts()

     const handleSlideChange = React.useCallback((index: number) => {
          const currentBundleId = productData?.data[index]?.id ?? null
          setActiveMainBundleId(currentBundleId)
     }, [productData?.data])

     const handleMainImageLoad = (productId: number) => {
          setMainImageLoading(prev => ({
               ...prev,
               [productId]: true
          }))
     }

     const handleItemsImageLoad = (imageId: number) => {
          setItemsImageLoading(prev => ({
               ...prev,
               [imageId]: true
          }))
     }

     const swiperConfigMainBundle = React.useMemo(() =>
          createMainBundleSwiperConfig(handleSlideChange, swiperRef),
          [handleSlideChange, swiperRef])
     const swiperConfigItemsBundle = createItemsBundleSwiperConfig()

     const handleOnDetail = () => {
          navigate(`/catalog-detail/${activeMainBundleId}`)
     }

     if (isLoading) return <BundleCarouselSkeleton />

     return (
          <div className="md:absolute md:left-0 lg:left-20 xl:left-40">
               <div className='w-full pb-5'>
                    <Swiper {...swiperConfigMainBundle}
                         className='size-full md:max-w-[50rem]'>
                         {productData?.data.map((product) => (
                              <SwiperSlide key={product.id} className='!max-w-[40rem] md:!max-w-[40rem] lg:!max-w-[50rem]'>
                                   <div className="flex flex-col h-full md:flex-row md:items-center md:gap-x-10 lg:gap-x-16">
                                        <BounceAnimation
                                             delayVal={0.2}
                                             hiddenCoordinates={{ x: -20 }}
                                             className="rounded-3xl relative">
                                             {!mainImageLoading[product.id] && (
                                                  <div className="absolute -inset-1 z-10">
                                                       <Skeleton className='w-full h-full rounded-3xl border border-graySurface2' />
                                                  </div>
                                             )}
                                             <img className="rounded-3xl object-cover object-center 
                                                  border-4 border-[#5E5A5A] w-full h-[20rem] max-w-[65vw] 
                                                  sm:h-[25rem] sm:max-w-[70vw] md:max-w-[20rem]
                                                  lg:h-[30rem] lg:max-w-[24rem] cursor-pointer"
                                                  onClick={handleOnDetail}
                                                  src={product.attributes.thumbnail.data.attributes.url}
                                                  alt={`${product.attributes.name} Bundle`}
                                                  onLoad={() => handleMainImageLoad(product.id)}
                                                  loading="lazy"
                                             />
                                        </BounceAnimation>
                                        <h1 className="text-2xl mt-6 font-semibold bg-gold 
                                        bg-clip-text text-transparent dark:text-light
                                        md:pb-10 md:max-w-[20rem] lg:pb-14 lg:text-4xl select-none">
                                             {product.attributes.name} Bundle
                                        </h1>
                                   </div>
                              </SwiperSlide>
                         ))}
                    </Swiper>
               </div>
               {/* Items bundle */}
               <div className="max-w-full -bottom-10 left-40 md:absolute md:max-w-[35rem] lg:max-w-[40rem]">
                    <Swiper {...swiperConfigItemsBundle}
                         className='mx-auto size-full'>
                         {productData?.data.find(product => product.id === activeMainBundleId)
                              ?.attributes.images.data.map((image) => (
                                   <SwiperSlide key={image.id} className="!w-auto rounded-xl">
                                        <div className={`w-32 h-40 rounded-xl overflow-hidden 
                                        md:w-52 md:h-48 lg:w-64 lg:h-56 transition-all duration-500`}>
                                             <BounceAnimation
                                                  hiddenCoordinates={{ x: -20 }}
                                                  delayVal={0.2}
                                                  className="w-full h-full">
                                                  {!itemsImageLoading[image.id] && (
                                                       <div className="absolute -inset-1 z-10">
                                                            <Skeleton className='w-full h-full border border-graySurface2' />
                                                       </div>
                                                  )}
                                                  <img src={image.attributes.url}
                                                       alt={image.attributes.name}
                                                       className={`w-full h-full object-cover object-center rounded-xl
                                                            transition-opacity duration-300 border-[#5E5A5A] border-2
                                                            ${itemsImageLoading[image.id] ? 'opacity-100' : 'opacity-0'}`}
                                                       onLoad={() => handleItemsImageLoad(image.id)}
                                                       loading="lazy"
                                                  />
                                             </BounceAnimation>
                                        </div>
                                   </SwiperSlide>
                              ))}
                    </Swiper>
               </div>
          </div>
     );
})

export default BundleCarouselLayout;