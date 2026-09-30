import { useEffect, useState } from "react"

function ScrollProgressBar() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const percent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
      setProgress(percent)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="fixed top-20 left-0 w-full h-1 bg-transparent z-[60]">
      <div
        className="h-full bg-gradient-to-r from-telecom-navy via-brand-cyan to-signal-emerald transition-[width] duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}

export default ScrollProgressBar