import { Routes, Route, useLocation } from "react-router-dom"
import HomePage from "../components/pages/HomePage"
import CatalogPage from "../components/pages/CatalogPage"
import BrandPage from "../components/pages/BrandPage"
import CustomProductPage from "../components/pages/CustomProductPage"
import EventPage from "../components/pages/EventPage"
import DetailPage from "../components/pages/DetailPage"
import React from "react"
import { getCircleAnimations } from "../helper/CircleAnimationHelper"

const AppRouter = () => {
     const location = useLocation()
     const [circleAnimations, setCircleAnimations] = React.useState<React.ReactNode[]>([])

     React.useEffect(() => {
          const pathname = location.pathname
          const animations = getCircleAnimations(pathname)
          setCircleAnimations(animations)
     }, [location.pathname])

     return (
          <>
               {circleAnimations}
               <Routes>
                    <Route path='*' element={<HomePage />} />
                    <Route path='/' element={<HomePage />} />
                    <Route path="/catalog" element={<CatalogPage />} />
                    <Route path="/brand-ambassador" element={<BrandPage />} />
                    <Route path="/custom-product" element={<CustomProductPage />} />
                    <Route path="/event" element={<EventPage />} />
                    <Route path="/catalog-detail" element={<DetailPage />} />
               </Routes>
          </>
     )
}

export default AppRouter