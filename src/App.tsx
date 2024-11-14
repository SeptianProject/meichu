import Footer from "./components/layouts/Footer"
import Navbar from "./components/layouts/Navbar"
import AppRouter from "./routes/AppRouter"

const App = () => {
  return (
    <div className="bg-dark selection:bg-light selection:text-dark">
      <Navbar />
      <AppRouter />
      <Footer />
    </div>
  )
}

export default App