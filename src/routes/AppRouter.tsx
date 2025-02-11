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

export const LoadingFallback = () => {
     return null
}

const AppRouter = () => {
     const location = useLocation()
     const [circleAnimations, setCircleAnimations] = React.useState<React.ReactNode[]>([])

     React.useEffect(() => {
          const animations = getCircleAnimations(location.pathname)
          setCircleAnimations(animations)
     }, [location.pathname])

     return (
          <div className="min-h-screen">
               {circleAnimations}
               <React.Suspense fallback={<LoadingFallback />}>
                    <Routes>
                         <Route path='/' element={<HomePage />} />
                         <Route path="/catalog" element={<CatalogPage />} />
                         <Route path="/brand-ambassador" element={<BrandPage />} />
                         <Route path="/custom-product"
                              element={
                                   <ProtectedRoute>
                                        <CustomProductPage />
                                   </ProtectedRoute>
                              } />
                         <Route path="/event" element={<EventPage />} />
                         <Route path="/catalog-detail/:productId"
                              element={
                                   <ProtectedRoute>
                                        <DetailPage />
                                   </ProtectedRoute>
                              } />
                         <Route path='*' element={<HomePage />} />
                    </Routes>
               </React.Suspense>
          </div>
     )
}

export default AppRouter