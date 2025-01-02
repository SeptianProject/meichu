import React from "react";
import ModalOverlay from "../../fragments/ModalOverlay";
import { BiX } from "react-icons/bi";

interface AuthLayoutProps {
     children: React.ReactNode;
     isModalOpen: boolean;
     isAnimating: boolean;
     isModalClose: () => void;
     className?: string;
}

const AuthLayout: React.FC<AuthLayoutProps> = React.memo(({
     children,
     isModalOpen,
     isModalClose,
     isAnimating,
     className,
}) => {
     return (
          <>
               <ModalOverlay isModalClose={isModalClose} isModalOpen={isModalOpen} />
               <section className={`w-4/5 fixed top-1/2 left-1/2 transform -translate-x-1/2 
               -translate-y-1/2 rounded-xl bg-light dark:bg-[#1E1E1E] border border-[#5E5A5A]
               transition-all duration-500 ease-in-out lg:w-1/2 lg:rounded-3xl ${className}
               ${isModalOpen && !isAnimating ? 'z-50 opacity-100 scale-100' : 'z-0 opacity-0 scale-0'}`}>
                    <div className="relative flex items-center justify-center size-full overflow-hidden pb-5">
                         <div className="bg-[#8474DB]/10 absolute -top-10 -z-30 -right-28 size-80 rounded-full blur-2xl" />
                         <BiX onClick={isModalClose} className="text-dark dark:text-light size-10 top-4 left-5 absolute cursor-pointer" />
                         <div className="flex flex-col items-center gap-y-4">
                              {children}
                         </div>
                    </div>
               </section>
          </>
     );
})

export default AuthLayout;