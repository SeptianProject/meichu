import { BiX } from "react-icons/bi"
import AuthButtonSwitch from "../../../fragments/auth/AuthButtonSwitch.tsx";
import AuthHeading from "../../../fragments/auth/AuthHeading.tsx";
import ModalOverlay from "../../../fragments/ModalOverlay.tsx";
import LoginForm from "./LoginForm.tsx";

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
                         <LoginForm
                              onProfile={onProfile}
                              showPassword={showPassword}
                              handleTogglePassword={handleTogglePassword}
                         />
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