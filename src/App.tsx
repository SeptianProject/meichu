import React from "react"
import Navbar from "./components/layouts/Navbar"
import AppRouter from "./routes/AppRouter"
import Footer from "./components/layouts/Footer"
import FloatingButton from "./components/elements/buttons/FloatingBtn"
import { useModalState } from "./hooks/useModalState"
import { useAppSelector } from "./redux/hook"
import { useLocation } from "react-router-dom"

const AuthModalContainer = React.lazy(() => import("./components/layouts/auth/AuthModalContainer"))
const ProfileLayout = React.lazy(() => import("./components/layouts/profile/ProfileLayout"))

const App = () => {
     const { pathname } = useLocation()
     const { isAuthModalOpen, profileActive } = useAppSelector((state) => state.auth)
     const { closeModal, openProfileModal } = useModalState()

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
                         onProfile={openProfileModal}
                    />
                    <ProfileLayout
                         profileOpen={profileActive}
                         profileClose={closeModal}
                    />
               </React.Suspense>
               <AppRouter />
               <FloatingButton />
               <Footer />
          </div>
     )
}

export default React.memo(App)

