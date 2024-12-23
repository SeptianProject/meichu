import React from "react";
import ButtonSwitchDiscover from "../../fragments/profile/ButtonSwitchDiscover";
import ButtonActionInProfile from "../../fragments/profile/ButtonActionInProfile";

interface ProfileDiscoverProps {
     isFavored: boolean
     isTapDiscover: boolean
     handleSwitchDiscover: () => void
     renderCardContent: (listCard: JSX.Element[]) => JSX.Element
     listCardFavored: JSX.Element[]
     listCardRequest: JSX.Element[]
     handleBackToProfile: () => void
}

const ProfileDiscover: React.FC<ProfileDiscoverProps> = React.memo(({
     handleBackToProfile,
     handleSwitchDiscover,
     isFavored,
     isTapDiscover,
     listCardFavored,
     listCardRequest,
     renderCardContent,
}) => {
     return (
          <div className='w-full'>
               <div className={`lg:block ${isTapDiscover ? 'block' : 'hidden'}`}>
                    <div className='pt-5 flex flex-col gap-y-5 lg:border-none'>
                         <div className='flex items-center justify-between lg:justify-center lg:gap-x-5'>
                              <ButtonSwitchDiscover
                                   text='Favored Items'
                                   value={6}
                                   onClick={handleSwitchDiscover}
                                   onFavored={isFavored} />
                              <ButtonSwitchDiscover
                                   text='Products Requests'
                                   value={6}
                                   onClick={handleSwitchDiscover}
                                   onFavored={!isFavored} />
                         </div>
                         <div className='flex items-center gap-x-3'>
                              {isFavored
                                   ? renderCardContent(listCardFavored)
                                   : renderCardContent(listCardRequest)
                              }
                         </div>
                         <ButtonActionInProfile
                              text='Back to Profile'
                              onClick={handleBackToProfile}
                              className='lg:hidden mx-auto mt-5' />
                    </div>
               </div>
          </div>
     );
})

export default ProfileDiscover;