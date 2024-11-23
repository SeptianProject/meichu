import { FaHeart } from 'react-icons/fa'

const HeadProductCatalog = () => {
     return (
          <>
               <h3 className='dark:text-light text-[14px] 
                    sm:text-sm font-bold md:text-xl'>
                    Nama Product
               </h3>
               <div className='border border-[#5E5A5A] dark:border-light cursor-pointer 
                    rounded-full p-[5px] md:p-2 w-fit group hover:bg-red-500 
                    hover:border-transparent dark:hover:border-transparent hover:scale-105
                    transition-all duration-300'>
                    <FaHeart className='text-[#5E5A5A] dark:text-light size-3 md:size-5 
                    group-hover:text-light group-hover:scale-75 transition-all duration-300' />
               </div>
          </>
     )
}

export default HeadProductCatalog