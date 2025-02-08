import React from 'react';
import BounceAnimation from '../../animations/BounceAnimation';
import ArrowCardCarousel from '../../elements/ArrowCardCarousel';
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion, Variants } from 'motion/react'
import { Swiper as SwiperType } from 'swiper/types';
import { LuChevronLeft, LuChevronRight } from 'react-icons/lu';
import { useQuery } from '@tanstack/react-query';
import { ProductCatalogsResponse } from '../../../types';
import { createHeroCarouselSwiperConfig } from '../../../configs/createHeroCarouselSwiperConfig';
import { getProductCatalogs } from '../../../services/productService';
import HeroCarouselSkeleton from '../../elements/skeletons/HeroCarouselSkeleton';
import 'swiper/css';

const HeroCarousel = () => {
     const [swiperInstance, setSwiperInstance] = React.useState<SwiperType | null>(null);
     const [imageLoading, setImageLoading] = React.useState<{ [key: number]: boolean }>({})
     const { data: productData, isLoading } = useQuery<ProductCatalogsResponse>(
          ['product'],
          getProductCatalogs,
          { staleTime: 5 * 60 * 1000, cacheTime: 30 * 60 * 1000 })

     const slides = React.useMemo(() => {
          if (!productData?.data) return []

          return Array.from({ length: 5 }, (_, index) =>
               productData.data.map((product) => ({
                    ...product,
                    virtualId: `${product.id}-${index}`
               }))
          ).flat()
     }, [productData?.data])

     const handleImageLoad = (virtualId: number) => {
          setImageLoading(prev => ({
               ...prev,
               [virtualId]: true
          }))
     }

     const containerVariants: Variants = {
          hidden: { opacity: 0 },
          visible: {
               opacity: 1,
               transition: { staggerChildren: 0.2 }
          }
     }

     const cardVariants: Variants = {
          hidden: { opacity: 0, scale: 0.5 },
          visible: {
               opacity: 1,
               scale: 1,
               transition: {
                    type: 'spring',
                    stiffness: 100,
                    damping: 10
               }
          }
     }

     if (isLoading) return <HeroCarouselSkeleton />

     return (
          <div className='relative mx-auto w-full max-w-[380px] sm:max-w-[430px] 
          md:max-w-[700px] lg:max-w-[1024px] lg:px-[5.5rem]'>
               <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={containerVariants}
                    className='w-full'>
                    <Swiper
                         {...createHeroCarouselSwiperConfig()}
                         onSwiper={setSwiperInstance}
                         className='w-full'>
                         {slides.map((product) => (
                              <SwiperSlide
                                   key={product.virtualId}
                                   className="!w-28 !h-36 sm:!w-32 sm:!h-40 
                                   md:!w-48 md:!h-60 lg:!w-60 lg:!h-80">
                                   <div className="h-full w-full overflow-hidden rounded-xl relative">
                                        <motion.div
                                             variants={cardVariants}
                                             className='h-full w-full'
                                        >
                                             <img
                                                  src={product.attributes.thumbnail.data.attributes.url}
                                                  alt={product.attributes.name + ' Bundle'}
                                                  className={`w-full h-full object-cover object-center transition-opacity duration-300 
                                             ${imageLoading[product.id] ? 'opacity-100' : 'opacity-0'
                                                       }`}
                                                  onLoad={() => handleImageLoad(product.id)}
                                                  loading='lazy'
                                             />
                                        </motion.div>
                                   </div>
                              </SwiperSlide>
                         ))}
                    </Swiper>
                    <div className='hidden absolute left-1/2 top-1/2 
                    -translate-y-1/2 -translate-x-1/2 z-10
                    lg:flex items-center justify-between w-[95vw] xl:w-[80vw]'>
                         <BounceAnimation
                              delayVal={0.8}
                              hiddenCoordinates={{ x: -50 }}>
                              <ArrowCardCarousel
                                   onClick={() => swiperInstance?.slidePrev()}
                                   icon={LuChevronLeft} />
                         </BounceAnimation>
                         <BounceAnimation
                              delayVal={0.8}
                              hiddenCoordinates={{ x: 50 }}>
                              <ArrowCardCarousel
                                   onClick={() => swiperInstance?.slideNext()}
                                   icon={LuChevronRight} />
                         </BounceAnimation>
                    </div>
               </motion.div>
          </div>
     );
};

export default HeroCarousel