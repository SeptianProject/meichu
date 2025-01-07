import React from 'react'
import { FaHeart } from 'react-icons/fa'
import { useAppSelector } from '../../../redux/hook'
import { RootState } from '../../../redux/store'

type HeaderProductCatalogProps = {
     isFavored?: boolean
}

const HeaderProductCatalog: React.FC<HeaderProductCatalogProps> = React.memo(({ isFavored }) => {
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
                    <h3 className={`text-graySurface1 dark:text-light
                    ${isFavored ? 'text-base  font-semibold' : ' font-bold text-lg md:text-xl'}`}>
                         Nama Product
                    </h3>
                    <div
                         onClick={handleOnLike}
                         className={`${isFavored
                              ? 'bg-red-500 border-transparent dark:border-transparent p-1'
                              : 'border-[#5E5A5A] dark:border-light p-2'}
                              ${isLiked ? 'bg-red-500 border-transparent dark:border-transparent' : ''}
                              border cursor-pointer rounded-full w-fit group 
                              hover:scale-105 transition-all duration-300`}>
                         <FaHeart
                              className={`${isFavored ? 'text-light ' : 'md:size-5'}
                                   ${isLiked ? 'text-light' : ''} text-[#5E5A5A] 
                                   dark:text-light size-4 active:scale-50 transition-all
                                   duration-300`} />
                    </div>
               </div>
               <div className='flex items-center gap-x-2 my-2'>
                    <h4 className={`text-graySurface1 dark:text-light text-sm font-medium
                    ${isFavored ? '' : 'md:text-base'}`}>
                         @Meichu
                    </h4>
               </div>
          </>
     )
})

export default HeaderProductCatalog