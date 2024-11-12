import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomePage from "../components/pages/HomePage"

const AppRouter = () => {
     return (
          <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
               <Routes>
                    <Route path="/" element={<HomePage />} />
               </Routes>
          </Router>
     )
}

export default AppRouter