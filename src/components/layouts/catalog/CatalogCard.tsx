import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { assetItems } from '../../../assets/assets'
import { useAppDispatch, useAppSelector } from '../../../redux/hook'
import { FaHeart } from 'react-icons/fa'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { setIsAuthModalOpen } from '../../../redux/slices/authSlice'
import { createProductLike, deleteProductLike } from '../../../services/likeService'
import { addLike, removeLike } from '../../../redux/slices/likeSlice'
import { showActionToast } from '../../elements/ToastNotification'


type CatalogCardProps = {
     isFavored?: boolean
     uuid?: string
     title?: string
     image?: string
     productId: number
     isProfileView?: boolean
}

const CatalogCard: React.FC<CatalogCardProps> = React.memo(({
     isFavored,
     title,
     uuid,
     image,
     productId,
     isProfileView
}) => {
     const navigate = useNavigate()
     const dispatch = useAppDispatch()
     const location = useLocation()
     const queryClient = useQueryClient()
     const { userId, isAuthenticated } = useAppSelector((state) => state.auth)
     const likedProducts = useAppSelector((state) => state.like.likedProducts)
     const likedProduct = likedProducts.find(product => product.productId === productId)
     const isLiked = isProfileView ? true : !!likedProduct
     const cardRef = React.useRef<HTMLDivElement>(null)

     const createLikeMutation = useMutation({
          mutationFn: () => createProductLike(userId!, productId),
          onSuccess: (response) => {
               queryClient.invalidateQueries(['user'])
               queryClient.invalidateQueries(['userAvatar'])
               const newUuid = response.data.attributes.uuid
               dispatch(addLike({
                    productId,
                    uuid: newUuid
               }))
               showActionToast({
                    isLiked: true,
                    productTitle: title,
                    onClick: () => {
                         navigate(`/dashboard`)
                         if (location.pathname === '/dashboard') {
                              cardRef.current?.scrollIntoView({ behavior: 'smooth' })
                         }
                    }
               })
          },
          onError: (error) => {
               console.error('Error on like product', error)
          }
     })

     const deleteLikeMutation = useMutation({
          mutationFn: () => {
               if (!likedProduct?.uuid && !uuid) {
                    throw new Error('Product not found')
               }
               return deleteProductLike(isProfileView ? uuid! : likedProduct!.uuid)
          },
          onSuccess: () => {
               queryClient.invalidateQueries(['user'])
               queryClient.invalidateQueries(['userAvatar'])
               dispatch(removeLike({
                    productId,
                    uuid: isProfileView ? uuid! : likedProduct!.uuid
               }))
               showActionToast({ isLiked: false, productTitle: title })
          },
          onError: (error) => {
               console.error('Error deleting product', error)
          }
     })

     const handleOnLike = React.useCallback(async (e: React.MouseEvent) => {
          e.stopPropagation()

          if (!isAuthenticated) {
               dispatch(setIsAuthModalOpen(true))
               return
          }

          try {
               if (isLiked) {
                    await deleteLikeMutation.mutateAsync()
               } else {
                    await createLikeMutation.mutateAsync()
               }
          } catch (error) {
               console.error('Error handling product: ', error)
          }
     }, [isAuthenticated, isLiked, createLikeMutation, deleteLikeMutation, dispatch])

     const handleToDetail = React.useCallback(() => {
          navigate(`/catalog-detail/${productId}`)
     }, [navigate, productId])

     const isLoading = createLikeMutation.isLoading || deleteLikeMutation.isLoading

     return (
          <div ref={cardRef}
               className='bg-[#C2C2C4]/30 border border-graySurface1 rounded-2xl 
               h-full w-full cursor-pointer dark:border-transparent dark:bg-cardBackground
               hover:-translate-y-3 transition-all duration-500 px-5 pt-5 pb-2'>
               <div className='flex items-center justify-between'>
                    <h3 className='font-bold text-lg md:text-xl text-graySurface1 dark:text-light'>
                         {title}
                    </h3>
                    <button
                         onClick={handleOnLike}
                         disabled={isLoading}
                         className={`${isFavored
                              ? 'bg-red-500 border-transparent dark:border-transparent p-1'
                              : 'border-[#5E5A5A] dark:border-light p-2'}
                              ${isLiked ? 'bg-red-500 border-transparent dark:border-transparent' : ''}
                              border cursor-pointer rounded-full w-fit 
                              hover:scale-105 transition-all duration-300
                              ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}>
                         <FaHeart
                              className={`md:size-5 ${isLiked ? 'text-light' : ''} 
                                   text-[#5E5A5A] dark:text-light size-4 active:scale-50 
                                   transition-all duration-300`} />
                    </button>
               </div>
               <div className='flex items-center gap-x-2 my-2'>
                    <h4 className='text-graySurface1 dark:text-light text-sm font-medium md:text-base'>
                         @Meichu
                    </h4>
               </div>
               <div className='my-5'>
                    <img className='object-cover object-top w-full rounded-xl md:rounded-2xl h-56 lg:h-60 xl:h-72'
                         src={image} alt={title} loading='lazy' />
               </div>
               <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-x-2'>
                         <img className='w-12'
                              src={assetItems.CreditLogo} alt='' loading='lazy' />
                         <div className='flex flex-col'>
                              <h4 className='text-graySurface1 text-base dark:text-light'>
                                   Credits
                              </h4>
                              <h4 className='text-graySurface1 text-base dark:text-light'>
                                   4.3
                              </h4>
                         </div>
                    </div>
                    <button onClick={handleToDetail}
                         className='border border-[#5E5A5A] text-[#5E5A5A] font-inter w-fit
                    py-2 rounded-full text-sm transition-all duration-300 
                    dark:border-light dark:text-light hover:bg-yellowLinear1 hover:text-light
                    hover:border-transparent dark:hover:border-transparent dark:hover:bg-yellowLinear1
                    px-5 font-semibold md:px-7 md:py-[10px] xl:px-10'>
                         Buy Now!
                    </button>
               </div>
          </div>
     )
})

export default CatalogCard