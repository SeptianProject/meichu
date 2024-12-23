import React from 'react'
import LoginLayout from './login/LoginLayout'
import RegisterLayout from './regis/RegisLayout'
import ForgotPasswordLayout from './ForgotPassword'
import { useAppDispatch, useAppSelector } from '../../../redux/hook'
import { setActiveModal, setIsAnimating } from '../../../redux/slices/authSlice'

interface AuthModalContainerProps {
     isOpen: boolean
     onClose: () => void
     onProfile: () => void
}

const AuthModalContainer: React.FC<AuthModalContainerProps> = React.memo(({
     isOpen,
     onClose,
     onProfile
}) => {
     const dispatch = useAppDispatch()
     const { activeModal, isAnimating } = useAppSelector((state) => state.auth)
     const [showPassword, setShowPassword] = React.useState(false)
     const [showConfirmPass, setShowConfirmPass] = React.useState(false)

     const handleSwitchModal = (modalType: 'login' | 'register' | 'forgot-password') => {
          dispatch(setIsAnimating(true))
          dispatch(setActiveModal(modalType))
          setTimeout(() => {
               dispatch(setIsAnimating(false))
          }, 200);
     }

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
               const resetTimer = setTimeout(() => {
                    document.body.style.overflow = ''
                    document.body.style.paddingRight = ''
                    dispatch(setActiveModal('login'))
               }, 200);
               return () => {
                    clearTimeout(resetTimer)
               }
          }
     }, [isOpen, dispatch])

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
})

export default AuthModalContainer