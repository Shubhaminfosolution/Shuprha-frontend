import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, Mail, MapPin, Phone, X, Sparkles } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

/* ─── FIXED: proper body scroll lock ─── */
function useLockBody(locked) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.body.style.overflow = locked ? 'hidden' : ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [locked])
}

/* ─── reusable info card ─── */
function InfoCard({ icon: Icon, label, value, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.4 }}
      className="group flex items-center gap-4 p-4 rounded-2xl 
                 border border-white/10 bg-white/5
                 hover:bg-blue-500/10 hover:border-blue-400/30
                 transition-all duration-300"
    >
      <div className="w-11 h-11 rounded-xl flex items-center justify-center
                      bg-blue-500/15 border border-blue-400/20
                      group-hover:bg-blue-500/25 group-hover:scale-110
                      transition-all duration-300">
        <Icon className="w-5 h-5 text-blue-400" />
      </div>
      <div>
        <p className="text-xs text-white/40 uppercase tracking-widest mb-0.5">{label}</p>
        <p className="text-sm font-medium text-white/90">{value}</p>
      </div>
    </motion.div>
  )
}

/* ─── particles ─── */
function Particles() {
  const dots = Array.from({ length: 18 })
  return (
    <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
      {dots.map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-blue-400/30"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.7, 0.2],
          }}
          transition={{
            duration: 3 + Math.random() * 3,
            repeat: Infinity,
          }}
        />
      ))}
    </div>
  )
}

/* ─── MAIN OVERLAY ─── */
function ContactOverlay({ onClose }) {
  useLockBody(true)

  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) =>
    setFormData((p) => ({ ...p, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // 👉 Replace with API later
    await new Promise((r) => setTimeout(r, 1500))

    setIsSubmitting(false)
    setSubmitted(true)
  }

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      style={{ backdropFilter: 'blur(18px)', background: 'rgba(0,0,0,0.75)' }}
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl rounded-3xl p-8
                   bg-[#0f172a] border border-white/10"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.9 }}
      >
        <Particles />

        {/* Close */}
        <button onClick={onClose} className="absolute top-5 right-5">
          <X />
        </button>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* LEFT */}
          <div>
            <h2 className="text-3xl font-bold mb-4">
              Let's Start a Conversation
            </h2>

            <div className="flex flex-col gap-3 mt-6">
              <InfoCard icon={Mail} label="Email" value="premwaghmare88560@gmail.com" delay={0.2} />
              <InfoCard icon={Phone} label="Phone" value="+91 8856076018" delay={0.3} />
              <InfoCard icon={MapPin} label="Location" value="Pune" delay={0.4} />
            </div>
          </div>

          {/* RIGHT FORM */}
          <div>
            {submitted ? (
              <div className="text-center">
                <h3 className="text-xl">Message Sent ✅</h3>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">

                <input
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="p-3 rounded bg-white/5"
                />

                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="p-3 rounded bg-white/5"
                />

                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="p-3 rounded bg-white/5"
                />

                <button
                  type="submit"
                  className="bg-blue-500 p-3 rounded flex items-center justify-center gap-2"
                >
                  Send <Send size={16} />
                </button>

              </form>
            )}
          </div>

        </div>
      </motion.div>
    </motion.div>
  )
}

/* ─── BUTTON COMPONENT ─── */
export default function ContactButton() {
  const navigate = useNavigate()   // 👈 add this
  const [open, setOpen] = useState(true)

  return (
    <AnimatePresence>
      {open && (
        <ContactOverlay
          onClose={() => navigate('/')}   // 👈 only change
        />
      )}
    </AnimatePresence>
  )
}

/* ✅ IMPORTANT EXPORT (used in Navbar) */
export { ContactOverlay as ContactOverlayRaw }