import { BiX } from "react-icons/bi"
import { FaUser } from "react-icons/fa";
import { IoIosLock } from "react-icons/io";
import AuthInput from "../../fragments/auth/AuthInput";
import AuthButton from "../../fragments/auth/AuthButton";
import AuthButtonSwitch from "../../fragments/auth/AuthButtonSwitch.tsx";
import AuthBadgeButton from "../../fragments/auth/AuthBadgeButton";
import AuthHeading from "../../fragments/auth/AuthHeading";
import ModalOverlay from "../../fragments/ModalOverlay.tsx";

interface LoginLayoutProps {
     isModalOpen: boolean;
     isModalClose: () => void;
     onSwitchModal: () => void;
     isAnimating: boolean;
     showPassword: boolean;
     handleTogglePassword: () => void;
     onProfile: () => void;
}

const LoginLayout = ({
     isModalOpen,
     isModalClose,
     isAnimating,
     onSwitchModal,
     showPassword,
     handleTogglePassword,
     onProfile
}: LoginLayoutProps) => {

     return (
          <>
               <ModalOverlay isModalClose={isModalClose} isModalOpen={isModalOpen} />
               <div className={`w-4/5 min-h-[60vh] fixed top-1/2 left-1/2 transform 
               -translate-x-1/2 -translate-y-1/2 rounded-xl bg-light dark:bg-[#1E1E1E] border
               border-[#5E5A5A] transition-all duration-500 ease-in-out
               lg:w-1/2 lg:min-h-[85vh] lg:rounded-3xl
               ${isModalOpen && !isAnimating || !onProfile ? 'z-50 opacity-100' : 'z-0 scale-0 opacity-0'}`}>
                    <div className="relative flex flex-col items-center gap-y-4 overflow-hidden size-full">
                         {/* Overlay */}
                         <div className="bg-[#8474DB]/10 absolute -top-10 -right-20 size-80 rounded-full blur-2xl" />
                         <BiX onClick={isModalClose} className="text-dark dark:text-light size-10 top-4 left-5 absolute cursor-pointer" />
                         <AuthHeading title="Reconnect and Explore!" />
                         <form action="" className="space-y-7">
                              <div className="flex flex-col items-end gap-y-2">
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
                                   <button onClick={() => { }}
                                        className="text-[#A78CE4] text-xs lg:text-sm">
                                        Forgot Password?
                                   </button>
                              </div>
                              <AuthButton text="Login" onClick={onProfile} />
                              <AuthBadgeButton />
                         </form>
                         <AuthButtonSwitch
                              text="Create An Account"
                              textBtn="Sign Up"
                              onSwitchModal={onSwitchModal} />
                    </div>
               </div>
          </>
     )
}

export default LoginLayout