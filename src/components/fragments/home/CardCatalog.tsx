import { useNavigate } from 'react-router-dom'
import { assetsImage, bestSellerImages } from '../../../assets/assets'
import { FaHeart } from 'react-icons/fa'

const CardCatalog = () => {
     const navigate = useNavigate()

     return (
          <div onClick={() => navigate('/catalog-detail')}
               className='bg-transparent border border-[#5E5A5A] dark:bg-[#302F35] p-2 rounded-2xl h-[17rem] xl:w-[24rem] 
               xl:h-[32rem] lg:p-5'>
               {/* Product name */}
               <div className='mt-2 flex items-center justify-between lg:mt-0'>
                    <h3 className='dark:text-light text-sm font-bold lg:text-xl'>Nama Product</h3>
                    <div className='border border-[#5E5A5A] dark:border-light rounded-full p-[5px] lg:p-2 w-fit'>
                         <FaHeart className='text-[#5E5A5A] dark:text-light size-3 lg:size-5' />
                    </div>
               </div>
               {/* Profile */}
               <div className='flex items-center gap-x-2 my-2'>
                    <img className='rounded-full size-7 lg:size-12'
                         src={assetsImage.BestSellerProfile} alt="" />
                    <h4 className='dark:text-light text-xs font-medium lg:text-base'>@Meichu</h4>
               </div>
               {/* image content */}
               <div className='mt-3 lg:mt-5'>
                    <img className='w-full h-28 object-cover object-center rounded-xl lg:rounded-3xl xl:h-72'
                         src={bestSellerImages[1]} alt="Product" />
               </div>
               {/* more Button */}
               <div className='mt-5 flex items-center justify-start lg:justify-between gap-x-2'>
                    <div className='flex items-center gap-x-2'>
                         <img className='size-7 rounded-full lg:size-12'
                              src={assetsImage.BundleProduct} alt='' />
                         <div className='flex flex-col'>
                              <h4 className='dark:text-light text-xs font-normal lg:text-base'>Credits</h4>
                              <h4 className='dark:text-light text-xs font-semibold lg:text-base'>4.3</h4>
                         </div>
                    </div>
                    <button className='border border-[#5E5A5A] text-[#5E5A5A] dark:border-light dark:text-light
                    font-semibold font-inter rounded-full text-xs p-2 w-fit lg:w-36 lg:py-3'>
                         Buy Now!
                    </button>
               </div>
          </div>
     )
}

export default CardCatalog