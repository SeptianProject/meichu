import { FaHeart } from 'react-icons/fa6'
import { assetsImage, bestSellerImages } from '../../../assets/assets'


const CardFavoredProfile = () => {
     return (
          <div className='bg-transparent border border-[#5E5A5A] dark:bg-[#302F35]
               p-2 pb-5 md:p-3 rounded-2xl h-full w-full
               hover:-translate-y-3 transition-all duration-500'>
               {/* Product name */}
               <div className='mt-2 flex items-center justify-between md:mt-0'>
                    <h3 className='dark:text-light text-[14px] text-sm font-bold'>
                         Nama Product
                    </h3>
                    <div className='border border-[#5E5A5A] dark:border-light cursor-pointer 
                    rounded-full p-[5px] w-fit group hover:bg-red-500 
                    hover:border-transparent dark:hover:border-transparent hover:scale-105
                    transition-all duration-300'>
                         <FaHeart className='text-[#5E5A5A] dark:text-light size-3
                    group-hover:text-light group-hover:scale-75 transition-all duration-300' />
                    </div>
               </div>
               {/* Profile */}
               <div className='flex items-center gap-x-2 my-2'>
                    <img className='rounded-full size-7 cursor-pointer'
                         src={assetsImage.BestSellerProfile} alt="" />
                    <h4 className='dark:text-light text-xs font-medium'>
                         @Meichu
                    </h4>
               </div>
               {/* image content */}
               <div className='mt-3'>
                    <img className='w-full h-32 sm:h-24 object-cover object-center rounded-xl'
                         src={bestSellerImages[1]} alt="Product" />
               </div>
               {/* more Button */}
               <div className='mt-5 flex items-center justify-between'>
                    <div className='flex items-center gap-x-2'>
                         <img className='size-6 sm:size-7 rounded-full'
                              src={assetsImage.BundleProduct} alt='' />
                         <div className='flex flex-col'>
                              <h4 className='dark:text-light text-[12px] sm:text-xs font-normal'>
                                   Credits
                              </h4>
                              <h4 className='dark:text-light text-xs font-semibold'>
                                   4.3
                              </h4>
                         </div>
                    </div>
                    <button className='border border-[#5E5A5A] text-[#5E5A5A] font-inter w-fit
                    rounded-full text-[10px] p-1 text-xs
                    dark:border-light dark:text-light hover:bg-bluePrimary 
                    hover:border-transparent hover:text-light dark:hover:border-transparent
                    dark:hover:bg-bluePrimary transition-all duration-300'>
                         Buy Now!
                    </button>
               </div>
          </div>
     )
}


export default CardFavoredProfile