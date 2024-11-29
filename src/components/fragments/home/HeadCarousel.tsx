import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { headImgSwiper } from "../../../assets/assets";
import { EffectCards, Navigation } from 'swiper/modules';
import { motion, AnimationProps } from 'framer-motion';
import 'swiper/swiper-bundle.css';
import { Swiper as SwiperType } from 'swiper/types';
import ArrowCardCarousel from '../../elements/ArrowCardCarousel';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';
import BounceAnimation from '../../../animations/BounceAnimation';

const HeadCarousel: React.FC = () => {
     const swiperRef = React.useRef<SwiperType | null>(null);

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
          <div className='max-w-[460px] h-[160px] sm:max-w-[520px] sm:h-[180px] isolate
               md:max-w-screen-md md:h-[250px] lg:max-w-screen-lg lg:h-[320px] relative'>
               <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={containerVariants}
                    className='size-full'>
                    <Swiper
                         effect={'cards'}
                         grabCursor={true}
                         onBeforeInit={(swiper) => {
                              swiperRef.current = swiper;
                         }}
                         centeredSlides={true}
                         slidesPerView={4}
                         initialSlide={2}
                         cardsEffect={{
                              rotate: false,
                              perSlideOffset: 70,
                              slideShadows: false,
                         }}
                         modules={[EffectCards, Navigation]}
                         className='mx-auto size-full select-none py-10'>
                         {headImgSwiper.map((img, index) => (
                              <SwiperSlide key={index} className='rounded-2xl size-full'>
                                   <motion.div
                                        variants={cardVariants}
                                        className='rounded-2xl size-full lg:w-60 lg:h-80'>
                                        <img src={img} alt={`headImg${index + 1}`}
                                             className='size-full object-cover 
                                             object-center rounded-2xl' />
                                   </motion.div>
                              </SwiperSlide>
                         ))}
                    </Swiper>

                    {/* Arrow Custom */}
                    <div className='hidden absolute top-1/2 -translate-y-1/2 -translate-x-1 z-10
                    lg:flex items-center justify-between w-full lg:px-10'>
                         <BounceAnimation
                              delayVal={1.2}
                              hiddenCoordinates={{ x: -50 }}>
                              <ArrowCardCarousel
                                   onClick={() => swiperRef.current?.slidePrev()}
                                   icon={SlArrowLeft} />
                         </BounceAnimation>
                         <BounceAnimation
                              delayVal={1.2}
                              hiddenCoordinates={{ x: 50 }}>
                              <ArrowCardCarousel
                                   onClick={() => swiperRef.current?.slideNext()}
                                   icon={SlArrowRight} />
                         </BounceAnimation>
                    </div>
               </motion.div>
          </div>
     );
};

export default HeadCarousel;