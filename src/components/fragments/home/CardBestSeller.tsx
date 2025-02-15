import Skeleton from "react-loading-skeleton"
import { assetItems } from "../../../assets/assets"
import React from "react"

interface CardBestSellerProps {
     title: string
     thumbnail: string
     images?: string[]
     onClick?: VoidFunction
}

const CardBestSeller: React.FC<CardBestSellerProps> = ({
     title,
     thumbnail,
     images = [],
     onClick
}) => {
     const [imageLoadingStates, setImageLoadingStates] = React.useState<{ [key: string]: boolean }>({});
     const [thumbnailLoaded, setThumbnailLoaded] = React.useState(false);

     const handleImageLoad = (imageUrl: string) => {
          setImageLoadingStates(prev => ({
               ...prev,
               [imageUrl]: true
          }));
     };

     return (
          <div onClick={onClick}
               className='bg-[#f1f1f1] border border-graySurface1 dark:border-transparent
               dark:bg-cardBackground w-full p-5 
               rounded-3xl flex flex-col items-start gap-y-5 cursor-pointer
               hover:-translate-y-3 transition-all duration-500 h-[22rem]'>
               <div className='flex items-center gap-x-4'>
                    <div className="relative w-14 h-14">
                         <img className='rounded-full size-full' src={assetItems.AnyIcon} alt="" />
                    </div>
                    <div className='flex flex-col items-start relative'>
                         <h3 className='text-graySurface1 dark:text-light text-lg font-bold'>
                              {title}
                         </h3>
                         <h6 className='text-graySurface1 dark:text-light text-base'>
                              {'@meichu'}
                         </h6>
                    </div>
               </div>
               <div className='w-full h-48 grid grid-flow-col grid-cols-3 grid-rows-2 gap-2'>
                    {images.slice(0, 2).map((img, index) => (
                         <div key={index} className="relative col-span-1 row-span-1">
                              {!imageLoadingStates[img] && (
                                   <Skeleton
                                        className="absolute inset-0 size-full rounded-2xl border border-graySurface2"
                                        duration={1.5}
                                   />
                              )}
                              <img
                                   src={img}
                                   alt={`Image-${index}`}
                                   className={`size-full object-cover object-center rounded-2xl transition-opacity
                                   duration-300 ${imageLoadingStates[img] ? 'opacity-100' : 'opacity-0'}`}
                                   onLoad={() => handleImageLoad(img)}
                                   loading="lazy"
                              />
                         </div>
                    ))}
                    <div className="relative col-span-2 row-span-2">
                         {!thumbnailLoaded && (
                              <Skeleton
                                   className="absolute inset-0 size-full rounded-2xl border border-graySurface2"
                              />
                         )}
                         <img
                              src={thumbnail}
                              alt="Thumbnail"
                              className={`size-full object-cover object-top rounded-2xl transition-opacity 
                              duration-300 ${thumbnailLoaded ? 'opacity-100' : 'opacity-0'}`}
                              onLoad={() => setThumbnailLoaded(true)}
                              loading="lazy"
                         />
                    </div>
               </div>
               <div>
                    <h3 className='dark:text-light font-semibold text-lg relative'>
                         {title}
                    </h3>
               </div>
          </div>
     )
}

export default CardBestSeller