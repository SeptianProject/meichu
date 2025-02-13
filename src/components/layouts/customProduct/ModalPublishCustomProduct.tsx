import React from "react";
import ModalOverlay from "../../fragments/ModalOverlay";
import { assetItems } from "../../../assets/assets";
import Button from "../../elements/buttons/Button";

interface ModalPublishCustomProductProps {
     isModalOpen: boolean;
     isModalClose: () => void;
}

const ModalPublishCustomProduct: React.FC<ModalPublishCustomProductProps> = React.memo(({
     isModalOpen,
     isModalClose
}) => {
     return (
          <>
               <ModalOverlay isModalClose={isModalClose} isModalOpen={isModalOpen} />
               <div className={`fixed size-[22rem] top-1/2 left-1/2 
               transform -translate-x-1/2 -translate-y-1/2 rounded-2xl border 
               border-[#5E5A5A] bg-light dark:bg-dark transition-all duration-500 ease-in-out
               lg:w-2/5 lg:min-h-[55vh]
                    ${isModalOpen ? 'opacity-100 z-50' : 'opacity-0 z-0 scale-0'}`}>
                    <div className="flex flex-col items-center justify-center relative overflow-hidden pt-5">
                         <div className="bg-yellowBloobs/10 absolute -top-10 -right-28 size-60 rounded-full blur-3xl" />
                         <img src={assetItems.MeichuLogo} alt=""
                              className="w-28 lg:w-40 py-5" />
                         <div className="flex flex-col items-center gap-y-6">
                              <div className="text-center space-y-3">
                                   <h2 className="text-xl font-semibold dark:text-light lg:text-2xl">
                                        Request Received!
                                   </h2>
                                   <p className="text-sm font-light dark:text-light/70 max-w-64 
                              lg:text-base lg:max-w-[25rem]">
                                        Thank you for your request. It will be processed within 1-2 weeks. We'll notify you via email once it's ready. Thank you for your patience!
                                   </p>
                              </div>
                              <Button
                                   isGradient
                                   title="Okay!"
                                   onClick={isModalClose}
                                   className="w-40"
                              />
                         </div>
                    </div>
               </div>
          </>
     );
})

export default ModalPublishCustomProduct;