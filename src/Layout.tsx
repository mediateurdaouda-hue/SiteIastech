import { Outlet, useLocation } from "react-router-dom"
import { useEffect } from "react"
import AOS from "aos"
import Header from "./component/Header"
import Footer from "./component/Footer"
import ScrollProgressBar from "./component/ScrollProgressBar"
import WhatsAppFloat from "./component/WhatsAppFloat"

function Layout() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
    AOS.refresh()
  }, [location.pathname])

  return (
    <div className="min-h-screen bg-surface-canvas flex flex-col">
      <Header />
      <ScrollProgressBar />
      <main className="flex-1">
        <div key={location.pathname} className="page-transition">
          <Outlet />
        </div>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}

export default Layout