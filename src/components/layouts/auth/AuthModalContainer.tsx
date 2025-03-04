import React from 'react'
import LoginLayout from './login/LoginLayout'
import RegisterLayout from './regis/RegisLayout'
import ForgotPassword from './ForgotPassword'
import { useAppDispatch, useAppSelector } from '../../../redux/hook'
import { setActiveModal } from '../../../redux/slices/authSlice'
import { useSearchParams } from 'react-router-dom'
import ResetPassword from './ResetPassword'
import { useModalState } from '../../../hooks/useModalState'

interface AuthModalContainerProps {
     isOpen: boolean
     onClose: VoidFunction
}

const AuthModalContainer: React.FC<AuthModalContainerProps> = React.memo(({
     isOpen,
     onClose,
}) => {
     const dispatch = useAppDispatch()
     const { activeModal, isAnimating, resetCode } = useAppSelector((state) => state.auth)
     const [showPassword, setShowPassword] = React.useState(false)
     const [showConfirmPass, setShowConfirmPass] = React.useState(false)
     const [searchParams] = useSearchParams()
     const urlCode = searchParams.get('code')
     const { handleSwitchAuthModal, handleResetCode } = useModalState()

     const handleTogglePassword = () => setShowPassword(!showPassword)
     const handleToggleConfirmPass = () => setShowConfirmPass(!showConfirmPass)

     React.useEffect(() => {
          if (urlCode) {
               handleResetCode(urlCode)
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
     }, [isOpen, dispatch, handleResetCode, urlCode])

     return (
          <>
               {
                    activeModal === 'login' ? (
                         <LoginLayout
                              onForgotPassword={() => handleSwitchAuthModal('forgot-password')}
                              isModalOpen={isOpen}
                              isModalClose={onClose}
                              onSwitchModal={() => handleSwitchAuthModal('register')}
                              isAnimating={isAnimating}
                              showPassword={showPassword}
                              handleTogglePassword={handleTogglePassword}
                         />
                    ) : activeModal === 'register' ? (
                         <RegisterLayout
                              isModalOpen={isOpen}
                              isModalClose={onClose}
                              onSwitchModal={() => handleSwitchAuthModal('login')}
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
                                   handleResetCode(null)
                                   handleSwitchAuthModal('login')
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