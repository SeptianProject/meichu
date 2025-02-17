export interface BaseModalProps {
     isOpen: boolean
     onClose: VoidFunction
     isAnimating?: boolean
     className?: string
     showCloseButton?: boolean
     isAuthModal?: boolean
     children?: React.ReactNode
}

export interface ModalInformationProps extends Omit<BaseModalProps, 'children'> {
     title: string
     message: string
     buttonText: string
     onClick?: VoidFunction
}