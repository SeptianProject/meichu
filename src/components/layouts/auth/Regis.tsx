import React from "react";
import AuthOverlay from "../../fragments/auth/AuthOverlay";
import AuthHeading from "../../fragments/auth/AuthHeading";
import { BiX } from "react-icons/bi";
import AuthButton from "../../fragments/auth/AuthButton";
import AuthBadgeButton from "../../fragments/auth/AuthBadgeButton";
import AuthButtonSwitch from "../../fragments/auth/AuthButtonSwitch";

interface RegisterLayoutProps {
     isModalOpen: boolean;
     isModalClose: () => void;
     onSwitchModal: () => void;
     isAnimating: boolean;
}

const RegisterLayout: React.FC<RegisterLayoutProps> = ({
     isModalClose,
     isModalOpen,
     isAnimating,
     onSwitchModal }) => {
     return (
          <>
               <AuthOverlay isModalClose={isModalClose} isModalOpen={isModalOpen} />
               <div className={`w-4/5 min-h-[65vh] fixed top-1/2 left-1/2 transform 
               -translate-x-1/2 -translate-y-1/2 rounded-xl bg-[#1E1E1E] border-2 
               border-[#5E5A5A] transition-all duration-500 ease-in-out
               ${isModalOpen && !isAnimating ? 'z-50 opacity-100 scale-100' : 'z-0 scale-0 opacity-0'}`}>
                    <div className="relative flex items-center justify-center size-full">
                         <BiX onClick={isModalClose} className="text-light size-10 top-4 left-5 absolute cursor-pointer" />
                         <div className="flex flex-col items-center gap-y-4">
                              <AuthHeading title="Join Our Community!" />
                              <form action="" className="space-y-8">
                                   {/* ... form inputs ... */}
                                   <AuthButton text="Register" onClick={() => { }} />
                                   <AuthBadgeButton />
                              </form>
                              <AuthButtonSwitch
                                   text="Already Have An Account?"
                                   textBtn="Login"
                                   onSwitchModal={onSwitchModal} />
                         </div>
                    </div>
               </div>
          </>
     );
}

export default RegisterLayout;