import React from 'react';
import BounceAnimation from '../../animations/BounceAnimation';
import ArrowCardCarousel from '../../elements/ArrowCardCarousel';
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion, AnimationProps } from 'framer-motion';
import { Swiper as SwiperType } from 'swiper/types';
import { LuChevronLeft, LuChevronRight } from 'react-icons/lu';
import { useQuery } from '@tanstack/react-query';
import { ProductCatalogsResponse } from '../../../types';
import { createHeroCarouselSwiperConfig } from '../../../configs/createHeroCarouselSwiperConfig';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import 'swiper/swiper-bundle.css';
import { getProductCatalogs } from '../../../services/productService';

const HeroCarousel = () => {
     const swiperRef = React.useRef<SwiperType>();
     const { data: productData, isLoading } = useQuery<ProductCatalogsResponse>(['product'], getProductCatalogs)

     // const minSlides = 10
     // const repeatCount = React.useMemo(() => {
     //      if (!productData?.data.length) return 0
     //      return Math.ceil(minSlides / productData?.data.length)
     // }, [productData?.data.length])

     React.useEffect(() => {
          console.log('productData', productData)
     }, [productData])

     const slides = React.useMemo(() => {
          if (!productData?.data) return []

          return Array.from({ length: 10 }, (_, index) =>
               productData.data.map((product) => ({
                    ...product,
                    virtualId: `${product.id}-${index}`
               }))
          ).flat()
     }, [productData?.data])

     const heroSwiperCarouselConfig = React.useMemo(() =>
          createHeroCarouselSwiperConfig(swiperRef),
          [swiperRef]
     )

     const containerVariants: AnimationProps["variants"] = {
          hidden: { opacity: 0 },
          visible: {
               opacity: 1,
               transition: {
                    staggerChildren: 0.2
               }
          }
     }

     const cardVariants: AnimationProps["variants"] = {
          hidden: { opacity: 0, scale: 0.5 },
          visible: {
               opacity: 1,
               scale: 1,
               transition: {
                    type: "spring",
                    stiffness: 100,
                    damping: 10
               }
          }
     }

     return (
          <div className='relative mx-auto w-full max-w-[380px] sm:max-w-[430px] 
          md:max-w-[700px] lg:max-w-[1024px] lg:px-[5.5rem]'>
               <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={containerVariants}
                    className='w-full'>
                    <Swiper {...heroSwiperCarouselConfig} className='w-full'>
                         {slides.map((product) => (
                              <SwiperSlide
                                   key={product.virtualId}
                                   className="!w-28 !h-36 sm:!w-32 sm:!h-40 
                                   md:!w-48 md:!h-60 lg:!w-60 lg:!h-80">
                                   <motion.div
                                        variants={cardVariants}
                                        className="h-full w-full overflow-hidden rounded-xl">
                                        {isLoading ? (
                                             <Skeleton className='w-full h-full' />
                                        ) : (
                                             <img
                                                  src={product.attributes.thumbnail.data.attributes.url}
                                                  alt={product.attributes.name + ' Bundle'}
                                                  className='w-full h-full object-cover object-center'
                                             />
                                        )}
                                   </motion.div>
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
                                   onClick={() => swiperRef.current?.slidePrev()}
                                   icon={LuChevronLeft} />
                         </BounceAnimation>
                         <BounceAnimation
                              delayVal={0.8}
                              hiddenCoordinates={{ x: 50 }}>
                              <ArrowCardCarousel
                                   onClick={() => swiperRef.current?.slideNext()}
                                   icon={LuChevronRight} />
                         </BounceAnimation>
                    </div>
               </motion.div>
          </div>
     );
};

export default HeroCarousel