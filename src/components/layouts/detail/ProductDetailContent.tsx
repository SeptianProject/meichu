import { FadeAnimation } from '../../animations/FadeAnimation'
import ScaleAnimation from '../../animations/ScaleAnimation'
import Button from '../../elements/buttons/Button'
import React from 'react'
import { transformProductData } from '../../../helper/transformProductDataHelper'
import { useProduct } from '../../../hooks/useQueryRequest'
import DetailContentSkeleton from '../../elements/skeletons/DetailContentSkeleton'
import { useNavigate } from 'react-router-dom'
import { getCloudinaryUrl } from '../../../services'

const ProductDetailContent = ({ productId }: { productId: string | undefined }) => {
     const navigate = useNavigate()
     const [selectedImageId, setSelectedImageId] = React.useState<number | null>(null)

     const { data: product, isLoading } = useProduct(productId)

     if (isLoading || !product) return <DetailContentSkeleton />

     const transformedProduct = transformProductData(product)
     const allImages = [
          { id: transformedProduct.id, url: transformedProduct.thumbnail },
          ...transformedProduct.images.slice(0, 2)
     ]

     const activeImageSource =
          allImages.find(img => img.id === selectedImageId)?.url ||
          transformedProduct.thumbnail

     return (
          <div className="space-y-10 md:flex items-start gap-x-16 overflow-hidden">
               <FadeAnimation
                    style={{ backgroundImage: `url(${getCloudinaryUrl(activeImageSource)})` }}
                    className="w-full max-w-screen-md mx-auto h-[22rem] rounded-2xl bg-cover bg-center 
                         transition-all duration-500 flex flex-col items-start justify-center
                         gap-y-3 lg:gap-y-5 p-5 lg:h-[35rem]">
                    {allImages.map((image) => (
                         <ScaleAnimation key={image.id}>
                              <img
                                   src={getCloudinaryUrl(image.url)}
                                   alt={image.url}
                                   loading='lazy'
                                   onClick={() => setSelectedImageId(image.id)}
                                   className={`w-full max-w-[6rem] md:max-w-[5rem] lg:max-w-[8rem] xl:max-w-[10rem] 
                                        border-2 border-light rounded-xl cursor-pointer 
                                        transition-all duration-300 ease-in-out`} />
                         </ScaleAnimation>
                    ))}
               </FadeAnimation>
               <div className="space-y-8 lg:space-y-5 w-full">
                    <div className="space-y-2">
                         <h1 className="dark:text-light uppercase text-3xl leading-tight font-bold">
                              {transformedProduct.name} <br /> Couple Series
                         </h1>
                         <div className='flex flex-col gap-y-1 w-fit'>
                              <h5 className='font-light text-opacity-70 dark:text-light/60'>
                                   {transformedProduct.categories[0]?.name}
                              </h5>
                              <div className="w-full h-[3px] rounded-full bg-gold" />
                         </div>
                    </div>
                    <div className="space-y-2 lg:max-w-[23rem]">
                         <h3 className="dark:text-light text-xl font-semibold">Description</h3>
                         <p className="dark:text-light/60 text-sm text-opacity-70 font-light dark:font-extralight">
                              {transformedProduct.description}
                         </p>
                    </div>
                    <div className="space-y-2">
                         <h3 className="dark:text-light text-xl text-opacity-70 font-semibold">Price</h3>
                         <p className="dark:text-light/60 text-opacity-70 font-light dark:font-extralight">
                              ${transformedProduct.price}
                         </p>
                    </div>
                    <div className="flex items-center gap-x-5 pb-10">
                         <Button
                              isGold
                              title="Buy Now!"
                              onClick={() => { }}
                              className="w-32 lg:w-44"
                         />
                         <Button
                              isCancel
                              isGold={false}
                              title="Cancel"
                              onClick={() => navigate('/')}
                              className="w-32 lg:w-44"
                         />
                    </div>
               </div>
          </div>
     )
}

export default React.memo(ProductDetailContent)