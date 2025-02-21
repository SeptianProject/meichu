import React from "react"
import useUI from "./useUI"
import CatalogCard from "../components/layouts/catalog/CatalogCard"
import CardEvent from "../components/fragments/event/CardEvent"
import { useNavigate } from "react-router-dom"
import { useAppSelector } from "../redux/hook"
import { Swiper, SwiperSlide } from "swiper/react"
import { useUserData } from "./useQueryRequest"
import { getCloudinaryUrl } from "../services"
import 'swiper/css'
import BounceAnimation from "../components/animations/BounceAnimation"

export const useProfileData = () => {
     const navigate = useNavigate()
     const { screenSize } = useUI()
     const isMobile = screenSize === 'mobile'

     const [isFavored, setIsFavored] = React.useState(true)
     const isTapDiscover = useAppSelector((state) => state.profile.isTapDiscover)

     const { data: userData, isLoading: userDataLoading } = useUserData('userAvatar')
     const { data: userDataDetail, isLoading: userDataDetailLoading } = useUserData('user')

     const handleSwitchDiscover = React.useCallback((selected: boolean) =>
          setIsFavored((prev) => (prev !== selected ? selected : prev)),
          [])

     const handleSeeDetail = React.useCallback((uuid: string) => {
          setTimeout(() => {
               navigate('/custom-product', {
                    state: {
                         requestData: uuid,
                         isEditing: true
                    },
                    replace: true,
               })
          }, 200);
     }, [navigate])

     const listCardFavored = React.useMemo(() =>
          userDataDetail?.likes?.map(like => {
               return (
                    <CatalogCard
                         key={like.id}
                         isFavored={true}
                         uuid={like.uuid}
                         productId={like.id}
                         title={like.product?.name}
                         image={getCloudinaryUrl(like.product?.thumbnail.url)}
                         isProfileView={true}
                    />
               )
          }), [userDataDetail?.likes])

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
                              className={`py-5 px-1 xs:px-2 ${items === listCardFavored ? 'xs:max-w-[15rem]' : ''}`}>
                              <BounceAnimation
                                   hiddenCoordinates={{ y: 50 }}
                                   delayVal={0.5} className="w-full">
                                   {item}
                              </BounceAnimation>
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
          renderCardContent,
     }
}