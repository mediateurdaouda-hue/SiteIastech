import { useEffect, useRef, useState } from "react"

interface StatCardProps {
  icon: string
  value: number
  suffix: string
  label: string
  gradient: string
}

function StatCard({ icon, value, suffix, label, gradient }: StatCardProps) {
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStarted(true)
      },
      { threshold: 0.4 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!started) return
    const duration = 1500
    let startTime: number | null = null

    const step = (timestamp: number) => {
      if (startTime === null) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      setCount(Math.floor(progress * value))
      if (progress < 1) requestAnimationFrame(step)
      else setCount(value)
    }

    requestAnimationFrame(step)
  }, [started, value])

  return (
    <div ref={ref} className="flex flex-col items-center text-center">
      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center shadow-md mb-4`}>
        <span className="material-symbols-outlined text-white text-[28px]">{icon}</span>
      </div>
      <p className="text-4xl font-extrabold text-telecom-navy tabular-nums">
        {count.toLocaleString("fr-FR")}{suffix}
      </p>
      <p className="text-sm text-on-surface-variant mt-2">{label}</p>
    </div>
  )
}

export default StatCard