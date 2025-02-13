import React from "react"
import useUI from "./useUI"
import CatalogCard from "../components/layouts/catalog/CatalogCard"
import CardEvent from "../components/fragments/event/CardEvent"
import { useNavigate } from "react-router-dom"
import { useAppDispatch } from "../redux/hook"
import { setProfileActive } from "../redux/slices/authSlice"
import { Swiper, SwiperSlide } from "swiper/react"
import { useUserData } from "./useQueryRequest"
import { getCloudinaryUrl } from "../services"

export const useProfileData = () => {
     const navigate = useNavigate()
     const dispatch = useAppDispatch()
     const { screenSize } = useUI()
     const isMobile = screenSize === 'mobile'

     const [isFavored, setIsFavored] = React.useState(true)
     const [isTapDiscover, setIsTapDiscover] = React.useState(false)

     const { data: userData, isLoading: userDataLoading } = useUserData('userAvatar')
     const { data: userDataDetail, isLoading: userDataDetailLoading } = useUserData('user')

     const handleSwitchDiscover = React.useCallback(() => setIsFavored(prev => !prev), [])

     const handleTapDiscover = React.useCallback(() => setIsTapDiscover(true), [])

     const handleBackToProfile = React.useCallback(() => setIsTapDiscover(false), [])

     const handleSeeDetail = React.useCallback((uuid: string) => {
          dispatch(setProfileActive(false))
          setTimeout(() => {
               navigate('/custom-product', {
                    state: {
                         requestData: uuid,
                         isEditing: true
                    },
                    replace: true,
               })
          }, 200);
     }, [dispatch, navigate])

     const listCardFavored = React.useMemo(() =>
          userDataDetail?.likes?.map(like => (
               <CatalogCard
                    key={like.id}
                    isFavored
                    productId={like.id}
                    title={like.product?.name}
                    image={getCloudinaryUrl(like.product?.thumbnail.url)}
                    initialLikeStatus={true}
               />
          )), [userDataDetail?.likes])

     const listCardRequest = React.useMemo(() => (
          userDataDetail?.requests?.map(request => (
               <CardEvent
                    key={request.id}
                    isEvent={false}
                    title={request?.name}
                    onClick={() => handleSeeDetail(request?.uuid)}
                    image={getCloudinaryUrl(request?.references?.url || '')}
                    time={request?.createdAt?.split('T')[0]}
               />
          ))
     ), [userDataDetail?.requests, handleSeeDetail])

     const renderCardContent = React.useCallback((items: React.ReactNode[]) => (
          isMobile ? (
               <Swiper className='w-full'>
                    {items.map((item, index) => (
                         <SwiperSlide
                              key={index}
                              className={`py-5 px-1 sm:px-2 ${items === listCardFavored ? 'sm:max-w-[15rem]' : ''}`}>
                              {item}
                         </SwiperSlide>
                    ))}
               </Swiper>
          ) : (
               <div className={`grid ${items === listCardFavored ? 'grid-cols-2 lg:grid-cols-3' : 'grid-cols-1 lg:grid-cols-2'} w-full gap-3 gap-y-5`}>
                    {items.map((item, index) => (
                         <div key={index} className='w-full'>{item}</div>
                    ))}
               </div>
          )
     ), [isMobile, listCardFavored])

     return {
          userData,
          userDataLoading,
          userDataDetail,
          userDataDetailLoading,
          isFavored,
          isTapDiscover,
          listCardFavored,
          listCardRequest,
          handleSwitchDiscover,
          handleTapDiscover,
          handleBackToProfile,
          renderCardContent,
     }
}