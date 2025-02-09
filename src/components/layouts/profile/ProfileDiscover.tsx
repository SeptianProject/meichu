import React from "react";
import ButtonSwitchDiscover from "../../fragments/profile/ButtonSwitchDiscover";
import Button from "../../elements/buttons/Button";
import { ProfileDiscoverSkeleton } from "../../elements/skeletons/ProfileLayoutSkeleton";

interface ProfileDiscoverProps {
     isFavored: boolean
     isTapDiscover: boolean
     handleSwitchDiscover: () => void
     renderCardContent: (listCard: JSX.Element[]) => JSX.Element
     listCardFavored: JSX.Element[]
     listCardRequest: JSX.Element[]
     handleBackToProfile: () => void
     favoredValue: number | undefined
     requestedValue: number | undefined
     isLoading: boolean
}

const ProfileDiscover: React.FC<ProfileDiscoverProps> = React.memo(({
     handleBackToProfile,
     handleSwitchDiscover,
     isFavored,
     isLoading,
     isTapDiscover,
     listCardFavored,
     listCardRequest,
     favoredValue,
     requestedValue,
     renderCardContent,
}) => {
     if (isLoading) return <ProfileDiscoverSkeleton />

     return (
          <div className='w-full overflow-hidden'>
               <div className={`md:block ${isTapDiscover ? 'block' : 'hidden'}`}>
                    <div className='md:pt-4 flex flex-col md:border-none gap-y-2 md:gap-y-7'>
                         <div className='flex items-center justify-between md:justify-center md:gap-x-5'>
                              <ButtonSwitchDiscover
                                   text='Favored Items'
                                   value={favoredValue}
                                   onClick={handleSwitchDiscover}
                                   isFavored={isFavored} />
                              <ButtonSwitchDiscover
                                   text='Products Requested'
                                   value={requestedValue}
                                   onClick={handleSwitchDiscover}
                                   isFavored={!isFavored} />
                         </div>
                         <div className='flex items-center gap-x-10'>
                              {isFavored
                                   ? renderCardContent(listCardFavored)
                                   : renderCardContent(listCardRequest)
                              }
                         </div>
                         <Button
                              isGradient
                              title="Back to Profile"
                              onClick={handleBackToProfile}
                              className="md:hidden mx-auto text-sm"
                         />
                    </div>
               </div>
          </div>
     );
})

export default ProfileDiscover;