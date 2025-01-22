import React from 'react'
import { useNavigate } from 'react-router-dom'
import { assetItems } from '../../../assets/assets'
import { useAppDispatch, useAppSelector } from '../../../redux/hook'
import { FaHeart } from 'react-icons/fa'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { setIsAuthModalOpen } from '../../../redux/slices/authSlice'
import { createProductLike } from '../../../services/productService'

type CatalogCardProps = {
     isFavored?: boolean
     title?: string
     image?: string
     productId: number
     initialLikeStatus?: boolean
}

const CatalogCard: React.FC<CatalogCardProps> = React.memo(({
     isFavored,
     title,
     image,
     productId,
     initialLikeStatus = false
}) => {
     const navigate = useNavigate()
     const dispatch = useAppDispatch()
     const [isLiked, setIsLiked] = React.useState(initialLikeStatus)
     const { userId, isAuthenticated } = useAppSelector((state) => state.auth)
     const queryClient = useQueryClient()

     React.useEffect(() => {
          setIsLiked(initialLikeStatus)
     }, [initialLikeStatus])

     const likeMutation = useMutation({
          mutationFn: () => {
               if (!isAuthenticated || !userId) {
                    throw new Error('User must be authenticated')
               }
               return createProductLike(userId, productId)
          },
          onSuccess: () => {
               queryClient.invalidateQueries(['product'])
               setIsLiked(true)
          },
          onError: (error) => {
               console.error('Error on like product', error)
               setIsLiked(initialLikeStatus)
          }
     })

     const handleOnLike = async (e: React.MouseEvent) => {
          e.stopPropagation()

          if (!isAuthenticated) {
               dispatch(setIsAuthModalOpen(true))
               return
          }
          try {
               await likeMutation.mutateAsync()
          } catch (error) {
               console.error('Error on like product: ', error)
          }
     }

     const handleToDetail = () => {
          navigate(`/catalog-detail/${productId}`)
     }

     return (
          <div className={`bg-transparent border border-graySurface1 rounded-2xl 
               h-full w-full cursor-pointer dark:border-transparent dark:bg-cardBackground
               hover:-translate-y-3 transition-all duration-500 ${isFavored ? 'p-3' : 'p-5'}`}>
               <div className='flex items-center justify-between'>
                    <h3 className={`${isFavored ? 'text-base  font-semibold' : 'font-bold text-lg md:text-xl'}
                         text-graySurface1 dark:text-light`}>
                         {title}
                    </h3>
                    <div onClick={handleOnLike}
                         className={`${isFavored
                              ? 'bg-red-500 border-transparent dark:border-transparent p-1'
                              : 'border-[#5E5A5A] dark:border-light p-2'}
                              ${isLiked ? 'bg-red-500 border-transparent dark:border-transparent' : ''}
                              border cursor-pointer rounded-full w-fit 
                              hover:scale-105 transition-all duration-300
                              ${likeMutation.isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}>
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
               <div className='my-5'>
                    <img className={`object-cover object-top w-full rounded-2xl  
                    ${isFavored ? 'h-36 sm:h-44' : 'h-52 lg:h-80'}`}
                         src={image} alt={title} />
               </div>
               <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-x-2'>
                         <img className={`${isFavored ? 'size-7 md:size-9' : 'size-9'}`}
                              src={assetItems.ImvuIcon} alt='' />
                         <div className='flex flex-col'>
                              <h4 className={`text-graySurface1 dark:text-light font-medium
                              ${isFavored ? 'text-sm md:text-base' : 'text-base'}`}>
                                   Credits
                              </h4>
                              <h4 className={`text-graySurface1 dark:text-light font-semibold
                              ${isFavored ? 'text-sm md:text-base' : 'text-base'}`}>
                                   4.3
                              </h4>
                         </div>
                    </div>
                    <button onClick={handleToDetail}
                         className={`border border-[#5E5A5A] text-[#5E5A5A] font-inter w-fit
                    px-3 py-2 rounded-full text-sm transition-all duration-300 
                    dark:border-light dark:text-light hover:bg-yellowLinear1 hover:text-light
                    hover:border-transparent dark:hover:border-transparent dark:hover:bg-yellowLinear1
                    ${isFavored ? '' : ' font-semibold md:px-12 md:py-[10px]'}`}>
                         Buy Now!
                    </button>
               </div>
          </div>
     )
})

export default CatalogCard