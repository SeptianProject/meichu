import { BiX } from "react-icons/bi"
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { IoIosLock } from "react-icons/io";
import AuthInput from "../../fragments/auth/AuthInput";
import { useState } from "react";
import AuthButton from "../../fragments/auth/AuthButton";
import AuthButtonSwitch from "../../fragments/auth/AuthButtonSwitch.tsx";
import AuthBadgeButton from "../../fragments/auth/AuthBadgeButton";
import AuthHeading from "../../fragments/auth/AuthHeading";
import AuthOverlay from "../../fragments/auth/AuthOverlay";

interface LoginLayoutProps {
     isModalOpen: boolean;
     isModalClose: () => void;
     onSwitchModal: () => void;
     isAnimating: boolean;
}

const LoginLayout = ({
     isModalOpen,
     isModalClose,
     isAnimating,
     onSwitchModal }: LoginLayoutProps) => {
     const [showPassword, setShowPassword] = useState(false)

     const handleTogglePassword = () => {
          setShowPassword(!showPassword)
     }

     return (
          <>
               <AuthOverlay isModalClose={isModalClose} isModalOpen={isModalOpen} />
               <div className={`w-4/5 min-h-[65vh] fixed top-1/2 left-1/2 transform 
               -translate-x-1/2 -translate-y-1/2 rounded-xl bg-[#1E1E1E] border-2 
               border-[#5E5A5A] transition-all duration-500 ease-in-out
               ${isModalOpen && !isAnimating ? 'z-50 opacity-100' : 'z-0 scale-0 opacity-0'}`}>
                    <div className="relative flex items-center justify-center size-full">
                         <BiX onClick={isModalClose} className="text-light size-10 top-4 left-5 absolute cursor-pointer" />
                         <div className="flex flex-col items-center gap-y-2">
                              <AuthHeading title="Reconnect and Explore!" />
                              <form action="" className="space-y-8">
                                   <div className="flex flex-col items-end gap-y-3">
                                        <AuthInput
                                             icon={FaUser}
                                             name="email"
                                             type="email"
                                             placeholder="Your Email" />
                                        <AuthInput
                                             icon={IoIosLock}
                                             name="password"
                                             type="password"
                                             placeholder="Password"
                                             showPassword={showPassword}
                                             onTogglePassword={handleTogglePassword} />
                                        <Link to={''}
                                             className="text-[#A78CE4] text-xs">
                                             Forgot Password?
                                        </Link>
                                   </div>
                                   <AuthButton text="Login" onClick={() => { }} />
                                   <AuthBadgeButton />
                              </form>
                              <AuthButtonSwitch
                                   text="Create An Account"
                                   textBtn="Sign Up"
                                   onSwitchModal={onSwitchModal} />
                         </div>
                    </div>
               </div>
          </>
     )
}

export default LoginLayout