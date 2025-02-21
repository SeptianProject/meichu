import React from "react"
import Navbar from "./components/layouts/Navbar"
import AppRouter from "./routes/AppRouter"
import { useModalState } from "./hooks/useModalState"
import { useAppSelector } from "./redux/hook"
import { useLocation } from "react-router-dom"
import { Toaster } from "react-hot-toast"

const Footer = React.lazy(() => import("./components/layouts/Footer"))
const FloatingButton = React.lazy(() => import("./components/elements/buttons/FloatingBtn"))
const AuthModalContainer = React.lazy(() => import("./components/layouts/auth/AuthModalContainer"))

const App = () => {
     const { pathname } = useLocation()
     const { isAuthModalOpen } = useAppSelector((state) => state.auth)
     const { closeModal } = useModalState()

     React.useEffect(() => {
          window.scrollTo(0, 0)
     }, [pathname])

     return (
          <div className='bg-light selection:bg-dark selection:text-light
          dark:bg-dark dark:selection:bg-light transition-all duration-500
          dark:selection:text-dark relative min-h-screen overflow-hidden'>
               <Navbar />
               <React.Suspense fallback={null}>
                    <AuthModalContainer
                         isOpen={isAuthModalOpen}
                         onClose={closeModal}
                    />
               </React.Suspense>
               <AppRouter />
               <FloatingButton />
               <Footer />
               <Toaster />
          </div>
     )
}

export default App

