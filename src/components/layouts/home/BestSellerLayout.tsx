import CardBestSeller from '../../fragments/home/CardBestSeller'
import TextTagline from '../../fragments/home/TextTagline'
import { Swiper, SwiperSlide } from 'swiper/react'
import { CardStaggerAnimation, ContainerStaggerAnimation } from '../../animations/StaggerAnimation'
import useUI from '../../../hooks/useUI'
import { useQuery } from '@tanstack/react-query'
import { ProductCatalogsResponse } from '../../../types'
import { useNavigate } from 'react-router-dom'
import { getProductCatalogs } from '../../../services/productService'
import 'swiper/swiper-bundle.css'

const BestSellerLayout = () => {
     const navigate = useNavigate()
     const { screenSize } = useUI()
     const { data: productData, isLoading } = useQuery<ProductCatalogsResponse>(['product'], getProductCatalogs)

     if (isLoading) {
          return (
               <div>
                    <TextTagline text="Best Seller" className='font-semibold' />
                    <ContainerStaggerAnimation
                         initialDelay={0.5}
                         staggerDelay={0.4}
                         className='mt-6'>
                         {[...Array(screenSize === 'mobile' ? 1 : 3)].map((_, index) => (
                              <CardStaggerAnimation
                                   key={index}
                                   hiddenPosition={{ y: 100 }}
                                   className='w-full'>
                                   <CardBestSeller thumbnail='' title='' isLoading />
                              </CardStaggerAnimation>
                         ))}
                    </ContainerStaggerAnimation>
               </div>
          )
     }

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
                         {productData?.data.map((product, index) => (
                              <SwiperSlide key={index} className='px-2 py-5'>
                                   <CardStaggerAnimation
                                        hiddenPosition={{ y: 100 }}
                                        className='w-full'>
                                        <CardBestSeller
                                             key={product.id}
                                             isLoading={isLoading}
                                             title={product.attributes.name}
                                             thumbnail={product.attributes.thumbnail.data.attributes.url}
                                             images={product.attributes.images.data.map((image) => image.attributes.url)}
                                             onClick={() => navigate(`/catalog-detail/${product.id}`)}
                                        />
                                   </CardStaggerAnimation>
                              </SwiperSlide>
                         ))}
                    </Swiper>
               </ContainerStaggerAnimation>
          </div>
     )
}

export default BestSellerLayout