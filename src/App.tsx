import Footer from "./components/layouts/Footer"
import Navbar from "./components/layouts/Navbar"
import AppRouter from "./routes/AppRouter"

const App = () => {
  return (
    <section className="bg-dark overflow-hidden relative px-10 lg:px-20 z-0
    selection:bg-light selection:text-dark">
      <Navbar />
      <AppRouter />
      <Footer />
    </section>
  )
}

export default App