import React from 'react'
import { FaHeart } from 'react-icons/fa'

type HeadProductCatalogProps = {
     type: 'catalog' | 'profile'
}

const HeadProductCatalog: React.FC<HeadProductCatalogProps> = ({ type }) => {
     const [isLiked, setIsLiked] = React.useState(false)

     const handleOnLike = () => {
          setIsLiked(!isLiked)
          if (!isLiked) {
               alert('Login boy🚀🚀')
          }
     }

     return (
          <div className='flex items-center justify-between'>
               <h3 className={`dark:text-light font-bold
                    ${type === 'catalog' ? 'text-lg md:text-xl' : 'text-sm'}`}>
                    Nama Product
               </h3>
               <div onClick={handleOnLike}
                    className={`border border-[#5E5A5A] dark:border-light cursor-pointer 
                    rounded-full w-fit group hover:scale-105 transition-all duration-300
                    ${type === 'catalog' ? 'p-2' : 'bg-red-500 border-transparent dark:border-transparent'}
                    ${isLiked ? 'bg-red-500 border-transparent dark:border-transparent'
                              : ''}`}>
                    <FaHeart className={`text-[#5E5A5A] dark:text-light size-4
                    active:scale-50 transition-all duration-300
                    ${isLiked ? 'text-light' : ''}
                    ${type === 'catalog' ? 'md:size-5' : 'text-light'}`} />
               </div>
          </div>
     )
}

export default HeadProductCatalog