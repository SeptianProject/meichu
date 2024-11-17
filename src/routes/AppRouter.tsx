import { Routes, Route } from "react-router-dom"
import HomePage from "../components/pages/HomePage"
import CatalogPage from "../components/pages/CatalogPage"
import BrandPage from "../components/pages/BrandPage"
import CustomProductPage from "../components/pages/CustomProductPage"
import EventPage from "../components/pages/EventPage"
import DetailPage from "../components/pages/DetailPage"

const AppRouter = () => {

     return (
          <Routes>
               <Route path='*' element={<HomePage />} />
               <Route path='/' element={<HomePage />} />
               <Route path="/catalog" element={<CatalogPage />} />
               <Route path="/catalog-detail" element={<DetailPage />} />
               <Route path="/brand-ambassador" element={<BrandPage />} />
               <Route path="/custom-product" element={<CustomProductPage />} />
               <Route path="/event" element={<EventPage />} />
          </Routes>
     )
}

export default AppRouter