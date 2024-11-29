import React from 'react'
import { FaHeart } from 'react-icons/fa'

type HeadProductCatalogProps = {
     type: 'catalog' | 'profile'
}

const HeadProductCatalog: React.FC<HeadProductCatalogProps> = ({ type }) => {
     return (
          <>
               <h3 className={`dark:text-light text-[14px] font-bold
                    ${type === 'catalog' ? 'sm:text-sm md:text-xl' : ' text-sm'}`}>
                    Nama Product
               </h3>
               <div className={`border border-[#5E5A5A] dark:border-light cursor-pointer 
                    rounded-full p-[5px] w-fit group hover:bg-red-500 
                    hover:border-transparent dark:hover:border-transparent hover:scale-105
                    transition-all duration-300
                    ${type === 'catalog' ? 'md:p-2' : 'bg-red-500 dark:border-transparent'}`}>
                    <FaHeart className={`text-[#5E5A5A] dark:text-light size-3 
                    group-hover:text-light group-hover:scale-75 transition-all duration-300
                    ${type === 'catalog' ? 'md:size-5' : ''}`} />
               </div>
          </>
     )
}

export default HeadProductCatalog