import { stats } from "../data/siteData"
import StatCard from "./StatCard"

function StatsSection() {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <StatCard key={s.label} icon={s.icon} value={s.value} suffix={s.suffix} label={s.label} gradient={s.gradient} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default StatsSection