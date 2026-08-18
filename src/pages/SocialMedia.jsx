import { motion } from "framer-motion";
import { Instagram } from "lucide-react";

const services = [
  {
    number: "01",
    title: "Social Media Strategy",
    desc: "Build a clear social media strategy around your brand, audience, objectives, and long-term growth goals.",
  },
  {
    number: "02",
    title: "Content Creation",
    desc: "Create engaging posts, carousels, reels, graphics, and other content designed to capture attention and communicate your brand.",
  },
  {
    number: "03",
    title: "Reels & Short-Form Content",
    desc: "Develop platform-focused short-form videos designed to increase reach, engagement, and brand awareness.",
  },
  {
    number: "04",
    title: "Community Management",
    desc: "Build meaningful relationships with your audience through consistent engagement, responses, and community interaction.",
  },
  {
    number: "05",
    title: "Paid Social Campaigns",
    desc: "Reach the right audience with targeted social advertising campaigns focused on awareness, leads, conversions, and growth.",
  },
  {
    number: "06",
    title: "Brand Building",
    desc: "Create a consistent digital identity that strengthens brand recognition across social platforms and customer touchpoints.",
  },
  {
    number: "07",
    title: "Analytics & Reporting",
    desc: "Monitor important metrics, understand audience behavior, and continuously improve your social media performance.",
  },
];

const SocialMedia = () => {
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
          <p className="text-sm uppercase tracking-[0.3em] text-pink-400 font-semibold mb-5">
            Social Media
          </p>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight mb-7">
            Build a presence
            <span className="block bg-gradient-to-r from-pink-500 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              people remember.
            </span>
          </h1>

          <p className="text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed">
            We help brands turn social media into a meaningful channel for
            visibility, engagement, community, and business growth.
          </p>
        </motion.div>
      </section>

      {/* INTRO */}
      <section className="max-w-6xl mx-auto mb-24">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-pink-400 text-sm font-semibold uppercase tracking-widest mb-4">
              What We Do
            </p>

            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              More than posting. We build your social presence.
            </h2>
          </div>

          <div>
            <p className="text-gray-400 leading-relaxed text-lg">
              A strong social media presence requires more than attractive
              posts. It needs a clear strategy, consistent content, meaningful
              engagement, and continuous optimization.
            </p>

            <p className="text-gray-500 leading-relaxed mt-5">
              From content creation and reels to community management and paid
              campaigns, we bring the different parts of social media together
              to create a consistent and effective digital presence.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="max-w-7xl mx-auto">
        <div className="mb-12">
          <p className="text-pink-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Our Capabilities
          </p>

          <h2 className="text-3xl md:text-5xl font-bold">
            Social media services
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

                <span className="w-8 h-px bg-white/20 group-hover:w-14 group-hover:bg-pink-400 transition-all duration-300"></span>
              </div>

              <h3 className="text-xl md:text-2xl font-bold mb-4 group-hover:text-pink-400 transition-colors duration-300">
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
              <p className="text-pink-400 text-sm font-semibold uppercase tracking-widest mb-4">
                Our Approach
              </p>

              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                Create. Connect. Grow.
              </h2>
            </div>

            <div className="space-y-6 text-gray-400 leading-relaxed">
              <p>
                Every platform has its own audience, content style, and
                behaviour. We create social strategies that are aligned with
                the platform as well as your business goals.
              </p>

              <p>
                From the first creative to ongoing community engagement, we
                focus on creating content that feels relevant, authentic, and
                consistent with your brand.
              </p>

              <p>
                We then use performance data to understand what works, improve
                what doesn't, and continuously strengthen your social presence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INSTAGRAM */}
      <section className="max-w-6xl mx-auto mt-28">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-10 md:p-16 text-center">
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-72 h-72 bg-pink-500/20 blur-[100px] rounded-full"></div>

          <div className="relative">
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-2xl bg-gradient-to-br from-pink-500/20 to-purple-500/20 border border-white/10">
                <Instagram size={28} />
              </div>
            </div>

            <p className="text-pink-400 text-sm font-semibold uppercase tracking-widest mb-4">
              Follow Our Work
            </p>

            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              See what we're creating.
            </h2>

            <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed mb-8">
              Explore our latest creative work, campaigns, projects, and
              behind-the-scenes content on Instagram.
            </p>

            <a
              href="https://instagram.com/shuprha"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-7 py-3.5 rounded-full font-semibold hover:scale-105 transition-transform duration-300"
            >
              <Instagram size={18} />
              Visit Instagram
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SocialMedia;