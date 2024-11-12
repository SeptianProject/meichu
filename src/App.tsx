import Navbar from "./components/layouts/Navbar"
import AppRouter from "./routes/AppRouter"

const App = () => {
  return (
    <section className="bg-dark">
      <Navbar />
      <AppRouter />
    </section>
  )
}

export default App