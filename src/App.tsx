import React from "react"
import Footer from "./components/layouts/Footer"
import Navbar from "./components/layouts/Navbar"
import AppRouter from "./routes/AppRouter"
import FloatingButton from "./components/elements/buttons/FloatingBtn"
import AuthModalContainer from "./components/layouts/auth/AuthModalContainer"
import ProfileLayout from "./components/layouts/profile/ProfileLayout"
import ScrollToTop from "./routes/ScrollToTop"

const App = () => {
     const [isAuthModalOpen, setIsAuthModalOpen] = React.useState(false)
     const [profileActive, setProfileActive] = React.useState(false)

     const handleModalOpen = () => {
          setIsAuthModalOpen(true)
     }

     const handleModalClose = () => {
          setIsAuthModalOpen(false)
          if (profileActive) {
               setProfileActive(false)
          }
     }

     const handleModalProfile = () => {
          setProfileActive(true)
          if (isAuthModalOpen) {
               setIsAuthModalOpen(false)
          }
     }

     return (
          <div className={`bg-light selection:bg-dark selection:text-light
          dark:bg-dark dark:selection:bg-light transition-all duration-500
          dark:selection:text-dark relative min-h-screen overflow-hidden`}>
               <Navbar modalOnClick={handleModalOpen} />
               <AuthModalContainer isOpen={isAuthModalOpen} onClose={handleModalClose} onProfile={handleModalProfile} />
               <ProfileLayout profileOpen={profileActive} profileClose={handleModalClose} />
               <AppRouter />
               <Footer />
               <FloatingButton />
               <ScrollToTop />
          </div>
     )
}

export default App

