import React from "react";

export const useAuthModal = (isOpen?: boolean) => {
     const [activeModal, setActiveModal] = React.useState<'login' | 'register' | 'forgot-password'>('login')
     const [isAuthModalOpen, setIsAuthModalOpen] = React.useState(false)
     const [profileActive, setProfileActive] = React.useState(false)
     const [isAnimating, setIsAnimating] = React.useState(false)

     const handleModalOpen = () => {
          setIsAuthModalOpen(true)
     }

     const handleModalClose = () => {
          setIsAuthModalOpen(false)
          if (profileActive) {
               setProfileActive(false)
          }
     }

     const handleModalProfile = () => {
          setIsAuthModalOpen(true)
          if (isAuthModalOpen) {
               setIsAuthModalOpen(false)
          }
     }

     const handleSwitchModal = (modalType: 'login' | 'register' | 'forgot-password') => {
          setIsAnimating(true)
          setActiveModal(modalType)
          setTimeout(() => {
               setIsAnimating(false)
          }, 200);
     }

     React.useEffect(() => {
          if (isOpen) {
               document.body.style.overflow = 'hidden'
               document.body.style.paddingRight = `${window.innerWidth - document.documentElement.clientWidth}px`
          } else {
               const resetTimer = setTimeout(() => {
                    document.body.style.overflow = ''
                    document.body.style.paddingRight = ''
                    setActiveModal('login')
               }, 200);
               return () => {
                    clearTimeout(resetTimer)
               }
          }
     }, [isOpen])

     return {
          activeModal,
          isAnimating,
          profileActive,
          isAuthModalOpen,
          setActiveModal,
          handleModalOpen,
          handleModalClose,
          handleModalProfile,
          handleSwitchModal
     }
}