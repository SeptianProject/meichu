import { assetsImage, bestSellerImages } from '../../../assets/assets'

const CardBestSeller = () => {
     return (
          <div className='bg-transparent border border-[#5E5A5A] 
          dark:bg-[#48484D] bg-opacity-50 w-full h-[20rem] sm:h-[21rem] md:h-[20rem] lg:h-[17.5rem] xl:h-[21rem]
          rounded-3xl flex flex-col items-start p-5 gap-y-5'>
               {/* photo & typograph */}
               <div className='flex items-center gap-x-4'>
                    <img className='rounded-full size-14'
                         src={assetsImage.BestSellerProfile} alt="" />
                    <div className='flex flex-col items-start'>
                         <h3 className='dark:text-light text-lg font-semibold'>Name Product</h3>
                         <h6 className='dark:text-light text-base font-extralight'>@meichu</h6>
                    </div>
               </div>
               <div className='w-full h-44 grid grid-cols-3 grid-rows-2 gap-2'>
                    {bestSellerImages.map((img, index) => {
                         const gridApply = index === 1 ? 'col-span-2 row-span-2' : ''
                         return (
                              <img key={index} src={img} alt={`Best-${index}`}
                                   className={`${gridApply} size-full object-cover 
                                             object-center rounded-2xl`} />
                         )
                    })}
               </div>
               <div>
                    <h3 className='dark:text-light font-semibold text-lg'>Nama Collection</h3>
               </div>
          </div>
     )
}

export default CardBestSeller