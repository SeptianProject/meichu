import Footer from "./components/layouts/Footer"
import Navbar from "./components/layouts/Navbar"
import AppRouter from "./routes/AppRouter"
import FloatingButton from "./components/elements/buttons/FloatingBtn"
import AuthModalContainer from "./components/layouts/auth/AuthModalContainer"
import ProfileLayout from "./components/layouts/profile/ProfileLayout"
import ScrollToTop from "./routes/ScrollToTop"
import { useAuthModal } from "./hooks/useAuthModal"

const App = () => {
     const {
          isAuthModalOpen,
          profileActive,
          handleModalOpen,
          handleModalClose,
          handleModalProfile
     } = useAuthModal()

     return (
          <div className={`bg-light selection:bg-dark selection:text-light
          dark:bg-dark dark:selection:bg-light transition-all duration-500
          dark:selection:text-dark relative min-h-screen overflow-hidden`}>
               <Navbar modalOnClick={handleModalOpen} />
               <AuthModalContainer
                    isOpen={isAuthModalOpen}
                    onClose={handleModalClose}
                    onProfile={handleModalProfile} />
               <ProfileLayout
                    profileOpen={profileActive}
                    profileClose={handleModalClose} />
               <AppRouter />
               <FloatingButton />
               <Footer />
               <ScrollToTop />
          </div>
     )
}

export default App

