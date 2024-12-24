import React from "react"
import { Routes, Route, useLocation } from "react-router-dom"
import { getCircleAnimations } from "../helper/CircleAnimationHelper"
import HomePage from "../components/pages/HomePage"
import ProtectedRoute from "./ProtectedRoute"
const CatalogPage = React.lazy(() => import('../components/pages/CatalogPage'))
const BrandPage = React.lazy(() => import('../components/pages/BrandPage'))
const CustomProductPage = React.lazy(() => import('../components/pages/CustomProductPage'))
const EventPage = React.lazy(() => import('../components/pages/EventPage'))
const DetailPage = React.lazy(() => import('../components/pages/DetailPage'))

const AppRouter = () => {
     const location = useLocation()
     const [circleAnimations, setCircleAnimations] = React.useState<React.ReactNode[]>([])

     React.useEffect(() => {
          const pathname = location.pathname
          const animations = getCircleAnimations(pathname)
          setCircleAnimations(animations)
     }, [location.pathname])

     return (
          <div className="min-h-screen">
               {circleAnimations}
               <React.Suspense fallback={<Loading></Loading>}>
                    <Routes>
                         <Route path='*' element={<HomePage />} />
                         <Route path='/' element={<HomePage />} />
                         <Route path="/catalog" element={<CatalogPage />} />
                         <Route path="/brand-ambassador" element={<BrandPage />} />
                         <Route path="/custom-product" element={<CustomProductPage />} />
                         <Route path="/event" element={<EventPage />} />
                         <Route path="/catalog-detail" element={
                              <ProtectedRoute>
                                   <DetailPage />
                              </ProtectedRoute>
                         } />
                    </Routes>
               </React.Suspense>
          </div>
     )
}

export default AppRouter

const Loading = () => {
     return null
}