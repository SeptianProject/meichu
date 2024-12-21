import Footer from "./components/layouts/Footer"
import Navbar from "./components/layouts/Navbar"
import AppRouter from "./routes/AppRouter"
import FloatingButton from "./components/elements/buttons/FloatingBtn"
import AuthModalContainer from "./components/layouts/auth/AuthModalContainer"
import ProfileLayout from "./components/layouts/profile/ProfileLayout"
import ScrollToTop from "./routes/ScrollToTop"
import { useAppDispatch, useAppSelector } from "./redux/hook"
import { setIsAuthModalOpen, setProfileActive } from "./redux/slices/authSlice"

const App = () => {
     const dispatch = useAppDispatch()
     const {
          isAuthModalOpen,
          profileActive
     } = useAppSelector((state) => state.auth)

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

     return (
          <div className={`bg-light selection:bg-dark selection:text-light
          dark:bg-dark dark:selection:bg-light transition-all duration-500
          dark:selection:text-dark relative min-h-screen overflow-hidden`}>
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
               <ScrollToTop />
          </div>
     )
}

export default App

