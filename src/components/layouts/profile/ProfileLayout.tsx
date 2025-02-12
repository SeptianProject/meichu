import React from 'react'
import ModalOverlay from '../../fragments/ModalOverlay'
import 'swiper/swiper-bundle.css'
import HeadProfile from '../../fragments/profile/HeadProfile'
import ProfileContent from './ProfileContent'
import ProfileDiscover from './ProfileDiscover'
import { useProfileData } from '../../../hooks/useProfileData'
import useProfileUIState from '../../../hooks/useProfileUIState'

interface ProfileLayoutProps {
   isOpen: boolean
   onClose: VoidFunction
}

const ProfileLayout: React.FC<ProfileLayoutProps> = React.memo(({
   isOpen,
   onClose
}) => {
   const {
      userData,
      userDataLoading,
      userDataDetailLoading,
      isFavored,
      isTapDiscover,
      listCardFavored,
      listCardRequest,
      renderCardContent,
      handleTapDiscover,
      handleSwitchDiscover,
      handleBackToProfile,
   } = useProfileData(isOpen)

   const { modalStyle, contentStyle } = useProfileUIState(isOpen)

   return (
      <>
         <ModalOverlay isModalClose={onClose} isModalOpen={isOpen} />
         <div className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
               w-4/5 rounded-xl bg-light dark:bg-dark border border-graySurface1 overflow-y-hidden
               transition-all duration-500 ease-in-out lg:w-3/4 lg:min-h-[85vh] lg:rounded-3xl xl:w-3/5
               ${isOpen || !onClose ? 'z-50 opacity-100' : 'z-0 scale-0 opacity-0'}`}
            style={modalStyle}>
            <div style={contentStyle}
               className='relative flex flex-col items-center size-full overflow-y-auto px-6 py-10 md:p-10 overflow-hidden'>
               <div className="bg-yellowBloobs/10 absolute -top-10 -right-20 size-80 rounded-full blur-3xl" />
               <HeadProfile profileClose={onClose} />
               <div className='w-full pt-5 z-10'>
                  <ProfileContent
                     userDataLoading={userDataLoading}
                     isTapDiscover={isTapDiscover}
                     handleTapDiscover={handleTapDiscover}
                     emailValue={userData?.email}
                     dateValue={userData?.createdAt?.split('T')[0]}
                     username={userData?.username}
                     telephoneNumber={userData?.telephoneNumber}
                     profilePicture={userData?.profilePicture?.url}
                  />
                  <ProfileDiscover
                     isLoading={userDataDetailLoading}
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

export default React.memo(ProfileLayout)

