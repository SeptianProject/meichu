import React from 'react'
import LoginLayout from './login/LoginLayout'
import RegisterLayout from './regis/RegisLayout'
import ForgotPasswordLayout from './ForgotPassword'
import { useAuthModal } from '../../../hooks/useAuthModal'

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
     const [showPassword, setShowPassword] = React.useState(false)
     const [showConfirmPass, setShowConfirmPass] = React.useState(false)
     const { activeModal, isAnimating, handleSwitchModal } = useAuthModal(isOpen)

     const handleTogglePassword = () => {
          setShowPassword(!showPassword)
     }

     const handleToggleConfirmPass = () => {
          setShowConfirmPass(!showConfirmPass)
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