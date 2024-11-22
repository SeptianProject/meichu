import { FaHeart } from 'react-icons/fa'

const HeadProductCatalog = () => {
     return (
          <>
               <h3 className='dark:text-light text-[14px] 
                    sm:text-sm font-bold md:text-xl'>
                    Nama Product
               </h3>
               <div className='border border-[#5E5A5A] dark:border-light 
                    rounded-full p-[5px] md:p-2 w-fit'>
                    <FaHeart className='text-[#5E5A5A] dark:text-light size-3 md:size-5' />
               </div>
          </>
     )
}

export default HeadProductCatalog