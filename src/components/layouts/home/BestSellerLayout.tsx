import React from 'react'
import CardBestSeller from '../../fragments/home/CardBestSeller'
import TextTagline from '../../fragments/home/TextTagline'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.css'
import { CardStaggerAnimation, ContainerStaggerAnimation } from '../../animations/StaggerAnimation'
import useUI from '../../../hooks/useUI'
import { useQuery } from '@tanstack/react-query'
import { getProductCatalogs } from '../../../services/productService'
import { ProductCatalogsResponse } from '../../../types'

const BestSellerLayout = () => {
     const { screenSize } = useUI()
     const { data: productData } = useQuery<ProductCatalogsResponse>(['products'], getProductCatalogs)
     const bestSeller = React.useMemo(() => productData?.data.map((product) =>
          <CardBestSeller
               key={product.id}
               title={product.attributes.name}
               thumbnail={product.attributes.thumbnail.data.attributes.url}
               images={product.attributes.images.data.map((image) => image.attributes.url)}
          />
     ), [productData])


     return (
          <div className="min-h-full relative">
               <TextTagline text="Best Seller" className='font-semibold' />
               <ContainerStaggerAnimation
                    initialDelay={0.5}
                    staggerDelay={0.4}
                    className='mt-6'>
                    <Swiper
                         slidesPerView={screenSize === 'mobile' ? 1 :
                              screenSize === 'tablet' ? 2 : 3}
                         className='size-full'>
                         {bestSeller?.map((card, index) => (
                              <SwiperSlide key={index} className='px-2 py-5'>
                                   <CardStaggerAnimation
                                        hiddenPosition={{ y: 100 }}
                                        className='w-full'>
                                        {card}
                                   </CardStaggerAnimation>
                              </SwiperSlide>
                         ))}
                    </Swiper>
               </ContainerStaggerAnimation>
          </div>
     )
}

export default BestSellerLayout