import { useEffect } from "react"
import { Routes, Route } from "react-router-dom"
import AOS from "aos"
import "aos/dist/aos.css"
import Layout from "./Layout"
import Accueil from "./pages/Accueil"
import Historique from "./pages/Historique"
import Contact from "./pages/Contact"
import Services from "./pages/Services"
import ExpertisePage from "./pages/ExpertisePage" // <- nouveau

function App() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-out-cubic",
      once: true,
      offset: 80,
    })
  }, [])

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Accueil />} />
        <Route path="/historique" element={<Historique />} />
        <Route path="/services" element={<Services />} />
        <Route path="/expertise/:slug" element={<ExpertisePage />} /> {/* <- nouveau */}
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  )
}

export default App