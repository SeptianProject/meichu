import React from 'react'
import ModalOverlay from '../../fragments/ModalOverlay'
import CardEvent from '../../fragments/event/CardEvent'
import { Swiper, SwiperSlide } from 'swiper/react'
import CatalogCard from '../catalog/CatalogCard'
import 'swiper/swiper-bundle.css'
import HeadProfile from '../../fragments/profile/HeadProfile'
import ProfileContent from './ProfileContent'
import ProfileDiscover from './ProfileDiscover'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { getUser } from '../../../services/authService'
import useUI from '../../../hooks/useUI'
import { UserProfile } from '../../../types'
import { assetItems } from '../../../assets/AnotherAssets'

interface ProfileLayoutProps {
   profileOpen: boolean
   profileClose: () => void
}

const ProfileLayout: React.FC<ProfileLayoutProps> = React.memo(({
   profileOpen,
   profileClose
}) => {
   const [isFavored, setIsFavored] = React.useState(true)
   const [isTapDiscover, setIsTapDiscover] = React.useState(false)
   const [maxHeight, setMaxHeight] = React.useState(0)
   const { screenSize } = useUI()
   const queryClient = useQueryClient()
   const { data: userData } = useQuery<UserProfile>(['user'], () => getUser('populate=*'))

   const isMobile = screenSize === 'mobile'

   const listCardFavored = React.useMemo(() => userData?.likes?.map((like) =>
      <CatalogCard
         isFavored
         productId={like.id}
         title={like.attributes?.product?.data?.attributes?.name}
         image={like.attributes?.product?.data?.attributes?.name}
         initialLikeStatus={true}
      />
   ), [userData?.likes])
   const listCardRequest = React.useMemo(() => userData?.requests?.map((request) =>
      <CardEvent
         key={request.id}
         isEvent={false}
         title={request?.name}
         // image request?.attributes?.references?.data?.attributes?.url
         image={assetItems.EventImage}
         time={request?.createdAt?.split('T')[0]}
      />),
      [userData]
   )

   React.useEffect(() => {
      if (profileOpen) {
         queryClient.invalidateQueries(['user'])
      }
   }, [profileOpen, queryClient, userData])

   const handleSwitchDiscover = () => setIsFavored(!isFavored)
   const handleTapDiscover = () => setIsTapDiscover(true)
   const handleBackToProfile = () => setIsTapDiscover(false)

   const renderCardContent = React.useCallback((items: React.ReactNode[]) => (
      isMobile ? (
         <Swiper className='w-full'>
            {items.map((item, index) => (
               <SwiperSlide key={index} className={`py-5 px-1 sm:px-2
               ${items === listCardFavored ? 'sm:max-w-[15rem]' : ''}`}>
                  {item}
               </SwiperSlide>
            ))}
         </Swiper>
      ) : (
         <div
            className={`grid ${items === listCardFavored ? 'grid-cols-2 lg:grid-cols-3' : 'grid-cols-1 lg:grid-cols-2'} 
               w-full gap-3 gap-y-5`}>
            {items.map((item, index) => (
               <div key={index} className='w-full'>{item}</div>
            ))}
         </div>
      )
   ), [isMobile, listCardFavored])

   React.useEffect(() => {
      const updateMaxHeight = () => {
         setMaxHeight(window.innerHeight * 0.8)
      }
      updateMaxHeight()
      window.addEventListener('resize', updateMaxHeight)

      if (profileOpen) {
         const scrollY = window.scrollY
         document.body.style.cssText = `
            overflow: hidden;
            position: fixed;
            width: 100%;
            top: -${scrollY}px;
         `
      } else {
         const scrollY = parseInt(document.body.style.top || '0') * -1
         document.body.style.cssText = ''
         window.scrollTo(0, scrollY)
      }

      return () => window.removeEventListener('resize', updateMaxHeight)
   }, [profileOpen])

   return (
      <>
         <ModalOverlay isModalClose={profileClose} isModalOpen={profileOpen} />
         <div className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
               w-4/5 rounded-xl bg-light dark:bg-dark border border-graySurface1 overflow-y-hidden
               transition-all duration-500 ease-in-out lg:w-3/5 lg:min-h-[85vh] lg:rounded-3xl
               ${profileOpen || !profileClose ? 'z-50 opacity-100' : 'z-0 scale-0 opacity-0'}`}
            style={{ maxHeight: profileOpen ? `${maxHeight}px` : '0px' }}>
            <div style={{ maxHeight: profileOpen ? `${maxHeight}px` : '0px' }}
               className='relative flex flex-col items-center size-full overflow-y-auto px-6 py-10 md:p-10'>
               <div className="bg-yellowBloobs/10 absolute -top-10 -right-20 size-80 rounded-full blur-3xl" />
               <HeadProfile profileClose={profileClose} />
               <div className='w-full pt-5 z-10'>
                  <ProfileContent
                     isTapDiscover={isTapDiscover}
                     handleTapDiscover={handleTapDiscover}
                     emailValue={userData?.email}
                     dateValue={userData?.createdAt?.split('T')[0]}
                     username={userData?.username}
                     telephoneNumber={userData?.telephoneNumber}
                     profilePicture={userData?.profilePicture?.url}
                  />
                  <ProfileDiscover
                     isFavored={isFavored}
                     isTapDiscover={isTapDiscover}
                     favoredValue={userData?.likes?.length}
                     requestedValue={userData?.requests?.length}
                     handleSwitchDiscover={handleSwitchDiscover}
                     handleBackToProfile={handleBackToProfile}
                     renderCardContent={renderCardContent}
                     listCardFavored={listCardFavored || []}
                     listCardRequest={listCardRequest || []}
                  />
               </div>
            </div>
         </div >
      </>
   )
})

export default ProfileLayout

