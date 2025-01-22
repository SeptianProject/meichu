import { assetItems } from "../../../assets/assets"
import React from "react"

interface CardBestSellerProps {
     title: string
     thumbnail: string
     images?: string[]
     onClick?: () => void
}

const CardBestSeller: React.FC<CardBestSellerProps> = ({
     title,
     thumbnail,
     images = [],
     onClick
}) => {
     return (
          <div onClick={onClick}
               className='bg-transparent border border-graySurface1 dark:border-transparent
               dark:bg-cardBackground bg-opacity-50 w-full p-5 
               rounded-3xl flex flex-col items-start gap-y-5 cursor-pointer
               hover:-translate-y-3 transition-all duration-500 h-[22rem]'>
               <div className='flex items-center gap-x-4'>
                    <img className='rounded-full size-14'
                         src={assetItems.AnyIcon} alt="" />
                    <div className='flex flex-col items-start'>
                         <h3 className='text-graySurface1 dark:text-light text-lg font-bold'>
                              {title}
                         </h3>
                         <h6 className='text-graySurface1 dark:text-light text-base'>
                              @meichu
                         </h6>
                    </div>
               </div>
               <div className='w-full h-48 grid grid-flow-col grid-cols-3 grid-rows-2 gap-2'>
                    {images.slice(0, 2).map((img, index) => (
                         <img key={index}
                              src={img}
                              alt={`Image-${index}`}
                              className='col-span-1 row-span-1 size-full object-cover 
                              object-center rounded-2xl'
                         />
                    ))}
                    <img src={thumbnail}
                         alt="Thumbnail"
                         className="col-span-2 row-span-2 size-full object-cover
                         object-top rounded-2xl"
                    />
               </div>
               <div>
                    <h3 className='dark:text-light font-semibold text-lg'>{title}</h3>
               </div>
          </div>
     )
}

export default CardBestSeller