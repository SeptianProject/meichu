import React from 'react'
import { FaHeart } from 'react-icons/fa'
import { useAppSelector } from '../../../redux/hook'
import { RootState } from '../../../redux/store'

type HeaderProductCatalogProps = {
     type: 'catalog' | 'profile'
}

const HeaderProductCatalog: React.FC<HeaderProductCatalogProps> = React.memo(({ type }) => {
     const [isLiked, setIsLiked] = React.useState(false)
     const { isAuthModalOpen } = useAppSelector((state: RootState) => state.auth)

     const handleOnLike = () => {
          if (isAuthModalOpen) {
               setIsLiked(!isLiked)
          }
     }

     return (
          <>
               <div className='flex items-center justify-between'>
                    <h3 className={`dark:text-light font-bold
                    ${type === 'catalog' ? 'text-lg md:text-xl' : 'text-sm'}`}>
                         Nama Product
                    </h3>
                    <div
                         onClick={handleOnLike}
                         className={`${type === 'catalog'
                              ? 'border-[#5E5A5A] dark:border-light'
                              : 'bg-red-500 border-transparent dark:border-transparent'}
                              ${isLiked ? 'bg-red-500 border-transparent dark:border-transparent' : ''}
                              border cursor-pointer rounded-full p-2 w-fit group 
                              hover:scale-105 transition-all duration-300`}>
                         <FaHeart
                              className={`${type === 'catalog' ? 'md:size-5' : 'text-light'}
                                   ${isLiked ? 'text-light' : ''} text-[#5E5A5A] 
                                   dark:text-light size-4 active:scale-50 transition-all
                                   duration-300`} />
                    </div>
               </div>
               <div className='flex items-center gap-x-2 my-2'>
                    <h4 className={`dark:text-light text-sm font-medium
                    ${type === 'catalog' ? 'md:text-base' : ''}`}>
                         @Meichu
                    </h4>
               </div>
          </>
     )
})

export default HeaderProductCatalog