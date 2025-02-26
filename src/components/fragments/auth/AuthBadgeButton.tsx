import React from "react";
import { authIcons } from "../../../assets/assets";
import { apiUrl } from "../../../services";
import { useAppDispatch } from "../../../redux/hook";
import { setIsAuthModalOpen } from "../../../redux/slices/authSlice";

const AuthBadgeButton = () => {
     const dispatch = useAppDispatch()

     const connectGoogleAuth = () => {
          dispatch(setIsAuthModalOpen(false))
          window.location.href = `${apiUrl}/connect/google`;
     }

     return (
          <>
               <p className="dark:text-light/40 text-xs text-center">
                    - OR Continue with -
               </p>
               <div className="flex items-center justify-center gap-x-3">
                    {authIcons.map((icon, index) => (
                         <BadgeSosmedItem
                              key={index}
                              icon={icon.icon}
                              onClick={icon.type?.includes('google') ? connectGoogleAuth : undefined}
                         />
                    ))}
               </div>
          </>
     );
}

export default AuthBadgeButton;

interface BadgeSosmedItemProps {
     icon: string
     onClick?: VoidFunction
}

const BadgeSosmedItem: React.FC<BadgeSosmedItemProps> = ({
     icon, onClick
}) => {
     return (
          <div className='flex justify-center rounded-full items-center size-11 
          border border-dark dark:border-transparent dark:bg-light transition-all duration-300
          hover:-translate-y-1 hover:scale-110'>
               <button type="button" onClick={onClick}>
                    <img
                         className='size-6'
                         src={icon}
                         alt="Auth icon"
                         loading='lazy'
                    />
               </button>
          </div>
     )
}