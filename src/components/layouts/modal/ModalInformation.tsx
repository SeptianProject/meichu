import React from 'react'
import BaseModal from './BaseModal'
import { ModalInformationProps } from '../../../types/modal'
import { assetItems } from '../../../assets/assets'
import Button from '../../elements/buttons/Button'

const ModalInformation: React.FC<ModalInformationProps> = ({
     title,
     message,
     buttonText = 'Okay!',
     ...modalProps
}) => {
     return (
          <BaseModal {...modalProps}>
               <div className='flex flex-col items-center gap-y-6'>
                    <img src={assetItems.MeichuLogo}
                         alt="Meichu Logo"
                         loading='lazy'
                         className="w-28 lg:w-40 py-5" />
                    <div className="text-center space-y-3">
                         <h2 className="text-xl font-semibold dark:text-light lg:text-2xl">
                              {title}
                              {/* Request Received! */}
                         </h2>
                         <p className="text-sm font-light dark:text-light/70 max-w-64 
                              lg:text-base lg:max-w-[25rem]">
                              {message}
                              {/* Thank you for your request. It will be processed within 1-2 weeks. We'll notify you via email once it's ready. Thank you for your patience! */}
                         </p>
                    </div>
                    <Button
                         isGold
                         title={buttonText}
                         onClick={modalProps.onClose}
                         className="w-40"
                    />
               </div>
          </BaseModal>
     )
}

export default ModalInformation