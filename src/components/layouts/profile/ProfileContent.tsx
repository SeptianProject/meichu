import React from "react";
import { abstrakImages, assetItems } from "../../../assets/AnotherAssets";
import TextTitleValue from "../../fragments/profile/TextTitleValue";
import ButtonActionInProfile from "../../fragments/profile/ButtonActionInProfile";

interface ProfileContentProps {
     isTapDiscover: boolean
     handleTapDiscover: () => void
}

const ProfileContent: React.FC<ProfileContentProps> = ({
     isTapDiscover,
     handleTapDiscover
}) => {
     return (
          <div className={`w-full space-y-5 lg:flex flex-col items-start 
               border-light/70 lg:gap-x-5 lg:flex-row lg:items-start lg:border-b 
               lg:pt-0 lg:pb-5 ${isTapDiscover ? 'hidden' : 'block'}`}>
               <div className='size-40 lg:w-3/5 lg:h-[20rem] relative'>
                    <img
                         src={abstrakImages[1]}
                         alt="profile-picture"
                         className='rounded-xl object-cover object-center size-full' />
                    <button
                         type="button"
                         className='bg-light size-8 p-1 rounded-md absolute bottom-2 right-2
                         group transition-all duration-300'>
                         <img src={assetItems.EditIcon}
                              alt="edit-icon"
                              className='size-fit group-hover:scale-90' />
                    </button>
               </div>
               <div className='size-full flex flex-col gap-y-5'>
                    <div className='space-y-3 lg:space-y-5'>
                         <TextTitleValue title='Your Email' value='septianz@gmail.com' />
                         <TextTitleValue title='Date Joined' value='21-January-2020' />
                         <TextTitleValue title='Phone Number' value='083848789028' />
                    </div>
                    <div className='w-full flex items-center gap-x-5'>
                         <ButtonActionInProfile text='Edit Profile' onClick={() => { }} />
                         <ButtonActionInProfile text='Log Out' onClick={() => { }} />
                    </div>
                    <ButtonActionInProfile
                         text='Discover More About Me!'
                         onClick={handleTapDiscover}
                         className='lg:hidden w-full' />
               </div>
          </div>
     );
}

export default ProfileContent;