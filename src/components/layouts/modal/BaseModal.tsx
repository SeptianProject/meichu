import React from 'react'
import ModalOverlay from '../../fragments/ModalOverlay'
import { BiX } from 'react-icons/bi'
import { BaseModalProps } from '../../../types/modal'

const BaseModal: React.FC<BaseModalProps> = ({
     children,
     isOpen,
     onClose,
     isAnimating = false,
     className = '',
     showCloseButton = true,
}) => {
     const baseClasses = `
     fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
     rounded-2xl bg-light dark:bg-dark border border-[#5E5A5A]
     transition-all duration-500 ease-in-out
     `

     const visibilityClasses = isOpen && !isAnimating
          ? 'z-50 opacity-100 scale-100'
          : 'z-0 opacity-0 scale-0'

     return (
          <>
               <ModalOverlay isModalClose={onClose} isModalOpen={isOpen} />
               <section className={`${baseClasses} ${visibilityClasses} ${className}`}>
                    <div className='relative flex items-center justify-center size-full overflow-hidden pb-5'>
                         <div className="bg-yellowBloobs/10 absolute -top-10 -z-30 -right-28 size-80 rounded-full blur-3xl" />
                         {showCloseButton && (
                              <BiX onClick={onClose}
                                   className="text-dark dark:text-light size-10 top-4 left-5 absolute cursor-pointer"
                              />
                         )}
                         <div className="flex flex-col items-center gap-y-4">
                              {children}
                         </div>
                    </div>
               </section>
          </>
     )
}

export default React.memo(BaseModal)