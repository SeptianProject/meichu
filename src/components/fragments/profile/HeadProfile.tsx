import React from "react";
import { BiX } from "react-icons/bi";

interface HeadProfileProps {
     profileClose: () => void
}

const HeadProfile: React.FC<HeadProfileProps> = React.memo(({ profileClose }) => {
     return (
          <div className='flex items-center justify-between size-full border-b-2 pb-1 dark:border-light/50 z-10'>
               <h2 className='text-xl font-semibold dark:text-light '>Profile</h2>
               <BiX onClick={profileClose} className='dark:text-light cursor-pointer' size={25} />
          </div>
     );
})

export default HeadProfile;