import React from 'react'

interface ModalAnimationProps {
     isOpen: boolean
     onClose: VoidFunction
}

export const useModalAnimation = ({ isOpen, onClose }: ModalAnimationProps) => {
     const getModalClassNames = React.useCallback((baseClass: string) => {
          return `${baseClass} ${isOpen ? 'opacity-100 z-50' : 'opacity-0 z-0 scale-0'}`
     }, [isOpen])

     React.useEffect(() => {
          return () => {
               if (!isOpen) {
                    onClose()
               }
          }
     }, [isOpen, onClose])

     return {
          getModalClassNames
     }
}