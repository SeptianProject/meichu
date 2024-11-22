import ModalOverlay from "../../fragments/ModalOverlay";
import AuthHeading from "../../fragments/auth/AuthHeading";
import { BiX } from "react-icons/bi";
import AuthButton from "../../fragments/auth/AuthButton";
import AuthBadgeButton from "../../fragments/auth/AuthBadgeButton";
import AuthButtonSwitch from "../../fragments/auth/AuthButtonSwitch";
import AuthInput from "../../fragments/auth/AuthInput";
import { FaUser } from "react-icons/fa";
import { IoIosLock } from "react-icons/io";

interface RegisterLayoutProps {
     isModalOpen: boolean;
     isModalClose: () => void;
     onSwitchModal: () => void;
     isAnimating: boolean;
     showPassword: boolean;
     handleTogglePassword: () => void;
     showConfirmPass: boolean;
     handleToggleConfirmPass: () => void;
}

const RegisterLayout: React.FC<RegisterLayoutProps> = ({
     isModalClose,
     isModalOpen,
     isAnimating,
     onSwitchModal,
     showPassword,
     handleTogglePassword,
     showConfirmPass,
     handleToggleConfirmPass }) => {
     return (
          <>
               <ModalOverlay isModalClose={isModalClose} isModalOpen={isModalOpen} />
               <div className={`w-4/5 min-h-[65vh] fixed top-1/2 left-1/2 transform 
               -translate-x-1/2 -translate-y-1/2 rounded-xl bg-light dark:bg-[#1E1E1E] border 
               border-[#5E5A5A] transition-all duration-500 ease-in-out
               lg:min-h-[85vh] lg:w-1/2 lg:rounded-3xl
               ${isModalOpen && !isAnimating ? 'z-50 opacity-100 scale-100' : 'z-0 scale-0 opacity-0'}`}>
                    <div className="relative flex items-center justify-center size-full overflow-hidden pb-10">
                         <div className="bg-[#8474DB]/10 absolute -top-10 -right-28
                         size-80 rounded-full blur-2xl" />
                         <BiX onClick={isModalClose} className="text-dark dark:text-light size-10 top-4 left-5 absolute cursor-pointer" />
                         <div className="flex flex-col items-center gap-y-4">
                              <AuthHeading title="Step Into Your Space!" />
                              <form action="" className="space-y-8">
                                   <div className="flex flex-col gap-y-2">
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
                                        <AuthInput
                                             icon={IoIosLock}
                                             name="confirmPassword"
                                             type="password"
                                             placeholder="Confirm Password"
                                             showPassword={showConfirmPass}
                                             onTogglePassword={handleToggleConfirmPass} />
                                        <button onClick={() => { }}
                                             className="dark:text-[#676767] text-xs max-w-56 text-start">
                                             By clicking the
                                             <span className="text-[#6A45BE] px-1">
                                                  Register
                                             </span>
                                             button, you agree to the public offer
                                        </button>
                                   </div>
                                   <div className="space-y-5">
                                        <AuthButton text="Register" onClick={() => { }} />
                                        <AuthBadgeButton />
                                   </div>
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