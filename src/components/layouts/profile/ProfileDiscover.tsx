import React from "react";
import ButtonSwitchDiscover from "../../fragments/profile/ButtonSwitchDiscover";
import { ProfileDiscoverSkeleton } from "../../elements/skeletons/ProfilePageSkeleton";

interface ProfileDiscoverProps {
     isFavored: boolean
     handleSwitchDiscover: (selected: boolean) => void
     renderCardContent: (listCard: JSX.Element[]) => JSX.Element
     listCardFavored: JSX.Element[]
     listCardRequest: JSX.Element[]
     favoredValue: number | undefined
     requestedValue: number | undefined
     isLoading: boolean
}

const ProfileDiscover: React.FC<ProfileDiscoverProps> = React.memo(({
     isFavored,
     handleSwitchDiscover,
     renderCardContent,
     listCardFavored,
     listCardRequest,
     favoredValue,
     requestedValue,
     isLoading,
}) => {
     if (isLoading) return <ProfileDiscoverSkeleton />

     return (
          <div className='w-full overflow-hidden'>
               <div className='pt-4 flex flex-col gap-y-2 md:gap-y-7'>
                    <div className='flex items-center justify-center gap-x-10'>
                         <ButtonSwitchDiscover
                              text='Favored Items'
                              value={favoredValue}
                              onClick={() => handleSwitchDiscover(true)}
                              isFavored={isFavored} />
                         <ButtonSwitchDiscover
                              text='Products Requested'
                              value={requestedValue}
                              onClick={() => handleSwitchDiscover(false)}
                              isFavored={!isFavored} />
                    </div>
                    <div className='flex items-center gap-x-10'>
                         {isFavored
                              ? renderCardContent(listCardFavored)
                              : renderCardContent(listCardRequest)
                         }
                    </div>
               </div>
          </div>
     );
})

export default ProfileDiscover;