import Footer from "./components/layouts/Footer"
import Navbar from "./components/layouts/Navbar"
import AppRouter from "./routes/AppRouter"
import FloatingButton from "./components/elements/buttons/FloatingBtn"
import AuthModalContainer from "./components/layouts/auth/AuthModalContainer"
import ProfileLayout from "./components/layouts/profile/ProfileLayout"
import { useAppDispatch, useAppSelector } from "./redux/hook"
import { setIsAuthModalOpen, setProfileActive } from "./redux/slices/authSlice"
import { useLocation } from "react-router-dom"
import React from "react"

const App = () => {
     const [isMounted, setIsMounted] = React.useState(false)
     const dispatch = useAppDispatch()
     const { pathname } = useLocation()
     const { isAuthModalOpen, profileActive } = useAppSelector((state) => state.auth)

     const handleCloseModal = () => {
          dispatch(setIsAuthModalOpen(false))
          if (profileActive) {
               dispatch(setProfileActive(false))
          }
     }

     const handleProfileModal = () => {
          dispatch(setProfileActive(true))
          if (isAuthModalOpen) {
               dispatch(setIsAuthModalOpen(false))
          }
     }

     React.useEffect(() => {
          setIsMounted(true)
          if (pathname === "/") {
               window.scrollTo(0, 0)
          }
          window.scrollTo(0, 0)
     }, [pathname])

     return (
          <div className={`bg-light selection:bg-dark selection:text-light
          dark:bg-dark dark:selection:bg-light transition-all duration-500
          dark:selection:text-dark relative min-h-screen overflow-hidden
          ${isMounted ? "opacity-100" : "opacity-0"}`}>
               <Navbar />
               <AuthModalContainer
                    isOpen={isAuthModalOpen}
                    onClose={handleCloseModal}
                    onProfile={handleProfileModal} />
               <ProfileLayout
                    profileOpen={profileActive}
                    profileClose={handleCloseModal} />
               <AppRouter />
               <FloatingButton />
               <Footer />
          </div>
     )
}

export default App

