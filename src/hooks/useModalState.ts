import { useCallback } from 'react'
import { useAppDispatch } from '../redux/hook'
import { ModalType, setActiveModal, setIsAnimating, setIsAuthModalOpen, setResetCode } from '../redux/slices/authSlice'

export const useModalState = () => {
     const dispatch = useAppDispatch()

     const handleScrollLock = useCallback((lock: boolean) => {
          if (lock) {
               const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth
               document.body.style.overflow = 'hidden'
               document.body.style.paddingRight = `${scrollbarWidth}px`
          } else {
               const timer = setTimeout(() => {
                    document.body.style.overflow = ''
                    document.body.style.paddingRight = ''
               }, 200);
               return () => clearTimeout(timer)
          }
     }, [])

     const closeModal = useCallback(() => {
          dispatch(setIsAuthModalOpen(false))
          handleScrollLock(false)
     }, [dispatch, handleScrollLock])

     const openAuthModal = useCallback(() => {
          dispatch(setIsAuthModalOpen(true))
          handleScrollLock(true)
     }, [dispatch, handleScrollLock])

     const handleSwitchAuthModal = useCallback((modalType: ModalType) => {
          dispatch(setIsAnimating(true))
          dispatch(setActiveModal(modalType))
          setTimeout(() => {
               dispatch(setIsAnimating(false))
          }, 200);
     }, [dispatch])

     const handleResetCode = useCallback((code: string | null) => {
          dispatch(setResetCode(code))
     }, [dispatch])

     return {
          closeModal,
          openAuthModal,
          handleSwitchAuthModal,
          handleResetCode
     }
}