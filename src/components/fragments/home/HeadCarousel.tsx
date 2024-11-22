import { Swiper, SwiperSlide } from 'swiper/react';
import { headImgSwiper } from "../../../assets/assets"
import { EffectCards, Navigation } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

const HeadCarousel = () => {
     return (
          <div className='max-w-[460px] h-[160px] sm:max-w-[520px] sm:h-[180px] 
          md:max-w-screen-md md:h-[250px] lg:max-w-screen-lg lg:h-[320px] transition-all duration-500'>
               <Swiper
                    effect={'cards'}
                    grabCursor={true}
                    navigation={false}
                    centeredSlides={true}
                    slidesPerView={4}
                    initialSlide={2}
                    cardsEffect={{
                         rotate: false,
                         perSlideOffset: 70,
                         slideShadows: false,
                    }}
                    modules={[EffectCards, Navigation]}
                    className='mx-auto size-full'
               >
                    {headImgSwiper.map((img, index) => (
                         <SwiperSlide key={index}>
                              <img className='rounded-2xl size-full lg:w-60 lg:h-80
                              object-cover object-center'
                                   src={img} alt={`headImg${index + 1}`} />
                         </SwiperSlide>
                    ))}
               </Swiper>
          </div >
     )
}

export default HeadCarousel

