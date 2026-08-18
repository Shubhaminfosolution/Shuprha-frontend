import { motion } from "framer-motion";

const services = [
  {
    number: "01",
    title: "Keyword Research",
    desc: "Identify valuable search opportunities and understand what your target audience is searching for to build a focused SEO strategy.",
  },
  {
    number: "02",
    title: "On-Page SEO",
    desc: "Optimize page structure, content, headings, metadata, internal linking, and other elements to improve search visibility.",
  },
  {
    number: "03",
    title: "Technical SEO",
    desc: "Improve your website's technical foundation, crawlability, indexing, site structure, and performance for better search engine accessibility.",
  },
  {
    number: "04",
    title: "Off-Page SEO",
    desc: "Strengthen your website's authority through relevant backlinks, digital presence, and strategies that improve overall domain credibility.",
  },
  {
    number: "05",
    title: "Local SEO",
    desc: "Improve your visibility in local searches and help customers discover your business when they are searching for relevant services nearby.",
  },
  {
    number: "06",
    title: "SEO Content Strategy",
    desc: "Create search-focused content strategies that answer user intent, build authority, and attract relevant organic traffic.",
  },
  {
    number: "07",
    title: "SEO Audit",
    desc: "Identify technical, content, and visibility issues through comprehensive website audits and turn those findings into actionable improvements.",
  },
  {
    number: "08",
    title: "Analytics & Reporting",
    desc: "Track rankings, organic traffic, conversions, and other meaningful metrics to understand performance and continuously improve your strategy.",
  },
];

const SEO = () => {
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
          <p className="text-sm uppercase tracking-[0.3em] text-green-400 font-semibold mb-5">
            Search Engine Optimization
          </p>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight mb-7">
            Get found by the
            <span className="block bg-gradient-to-r from-green-400 via-emerald-400 to-blue-500 bg-clip-text text-transparent">
              right audience.
            </span>
          </h1>

          <p className="text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed">
            We build search strategies that improve visibility, attract
            relevant organic traffic, and create sustainable opportunities for
            business growth.
          </p>
        </motion.div>
      </section>

      {/* INTRO */}
      <section className="max-w-6xl mx-auto mb-24">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-green-400 text-sm font-semibold uppercase tracking-widest mb-4">
              What We Do
            </p>

            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              SEO built around visibility, relevance, and long-term growth.
            </h2>
          </div>

          <div>
            <p className="text-gray-400 leading-relaxed text-lg">
              Search engines are constantly evolving, and successful SEO
              requires more than adding keywords to a website. We look at the
              complete search experience — from technical foundations to
              content, authority, and user intent.
            </p>

            <p className="text-gray-500 leading-relaxed mt-5">
              Our approach focuses on building a stronger organic presence
              that attracts the right visitors and supports meaningful business
              objectives.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="max-w-7xl mx-auto">
        <div className="mb-12">
          <p className="text-green-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Our Capabilities
          </p>

          <h2 className="text-3xl md:text-5xl font-bold">
            SEO services
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

                <span className="w-8 h-px bg-white/20 group-hover:w-14 group-hover:bg-green-400 transition-all duration-300"></span>
              </div>

              <h3 className="text-xl md:text-2xl font-bold mb-4 group-hover:text-green-400 transition-colors duration-300">
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
              <p className="text-green-400 text-sm font-semibold uppercase tracking-widest mb-4">
                Our Approach
              </p>

              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                Build visibility that compounds over time.
              </h2>
            </div>

            <div className="space-y-6 text-gray-400 leading-relaxed">
              <p>
                We begin by understanding your business, audience, competitors,
                website, and search landscape before identifying the strongest
                opportunities for growth.
              </p>

              <p>
                From technical improvements and on-page optimization to
                content and authority building, every part of the strategy is
                designed to work together.
              </p>

              <p>
                SEO is a long-term process. We continuously monitor
                performance, identify new opportunities, and refine the
                strategy as search behaviour and business priorities evolve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto mt-28">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-10 md:p-16">
          <div className="absolute -top-32 -right-32 w-72 h-72 bg-green-500/20 blur-[100px] rounded-full"></div>

          <div className="relative">
            <p className="text-green-400 text-sm font-semibold uppercase tracking-widest mb-4">
              Grow Organically
            </p>

            <h2 className="text-3xl md:text-5xl font-bold max-w-3xl leading-tight mb-6">
              Ready to become easier to find?
            </h2>

            <p className="text-gray-400 max-w-2xl leading-relaxed">
              Let's build an SEO strategy that improves your visibility,
              reaches the right audience, and creates a stronger foundation for
              long-term organic growth.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SEO;