import React from 'react'
import LoginLayout from './login/LoginLayout'
import RegisterLayout from './regis/RegisLayout'
import ForgotPassword from './ForgotPassword'
import { useAppDispatch, useAppSelector } from '../../../redux/hook'
import { ModalType, setActiveModal, setIsAnimating, setResetCode } from '../../../redux/slices/authSlice'
import { useSearchParams } from 'react-router-dom'
import ResetPassword from './ResetPassword'

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
     const { activeModal, isAnimating, resetCode } = useAppSelector((state) => state.auth)
     const [showPassword, setShowPassword] = React.useState(false)
     const [showConfirmPass, setShowConfirmPass] = React.useState(false)
     const [searchParams] = useSearchParams()
     const urlCode = searchParams.get('code')

     const handleTogglePassword = () => setShowPassword(!showPassword)
     const handleToggleConfirmPass = () => setShowConfirmPass(!showConfirmPass)

     const handleSwitchModal = (modalType: ModalType) => {
          dispatch(setIsAnimating(true))
          dispatch(setActiveModal(modalType))
          setTimeout(() => {
               dispatch(setIsAnimating(false))
          }, 200);
     }

     React.useEffect(() => {
          if (urlCode) {
               dispatch(setResetCode(urlCode))
               dispatch(setActiveModal('reset-password'))
          }

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
     }, [isOpen, dispatch, urlCode])

     return (
          <>
               {
                    activeModal === 'login' ? (
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
                    ) : activeModal === 'reset-password' && resetCode ? (
                         <ResetPassword
                              isAnimating={isAnimating}
                              isModalOpen={isOpen}
                              isModalClose={() => {
                                   dispatch(setResetCode(null))
                                   handleSwitchModal('login')
                              }}
                         />
                    ) : (<ForgotPassword
                         isAnimating={isAnimating}
                         isModalOpen={isOpen}
                         isModalClose={onClose}
                    />
                    )
               }
          </>
     )
})

export default AuthModalContainer