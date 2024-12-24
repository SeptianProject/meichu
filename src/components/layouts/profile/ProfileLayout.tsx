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
import { getUser } from '../../../services/AuthService'
import useUI from '../../../hooks/useUI'
import { UserProfile } from '../../../interface'

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
   const { data: userData, error, isLoading } = useQuery<UserProfile>({
      queryKey: ['user'],
      queryFn: () => getUser('populate=profilePicture'),
   })

   const isMobile = screenSize === 'mobile'

   const listCardFavored = React.useMemo(() => Array(6).fill(null).map(() => <CatalogCard type='profile' />), [])

   const listCardRequest = React.useMemo(() => Array(6).fill(null).map(() => <CardEvent type='profile' />), [])

   React.useEffect(() => {
      if (profileOpen) {
         queryClient.invalidateQueries({ queryKey: ['user'] })
      }
   }, [profileOpen, queryClient])

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

   const handleSwitchDiscover = () => setIsFavored(!isFavored)
   const handleTapDiscover = () => setIsTapDiscover(true)
   const handleBackToProfile = () => setIsTapDiscover(false)

   const renderCardContent = (items: React.ReactNode[]) => (
      isMobile ? (
         <Swiper className='w-full'>
            {items.map((item, index) => (
               <SwiperSlide key={index} className='px-2 py-5'>
                  {item}
               </SwiperSlide>
            ))}
         </Swiper>
      ) : (
         <div
            className={`grid ${items === listCardFavored ? 'grid-cols-3' : 'grid-cols-2'} 
               w-full gap-2 gap-y-5`}>
            {items.map((item, index) => (
               <div key={index} className='w-full'>{item}</div>
            ))}
         </div>
      )
   )

   if (error) return null
   if (isLoading) return null

   return (
      <>
         <ModalOverlay isModalClose={profileClose} isModalOpen={profileOpen} />
         <div className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
               w-4/5 rounded-xl bg-light dark:bg-[#1e1e1e] border border-[#5e5a5a] overflow-y-hidden
               transition-all duration-500 ease-in-out lg:w-3/5 lg:min-h-[85vh] lg:rounded-3xl
               ${isTapDiscover ? 'min-h-[60vh]' : 'min-h-[70vh]'}
               ${profileOpen || !profileClose ? 'z-50 opacity-100' : 'z-0 scale-0 opacity-0'}`}
            style={{ maxHeight: profileOpen ? `${maxHeight}px` : '0px' }}>
            <div style={{ maxHeight: profileOpen ? `${maxHeight}px` : '0px' }}
               className='relative flex flex-col items-center size-full overflow-y-auto p-10'>
               <div className="bg-[#8474DB]/10 absolute -top-10 -right-20 size-80 rounded-full blur-2xl" />
               <HeadProfile profileClose={profileClose} />
               <div className='w-full pt-5 z-10'>
                  <ProfileContent
                     isTapDiscover={isTapDiscover}
                     handleTapDiscover={handleTapDiscover}
                     emailValue={userData?.email}
                     dateValue={userData?.createdAt.split('T')[0]}
                     username={userData?.username}
                     telpNumber={userData?.telpNumber}
                     profilePicture={userData?.profilePicture?.url}
                  />
                  <ProfileDiscover
                     isFavored={isFavored}
                     isTapDiscover={isTapDiscover}
                     handleSwitchDiscover={handleSwitchDiscover}
                     handleBackToProfile={handleBackToProfile}
                     renderCardContent={renderCardContent}
                     listCardFavored={listCardFavored}
                     listCardRequest={listCardRequest}
                  />
               </div>
            </div>
         </div >
      </>
   )
})

export default ProfileLayout

