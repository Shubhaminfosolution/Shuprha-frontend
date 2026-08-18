import { motion } from "framer-motion";

const services = [
  {
    number: "01",
    title: "Brand Strategy",
    desc: "Define your brand's direction, positioning, audience, values, and competitive advantage to create a strong foundation for growth.",
  },
  {
    number: "02",
    title: "Brand Identity",
    desc: "Build a distinctive visual identity that communicates who you are through logos, typography, colors, and carefully crafted design elements.",
  },
  {
    number: "03",
    title: "Visual Language",
    desc: "Create a consistent visual system that gives your brand a recognizable look and feel across every digital and physical touchpoint.",
  },
  {
    number: "04",
    title: "Brand Guidelines",
    desc: "Establish clear guidelines for using your brand identity so that every communication remains consistent, professional, and recognizable.",
  },
  {
    number: "05",
    title: "Brand Messaging",
    desc: "Develop a clear brand voice, messaging framework, and communication style that connects with your target audience.",
  },
  {
    number: "06",
    title: "Brand Experience",
    desc: "Create cohesive brand experiences across websites, social media, marketing campaigns, and customer touchpoints.",
  },
  {
    number: "07",
    title: "Brand Refresh",
    desc: "Modernize an existing brand while preserving its core identity, creating a stronger and more relevant presence for today's audience.",
  },
];

const Branding = () => {
  return (
    <div className="pt-32 pb-24 px-6 bg-background text-foreground">
      {/* HERO */}
      <section className="max-w-6xl mx-auto mb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-purple-400 font-semibold mb-5">
            Branding
          </p>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight mb-7">
            Build a brand
            <span className="block bg-gradient-to-r from-purple-500 via-pink-400 to-orange-400 bg-clip-text text-transparent">
              people remember.
            </span>
          </h1>

          <p className="text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed">
            We build meaningful brands through strategy, identity, and
            consistent experiences that connect businesses with their
            audiences.
          </p>
        </motion.div>
      </section>

      {/* INTRO */}
      <section className="max-w-6xl mx-auto mb-24">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-purple-400 text-sm font-semibold uppercase tracking-widest mb-4">
              What We Do
            </p>

            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              More than a logo. We build the identity behind your business.
            </h2>
          </div>

          <div>
            <p className="text-gray-400 leading-relaxed text-lg">
              A powerful brand is more than its visual identity. It is the
              combination of strategy, positioning, personality, messaging, and
              the experience people have with your business.
            </p>

            <p className="text-gray-500 leading-relaxed mt-5">
              We bring these elements together to create brands that are
              distinctive, consistent, and built to connect with the right
              audience.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="max-w-7xl mx-auto">
        <div className="mb-12">
          <p className="text-purple-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Our Capabilities
          </p>

          <h2 className="text-3xl md:text-5xl font-bold">
            Branding services
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ backgroundColor: "rgba(255,255,255,0.05)" }}
              className="group bg-background p-8 md:p-10 min-h-[260px] transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-12">
                <span className="text-sm text-gray-500 font-mono">
                  {service.number}
                </span>

                <span className="w-8 h-px bg-white/20 group-hover:w-14 group-hover:bg-purple-400 transition-all duration-300"></span>
              </div>

              <h3 className="text-xl md:text-2xl font-bold mb-4 group-hover:text-purple-400 transition-colors duration-300">
                {service.title}
              </h3>

              <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* APPROACH */}
      <section className="max-w-6xl mx-auto mt-28">
        <div className="border-t border-white/10 pt-16">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-purple-400 text-sm font-semibold uppercase tracking-widest mb-4">
                Our Approach
              </p>

              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                Strategy creates meaning. Design creates recognition.
              </h2>
            </div>

            <div className="space-y-6 text-gray-400 leading-relaxed">
              <p>
                We begin by understanding your business, audience, market, and
                positioning before developing the creative direction.
              </p>

              <p>
                From strategy and messaging to visual identity and brand
                guidelines, every element is designed to work together as one
                cohesive system.
              </p>

              <p>
                The goal isn't simply to make your business look better. It's
                to create a brand that communicates clearly, builds trust, and
                stays memorable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto mt-28">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-10 md:p-16">
          <div className="absolute -top-32 -right-32 w-72 h-72 bg-purple-500/20 blur-[100px] rounded-full"></div>

          <div className="relative">
            <p className="text-purple-400 text-sm font-semibold uppercase tracking-widest mb-4">
              Build Your Brand
            </p>

            <h2 className="text-3xl md:text-5xl font-bold max-w-3xl leading-tight mb-6">
              Ready to create a brand that stands apart?
            </h2>

            <p className="text-gray-400 max-w-2xl leading-relaxed">
              Let's build a distinctive brand identity that communicates your
              value, connects with your audience, and gives your business a
              stronger presence.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Branding;