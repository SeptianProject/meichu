import React from "react"
import Footer from "./components/layouts/Footer"
import Navbar from "./components/layouts/Navbar"
import AppRouter from "./routes/AppRouter"
import FloatingButton from "./components/elements/buttons/FloatingBtn"
import { useAppDispatch, useAppSelector } from "./redux/hook"
import { setIsAuthModalOpen, setProfileActive } from "./redux/slices/authSlice"
import { useLocation } from "react-router-dom"
const AuthModalContainer = React.lazy(() => import("./components/layouts/auth/AuthModalContainer"))
const ProfileLayout = React.lazy(() => import("./components/layouts/profile/ProfileLayout"))

const App = () => {
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
          if (pathname === "/") {
               window.scrollTo(0, 0)
          }
          window.scrollTo(0, 0)
     }, [pathname])

     return (
          <div className='bg-light selection:bg-dark selection:text-light
          dark:bg-dark dark:selection:bg-light transition-all duration-500
          dark:selection:text-dark relative min-h-screen overflow-hidden'>
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

