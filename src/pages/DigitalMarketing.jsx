import { motion } from "framer-motion";

const services = [
  {
    number: "01",
    title: "Lead Generation",
    desc: "Generate qualified leads through targeted campaigns, optimized landing pages, and data-driven acquisition strategies.",
  },
  {
    number: "02",
    title: "Social Media Management",
    desc: "Build a consistent and engaging social presence with strategic content, creative campaigns, and audience-focused communication.",
  },
  {
    number: "03",
    title: "SEO Optimization",
    desc: "Improve search visibility, increase organic traffic, and build long-term growth through technical and content-focused SEO.",
  },
  {
    number: "04",
    title: "Paid Advertising",
    desc: "Create and manage performance-driven advertising campaigns designed to maximize reach, conversions, and return on investment.",
  },
  {
    number: "05",
    title: "Content Marketing",
    desc: "Create purposeful content that attracts the right audience, builds authority, and supports your overall marketing objectives.",
  },
  {
    number: "06",
    title: "Funnel & Conversion Strategy",
    desc: "Turn traffic into customers with optimized marketing funnels, landing pages, conversion journeys, and retargeting strategies.",
  },
  {
    number: "07",
    title: "Analytics & Performance",
    desc: "Track campaign performance, understand customer behavior, and make smarter marketing decisions using meaningful data.",
  },
];

const DigitalMarketing = () => {
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
          <p className="text-sm uppercase tracking-[0.3em] text-blue-400 font-semibold mb-5">
            Digital Marketing
          </p>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight mb-7">
            Marketing that turns
            <span className="block bg-gradient-to-r from-blue-500 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              attention into growth.
            </span>
          </h1>

          <p className="text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed">
            We combine strategy, creativity, performance marketing, and data
            to help businesses build a stronger digital presence and generate
            measurable growth.
          </p>
        </motion.div>
      </section>

      {/* INTRO */}
      <section className="max-w-6xl mx-auto mb-24">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-4">
              What We Do
            </p>

            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              A complete digital marketing approach for modern businesses.
            </h2>
          </div>

          <div>
            <p className="text-gray-400 leading-relaxed text-lg">
              Digital marketing is more than running advertisements or posting
              on social media. Our approach connects visibility, content,
              audience acquisition, conversion, and analytics into one
              integrated strategy.
            </p>

            <p className="text-gray-500 leading-relaxed mt-5">
              Whether you want more enquiries, stronger brand visibility,
              better search rankings, or a scalable customer acquisition
              system, we build strategies around your actual business goals.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="max-w-7xl mx-auto">
        <div className="mb-12">
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Our Capabilities
          </p>

          <h2 className="text-3xl md:text-5xl font-bold">
            Digital marketing services
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

                <span className="w-8 h-px bg-white/20 group-hover:w-14 group-hover:bg-blue-400 transition-all duration-300"></span>
              </div>

              <h3 className="text-xl md:text-2xl font-bold mb-4 group-hover:text-blue-400 transition-colors duration-300">
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
              <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-4">
                Our Approach
              </p>

              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                Strategy first. Performance always.
              </h2>
            </div>

            <div className="space-y-6 text-gray-400 leading-relaxed">
              <p>
                Every business has a different audience, objective, and growth
                challenge. That's why we don't believe in one-size-fits-all
                marketing packages.
              </p>

              <p>
                We understand your business, identify opportunities, build the
                right digital strategy, and continuously optimize campaigns
                based on performance.
              </p>

              <p>
                The result is a marketing ecosystem designed to create
                sustainable visibility, stronger engagement, and measurable
                business outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto mt-28">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-10 md:p-16">
          <div className="absolute -top-32 -right-32 w-72 h-72 bg-blue-500/20 blur-[100px] rounded-full"></div>

          <div className="relative">
            <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-4">
              Let's Grow
            </p>

            <h2 className="text-3xl md:text-5xl font-bold max-w-3xl leading-tight mb-6">
              Ready to build a stronger digital presence?
            </h2>

            <p className="text-gray-400 max-w-2xl leading-relaxed">
              Let's create a digital marketing strategy that connects your
              brand with the right audience and turns opportunities into
              measurable growth.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DigitalMarketing;