
import { motion } from "framer-motion";

const caseStudies = [
  {
    number: "01",
    category: "Travel & Tourism",
    client: "Hindavi Swarajya Tours & Travels",
    title: "Building a stronger digital presence for a travel brand.",
    challenge:
      "The objective was to create a modern digital experience that could present the company's travel services, tour packages, fleet, and booking journey in a professional and trustworthy way.",
    approach:
      "We focused on creating a modern website experience, improving the presentation of tour packages and services, and building a digital presence aligned with the brand's travel-focused positioning.",
    services: [
      "Website Development",
      "Digital Marketing",
      "Social Media",
      "Lead Generation",
    ],
    outcome:
      "A more structured digital presence designed to make the brand easier to discover, understand, and engage with.",
  },

  {
    number: "02",
    category: "Interior Design",
    client: "Trimit Rachna",
    title: "Strengthening the digital presence of an interior design brand.",
    challenge:
      "The focus was to improve online visibility and create a stronger digital presentation for an interior design business competing in a visually driven market.",
    approach:
      "We worked across digital marketing, SEO, social media content, and creative communication to present the brand's work more effectively and build a consistent online presence.",
    services: [
      "SEO",
      "Social Media",
      "Content Creation",
      "Digital Marketing",
    ],
    outcome:
      "A more consistent digital identity with a stronger focus on showcasing the brand's work and connecting its online presence with potential customers.",
  },

  {
    number: "03",
    category: "Real Estate",
    client: "Osentia Realty",
    title: "Creating a focused digital marketing approach for real estate.",
    challenge:
      "Real estate marketing requires reaching highly relevant audiences while communicating projects clearly and generating meaningful enquiries.",
    approach:
      "We focused on digital advertising and audience targeting with the objective of improving campaign relevance and creating a more structured lead-generation process.",
    services: [
      "Paid Advertising",
      "Lead Generation",
      "Campaign Strategy",
      "Performance Marketing",
    ],
    outcome:
      "A performance-focused marketing approach designed around audience targeting, campaign optimization, and lead generation.",
  },

  {
    number: "04",
    category: "Technology & Cybersecurity",
    client: "Fixi Security",
    title: "Building digital visibility for a cybersecurity-focused business.",
    challenge:
      "Technology and cybersecurity businesses need to communicate complex services clearly while building trust with potential customers.",
    approach:
      "Our work focused on digital advertising and marketing communication designed to connect the company's services with relevant audiences.",
    services: [
      "Digital Marketing",
      "Paid Advertising",
      "Lead Generation",
      "Campaign Strategy",
    ],
    outcome:
      "A focused digital marketing approach designed to increase visibility and connect the business with relevant prospects.",
  },
];

const CaseStudies = () => {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-300">

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(59,130,246,0.18),_transparent_35%),radial-gradient(circle_at_bottom_left,_rgba(124,58,237,0.14),_transparent_35%)]" />

        <div className="relative max-w-6xl mx-auto px-6 pt-32 pb-20 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300 mb-7">
              <span className="h-2 w-2 rounded-full bg-blue-400" />
              SHUPRHA
            </div>

            <p className="text-sm font-semibold tracking-[0.25em] uppercase text-blue-400 mb-4">
              Think Digital, Think Shuprha
            </p>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6">
              Case Studies
            </h1>

            <p className="max-w-2xl text-lg leading-8 text-slate-400">
              Explore how we work with businesses to solve digital challenges,
              build stronger brands, and create meaningful digital experiences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* INTRO */}
      <section className="max-w-6xl mx-auto px-6 py-16 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-7 sm:p-9">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-sm font-semibold tracking-[0.2em] uppercase text-blue-400 mb-4">
                Our Work
              </p>

              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                Digital solutions built around real business challenges.
              </h2>
            </div>

            <div className="text-slate-400 leading-8">
              <p>
                Every business has different goals, audiences, and challenges.
                Our approach begins by understanding the problem before
                choosing the right combination of strategy, technology,
                creativity, and marketing.
              </p>

              <p className="mt-5">
                Here are some of the businesses and projects where we have
                applied that approach.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="max-w-6xl mx-auto px-6 pb-20 lg:px-8">

        <div className="space-y-8">

          {caseStudies.map((study, index) => (
            <motion.article
              key={study.number}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group rounded-3xl border border-white/10 bg-white/[0.035] overflow-hidden hover:border-blue-400/20 transition-all duration-300"
            >

              {/* TOP */}
              <div className="p-7 sm:p-9 lg:p-10">

                <div className="flex flex-wrap items-center justify-between gap-4 mb-8">

                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 border border-blue-400/20 text-xs font-bold text-blue-400">
                      {study.number}
                    </div>

                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                      {study.category}
                    </span>
                  </div>

                  <div className="h-px flex-1 max-w-24 bg-white/10 hidden sm:block" />

                </div>

                <div className="max-w-4xl">
                  <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-5">
                    {study.client}
                  </h2>

                  <p className="text-xl sm:text-2xl leading-relaxed text-slate-200">
                    {study.title}
                  </p>
                </div>

                {/* SERVICES */}
                <div className="flex flex-wrap gap-2 mt-8">
                  {study.services.map((service) => (
                    <span
                      key={service}
                      className="rounded-full border border-white/10 bg-black/10 px-4 py-2 text-xs font-medium text-slate-400"
                    >
                      {service}
                    </span>
                  ))}
                </div>

              </div>

              {/* DETAILS */}
              <div className="border-t border-white/10 grid md:grid-cols-3">

                <CaseStudyDetail
                  title="The Challenge"
                  text={study.challenge}
                />

                <CaseStudyDetail
                  title="Our Approach"
                  text={study.approach}
                  bordered
                />

                <CaseStudyDetail
                  title="The Outcome"
                  text={study.outcome}
                  bordered
                />

              </div>

            </motion.article>
          ))}

        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-20 lg:px-8">

          <div className="relative overflow-hidden rounded-3xl border border-blue-400/20 bg-gradient-to-br from-blue-500/[0.08] to-violet-500/[0.06] p-8 sm:p-10">

            <div className="absolute -top-32 -right-32 h-72 w-72 rounded-full bg-blue-500/10 blur-[100px]" />

            <div className="relative max-w-3xl">

              <p className="text-sm font-semibold tracking-[0.2em] uppercase text-blue-400 mb-4">
                Your Business Could Be Next
              </p>

              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-5">
                Have a digital challenge?
              </h2>

              <p className="text-slate-400 leading-8">
                Whether you are building a new brand, improving your digital
                presence, generating leads, or developing a new digital
                experience, let's create something that moves your business
                forward.
              </p>

            </div>
          </div>

        </div>
      </section>

      {/* BOTTOM */}
      <section className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-10 lg:px-8">
          <p className="text-sm text-slate-500 text-center">
            Shuprha Digital Marketing · Think Digital, Think Shuprha
          </p>
        </div>
      </section>

    </main>
  );
};


/* -----------------------------
   Reusable Components
----------------------------- */

const CaseStudyDetail = ({ title, text, bordered = false }) => {
  return (
    <div
      className={`p-7 sm:p-9 ${
        bordered ? "border-t md:border-t-0 md:border-l border-white/10" : ""
      }`}
    >
      <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3">
        {title}
      </p>

      <p className="text-sm sm:text-base leading-7 text-slate-300">
        {text}
      </p>
    </div>
  );
};


export default CaseStudies;
