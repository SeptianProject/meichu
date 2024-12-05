import React from 'react'
import LoginLayout from './login/LoginLayout'
import RegisterLayout from './regis/RegisLayout'
import ForgotPasswordLayout from './ForgotPassword'

interface AuthModalContainerProps {
     isOpen: boolean
     onClose: () => void
     onProfile: () => void
}

const AuthModalContainer: React.FC<AuthModalContainerProps> = ({
     isOpen,
     onClose,
     onProfile
}) => {
     const [activeModal, setActiveModal] = React.useState<'login' | 'register' | 'forgot-password'>('login')
     const [isAnimating, setIsAnimating] = React.useState(false)
     const [showPassword, setShowPassword] = React.useState(false)
     const [showConfirmPass, setShowConfirmPass] = React.useState(false)

     const handleTogglePassword = () => {
          setShowPassword(!showPassword)
     }

     const handleToggleConfirmPass = () => {
          setShowConfirmPass(!showConfirmPass)
     }

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

     const handleSwitchModal = (modalType: 'login' | 'register' | 'forgot-password') => {
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
                         onProfile={onProfile}
                         onForgotPassword={() => handleSwitchModal('forgot-password')}
                         isModalOpen={isOpen}
                         isModalClose={onClose}
                         onSwitchModal={() => handleSwitchModal('register')}
                         isAnimating={isAnimating}
                         showPassword={showPassword}
                         handleTogglePassword={handleTogglePassword}
                    />
               ) : activeModal === 'register' ? (
                    <RegisterLayout
                         isModalOpen={isOpen}
                         isModalClose={onClose}
                         onSwitchModal={() => handleSwitchModal('login')}
                         isAnimating={isAnimating}
                         showPassword={showPassword}
                         handleTogglePassword={handleTogglePassword}
                         showConfirmPass={showConfirmPass}
                         handleToggleConfirmPass={handleToggleConfirmPass}
                    />
               ) : <ForgotPasswordLayout
                    isAnimating={isAnimating}
                    isModalOpen={isOpen}
                    isModalClose={onClose} />
               }
          </>
     )
}

export default AuthModalContainer