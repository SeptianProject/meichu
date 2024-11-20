import React from "react"
import Footer from "./components/layouts/Footer"
import Navbar from "./components/layouts/Navbar"
import AppRouter from "./routes/AppRouter"
import FloatingButton from "./components/elements/FloatingButton"
import AuthModalContainer from "./components/layouts/auth/AuthModalContainer"
import CircleTrackingCursorAnimation from "./components/elements/CircleTrackingCursorAnimation"

const App = () => {
     const [isAuthModalOpen, setIsAuthModalOpen] = React.useState(false)


     const handleModalOpen = () => {
          setIsAuthModalOpen(true)
     }

     const handleModalClose = () => {
          setIsAuthModalOpen(false)
     }

     return (
          <div className={`bg-light selection:bg-dark selection:text-light
          dark:bg-dark dark:selection:bg-light transition-all duration-500
          dark:selection:text-dark relative min-h-screen overflow-hidden`}>
               <Navbar modalOnClick={handleModalOpen} />
               <AuthModalContainer isOpen={isAuthModalOpen} onClose={handleModalClose} />
               <AppRouter />
               <Footer />
               <FloatingButton />
               <CircleTrackingCursorAnimation />
          </div>
     )
}

export default App

