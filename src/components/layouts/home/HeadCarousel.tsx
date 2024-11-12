import { Swiper, SwiperSlide } from 'swiper/react';
import { headImgSwiper } from "../../../assets/assets"
import { EffectCards, Navigation } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

const HeadCarousel = () => {
     return (
          <div className='max-w-screen-lg overflow-hidden'>
               <Swiper
                    effect={'cards'}
                    grabCursor={true}
                    navigation={false}
                    onNavigationNext={(swiper) => console.log('next', swiper)}
                    centeredSlides={true}
                    slidesPerView={4}
                    initialSlide={2}
                    cardsEffect={{
                         rotate: false,
                         perSlideOffset: 65,
                         slideShadows: false,
                    }}
                    modules={[EffectCards, Navigation]}
                    className='mx-auto w-full'
               >
                    {headImgSwiper.map((img, index) => (
                         <SwiperSlide key={index}>
                              <img className='rounded-2xl w-60 h-80 object-cover object-center ' src={img} alt={`headImg${index + 1}`} />
                         </SwiperSlide>
                    ))}
               </Swiper>
          </div >
     )
}

export default HeadCarousel

