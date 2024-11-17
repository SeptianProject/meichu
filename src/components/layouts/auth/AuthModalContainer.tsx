import React from 'react'
import LoginLayout from './Login'
import RegisterLayout from './Regis'

interface AuthModalContainerProps {
     isOpen: boolean
     onClose: () => void
}

const AuthModalContainer: React.FC<AuthModalContainerProps> = ({
     isOpen,
     onClose
}) => {
     const [activeModal, setActiveModal] = React.useState<'login' | 'register'>('login')
     const [isAnimating, setIsAnimating] = React.useState(false)

     React.useEffect(() => {
          if (isOpen) {
               document.body.style.overflow = 'hidden'
               document.body.style.paddingRight = `${window.innerWidth - document.documentElement.clientWidth}px`
          } else {
               const timer = setTimeout(() => {
                    document.body.style.overflow = ''
                    document.body.style.paddingRight = ''
                    setActiveModal('login')
               }, 200);
               return () => clearTimeout(timer)
          }
     }, [isOpen])

     const handleSwitchModal = (modalType: 'login' | 'register') => {
          setIsAnimating(true)
          setActiveModal(modalType)
          setTimeout(() => {
               setIsAnimating(false)
          }, 200);
     }

     return (
          <>
               {activeModal === 'login' ? (
                    <LoginLayout
                         isModalOpen={isOpen}
                         isModalClose={onClose}
                         onSwitchModal={() => handleSwitchModal('register')}
                         isAnimating={isAnimating}
                    />
               ) : (
                    <RegisterLayout
                         isModalOpen={isOpen}
                         isModalClose={onClose}
                         onSwitchModal={() => handleSwitchModal('login')}
                         isAnimating={isAnimating}
                    />
               )}
          </>
     )
}

export default AuthModalContainer