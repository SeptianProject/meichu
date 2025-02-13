import React from 'react';
import BounceAnimation from '../../animations/BounceAnimation';
import ArrowCardCarousel from '../../elements/ArrowCardCarousel';
import { Swiper, SwiperSlide } from 'swiper/react';
import { AnimatePresence, motion, Variants } from 'motion/react'
import { Swiper as SwiperType } from 'swiper/types';
import { LuChevronLeft, LuChevronRight } from 'react-icons/lu';
import { createHeroCarouselSwiperConfig } from '../../../configs/createHeroCarouselSwiperConfig';
import HeroCarouselSkeleton from '../../elements/skeletons/HeroCarouselSkeleton';
import { useProducts } from '../../../hooks/useQueryRequest';
import 'swiper/css';
import { getCloudinaryUrl } from '../../../services';

const HeroCarousel = () => {
     const [swiperInstance, setSwiperInstance] = React.useState<SwiperType | null>(null);
     const [imageLoading, setImageLoading] = React.useState<{ [key: number]: boolean }>({})
     const { data: productData, isLoading } = useProducts()

     const slides = React.useMemo(() => {
          if (!productData?.data) return []

          return Array.from({ length: 2 }, (_, index) =>
               productData.data.map((product) => ({
                    ...product,
                    virtualId: `${product.id}-${index}`
               }))
          ).flat()
     }, [productData?.data])

     const handleImageLoad = React.useCallback((virtualId: number) => {
          setImageLoading(prev => ({
               ...prev,
               [virtualId]: true
          }))
     }, [])

     const containerVariants: Variants = {
          hidden: { opacity: 0 },
          visible: {
               opacity: 1,
               transition: { staggerChildren: 0.2 }
          },
          exit: {
               opacity: 0,
               transition: { duration: 0.2 }
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
          },
          exit: {
               opacity: 0,
               transition: {
                    duration: 0.2
               }
          }
     }

     if (isLoading) return <HeroCarouselSkeleton />

     return (
          <div className='relative mx-auto w-full max-w-[380px] sm:max-w-[430px] 
          md:max-w-[700px] lg:max-w-[1024px] lg:px-[5.5rem]'>
               <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    exit="exit"
                    viewport={{ once: true, amount: 0.2 }}
                    className='w-full'>
                    <AnimatePresence mode='wait'>
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
                                                  className='h-full w-full rounded-xl'>
                                                  <img src={getCloudinaryUrl(product.attributes.thumbnail.data.attributes.url)}
                                                       alt={product.attributes.name + ' Bundle'}
                                                       className={`w-full h-full object-cover 
                                                       object-center transition-opacity duration-300
                                                       ${imageLoading[product.id] ? 'opacity-100' : 'opacity-0'}`}
                                                       onLoad={() => handleImageLoad(product.id)}
                                                       loading='lazy'
                                                  />
                                             </motion.div>
                                        </div>
                                   </SwiperSlide>
                              ))}
                         </Swiper>
                    </AnimatePresence>
                    <div className='hidden absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10
                    lg:flex items-center justify-between w-[95vw] xl:w-[80vw]'>
                         <BounceAnimation
                              delayVal={0.8}
                              hiddenCoordinates={{ x: -20 }}>
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

export default React.memo(HeroCarousel)