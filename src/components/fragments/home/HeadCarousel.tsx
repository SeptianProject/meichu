import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion, AnimationProps } from 'framer-motion';
import { Swiper as SwiperType } from 'swiper/types';
import ArrowCardCarousel from '../../elements/ArrowCardCarousel';
import BounceAnimation from '../../animations/BounceAnimation';
import { LuChevronLeft, LuChevronRight } from 'react-icons/lu';
import { mainProductBundle } from '../../../assets/meichuBundle';
import 'swiper/swiper-bundle.css';
import { createHeadCarouselSwiperConfig } from '../../../configs/createHeadCarouselSwiperConfig';

const HeadCarousel = () => {
     const swiperRef = React.useRef<SwiperType>();
     const headSwiperCarouselConfig = createHeadCarouselSwiperConfig(swiperRef);
     const duplicatedBundle = React.useMemo(() => [
          ...mainProductBundle.slice(0, 5),
          ...mainProductBundle.slice(0, 5),
     ], [])

     const containerVariants: AnimationProps["variants"] = {
          hidden: { opacity: 0 },
          visible: {
               opacity: 1,
               transition: {
                    staggerChildren: 0.2
               }
          }
     };

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
     };

     return (
          <div className='relative mx-auto w-full max-w-[380px] sm:max-w-[430px] 
          md:max-w-[700px] lg:max-w-[1024px] lg:px-[5.5rem]'>
               <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={containerVariants}
                    className='w-full'>
                    <Swiper {...headSwiperCarouselConfig}
                         className='w-full'>
                         {duplicatedBundle.map((img, index) => (
                              <SwiperSlide
                                   key={index}
                                   className="!w-28 !h-36 sm:!w-32 sm:!h-40 
                                   md:!w-48 md:!h-60 lg:!w-60 lg:!h-80">
                                   <motion.div
                                        variants={cardVariants}
                                        className="h-full w-full overflow-hidden rounded-xl">
                                        <img
                                             src={img}
                                             alt={`Slide ${index + 1}`}
                                             className="h-full w-full object-cover object-center" />
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

export default HeadCarousel;