import React from "react";
import ModalOverlay from "../../fragments/ModalOverlay";
import { assetsImage } from "../../../assets/assets";

interface ModalPublishCustomProductProps {
     isModalOpen: boolean;
     isModalClose: () => void;
}

const ModalPublishCustomProduct: React.FC<ModalPublishCustomProductProps> = ({
     isModalOpen,
     isModalClose
}) => {
     return (
          <>
               <ModalOverlay isModalClose={isModalClose} isModalOpen={isModalOpen} />
               <div className={`fixed size-[22rem] top-1/2 left-1/2 
               transform -translate-x-1/2 -translate-y-1/2 rounded-2xl border 
               border-[#5E5A5A] bg-light dark:bg-[#1E1E1E] transition-all duration-500 ease-in-out
               lg:w-2/5 lg:min-h-[50vh]
                    ${isModalOpen ? 'opacity-100 z-50' : 'opacity-0 z-0 scale-0'}`}>
                    <div className="flex flex-col items-center justify-center relative overflow-hidden">
                         <div className="bg-[#8474DB]/10 absolute -top-10 -right-28
                         size-60 rounded-full blur-2xl"/>
                         <img src={assetsImage.MeichuLogo} alt=""
                              className="size-28" />
                         <div className="text-center flex flex-col items-center space-y-5">
                              <h2 className="text-xl font-semibold dark:text-light lg:text-2xl">
                                   Request Received!
                              </h2>
                              <p className="text-sm font-light dark:text-light/70 max-w-64 lg:max-w-[22rem]">
                                   Thank you for your request. It will be processed within 1-2 weeks. We'll notify you via email once it's ready. Thank you for your patience!
                              </p>
                              <button onClick={isModalClose}
                                   className="bg-bluePrimary text-light w-32 
                                   py-2 mx-auto rounded-full">
                                   Okay!
                              </button>
                         </div>
                    </div>
               </div>
          </>
     );
}

export default ModalPublishCustomProduct;