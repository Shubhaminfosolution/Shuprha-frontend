import { motion } from 'framer-motion'
import { Zap, Target, Shield, Rocket, BarChart, Users } from 'lucide-react'

const points = [
  { icon: Rocket, title: 'Fast Growth', desc: 'We focus on rapid scaling strategies.' },
  { icon: Target, title: 'Precision Strategy', desc: 'Every move is data-backed.' },
  { icon: BarChart, title: 'Results Driven', desc: 'We optimize for ROI, not vanity metrics.' },
  { icon: Users, title: 'Client Focused', desc: 'Your success is our priority.' },
  { icon: Shield, title: 'Reliable', desc: 'Consistent performance you can trust.' },
  { icon: Zap, title: 'Creative Edge', desc: 'Stand out with bold creative ideas.' },
]

export default function WhyUs() {
  return (
    <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto relative">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-premium pointer-events-none" />

      <div className="relative z-10 text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Why <span className="gradient-text">Choose Us</span>
        </h1>
        <p className="text-muted-foreground max-w-xl mx-auto">
          We combine creativity, strategy, and performance to deliver unmatched results.
        </p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {points.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ scale: 1.03 }}
            className="bg-card border border-border rounded-3xl p-8 
                       hover:border-accent/40 transition-all duration-300 card-glow"
          >
            <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-4">
              <item.icon className="text-accent" />
            </div>

            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-muted-foreground text-sm">{item.desc}</p>
          </motion.div>
        ))}
      </div>

    </section>
  )
}