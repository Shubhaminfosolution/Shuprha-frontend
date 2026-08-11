const PrivacyPolicy = () => {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-300">

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(59,130,246,0.18),_transparent_35%),radial-gradient(circle_at_bottom_left,_rgba(124,58,237,0.14),_transparent_35%)]" />

        <div className="relative max-w-6xl mx-auto px-6 pt-32 pb-20 lg:px-8">
          <div className="max-w-3xl">

            <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300 mb-7">
              <span className="h-2 w-2 rounded-full bg-blue-400" />
              SHUPRHA
            </div>

            <p className="text-sm font-semibold tracking-[0.25em] uppercase text-blue-400 mb-4">
              Think Digital, Think Shuprha
            </p>

            <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-white mb-6">
              Privacy Policy
            </h1>

            <p className="max-w-2xl text-lg leading-8 text-slate-400">
              This Privacy Policy explains how we collect, use, disclose, and
              protect information when you visit our website, engage us as a
              client, or otherwise interact with us.
            </p>

            <div className="flex flex-wrap gap-3 mt-8">
              <div className="rounded-xl border border-white/10 bg-white/[0.04] px-5 py-3">
                <p className="text-xs uppercase tracking-wider text-slate-500">
                  Effective Date
                </p>
                <p className="mt-1 font-medium text-white">
                  15 July 2026
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/[0.04] px-5 py-3">
                <p className="text-xs uppercase tracking-wider text-slate-500">
                  Last Updated
                </p>
                <p className="mt-1 font-medium text-white">
                  15 July 2026
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* Main Content */}
      <section className="max-w-6xl mx-auto px-6 py-16 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-12">

          {/* Sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-28 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-4">
                On this page
              </p>

              <nav className="space-y-2 text-sm">
                <a href="#information" className="block rounded-lg px-3 py-2 hover:bg-white/5 hover:text-blue-400 transition">
                  1. Information We Collect
                </a>
                <a href="#use" className="block rounded-lg px-3 py-2 hover:bg-white/5 hover:text-blue-400 transition">
                  2. How We Use Your Information
                </a>
                <a href="#sharing" className="block rounded-lg px-3 py-2 hover:bg-white/5 hover:text-blue-400 transition">
                  3. How We Share Your Information
                </a>
                <a href="#retention" className="block rounded-lg px-3 py-2 hover:bg-white/5 hover:text-blue-400 transition">
                  4. Data Retention
                </a>
                <a href="#security" className="block rounded-lg px-3 py-2 hover:bg-white/5 hover:text-blue-400 transition">
                  5. Data Security
                </a>
                <a href="#rights" className="block rounded-lg px-3 py-2 hover:bg-white/5 hover:text-blue-400 transition">
                  6. Your Rights and Choices
                </a>
                <a href="#cookies" className="block rounded-lg px-3 py-2 hover:bg-white/5 hover:text-blue-400 transition">
                  7. Cookies
                </a>
                <a href="#third-party" className="block rounded-lg px-3 py-2 hover:bg-white/5 hover:text-blue-400 transition">
                  8. Third-Party Links and Platforms
                </a>
                <a href="#children" className="block rounded-lg px-3 py-2 hover:bg-white/5 hover:text-blue-400 transition">
                  9. Children's Privacy
                </a>
                <a href="#contact" className="block rounded-lg px-3 py-2 hover:bg-white/5 hover:text-blue-400 transition">
                  10. Contact Us
                </a>
                <a href="#changes" className="block rounded-lg px-3 py-2 hover:bg-white/5 hover:text-blue-400 transition">
                  11. Changes to This Policy
                </a>
              </nav>
            </div>
          </aside>


          {/* Policy */}
          <div className="space-y-7">

            {/* Introduction */}
            <section className="rounded-3xl border border-white/10 bg-white/[0.035] p-7 sm:p-9 shadow-2xl shadow-black/10">
              <p className="text-lg leading-8 text-slate-300">
                Shuprha Digital Marketing ("Shuprha", "we", "us", or "our") is
                a digital marketing agency based in Pune, Maharashtra, India,
                offering services including Search Engine Optimization (SEO),
                social media management, web development, CRM tools, landing
                page design, and paid advertising. This Privacy Policy explains
                how we collect, use, disclose, and protect information when you
                visit our website (shuprha.com), engage us as a client, or
                otherwise interact with us.
              </p>

              <div className="mt-7 rounded-2xl border border-blue-400/20 bg-blue-500/[0.07] p-5">
                <p className="leading-7 text-slate-300">
                  By using our website or services, you agree to the practices
                  described in this Policy. If you do not agree, please do not
                  use our website or services.
                </p>
              </div>
            </section>


            {/* 1 */}
            <section
              id="information"
              className="scroll-mt-28 rounded-3xl border border-white/10 bg-white/[0.035] p-7 sm:p-9"
            >
              <SectionHeading number="01" title="Information We Collect" />

              <div className="space-y-8">

                <PolicySubheading title="1.1 Information You Provide to Us" />

                <PolicyList
                  items={[
                    'Contact details: name, email address, phone number, company name, and job title, submitted via contact forms, emails, or during onboarding.',
                    'Business information: details about your company, products, services, target audience, and marketing goals shared for the purpose of delivering our services.',
                    'Account credentials: login access you provide to platforms such as Google Search Console, Google Analytics, social media accounts, website CMS (e.g., WordPress), or advertising accounts, shared for the purpose of performing agreed work.',
                    'Payment and billing information: billing address and invoicing details. We do not directly store full payment card details; these are processed by third-party payment processors.',
                    'Communications: records of correspondence, meeting notes, and support requests.',
                  ]}
                />

                <PolicySubheading title="1.2 Information Collected Automatically" />

                <PolicyList
                  items={[
                    'Usage data: pages visited, time spent, links clicked, referring URLs, and browser/device information, collected via cookies and analytics tools such as Google Analytics.',
                    'Technical data: IP address, browser type, operating system, and general location (city/region level).',
                    'Cookies and similar technologies: used to operate our website, remember preferences, and understand how visitors use our site. You can control cookies through your browser settings.',
                  ]}
                />

                <PolicySubheading title="1.3 Information from Third Parties" />

                <PolicyList
                  items={[
                    'Data from advertising platforms (e.g., Meta Ads, Google Ads) and social media platforms when managing campaigns on your behalf.',
                    'Data from analytics and SEO tools (e.g., Google Search Console, Google Analytics, third-party SEO software) used to deliver and report on services.',
                  ]}
                />

              </div>
            </section>


            {/* 2 */}
            <section
              id="use"
              className="scroll-mt-28 rounded-3xl border border-white/10 bg-white/[0.035] p-7 sm:p-9"
            >
              <SectionHeading number="02" title="How We Use Your Information" />

              <p className="mb-5 text-slate-400">
                We use the information we collect to:
              </p>

              <PolicyList
                items={[
                  'Deliver, manage, and improve the SEO, social media, web development, CRM, landing page, and advertising services you have engaged us for.',
                  'Communicate with you about projects, proposals, invoices, and support requests.',
                  'Prepare performance reports and analytics (e.g., SEO audits, monthly reports, campaign results).',
                  'Operate, maintain, and improve our website and internal tools.',
                  'Send updates, marketing communications, or promotional offers, where you have consented to receive them.',
                  'Comply with legal, tax, and regulatory obligations.',
                  'Detect, investigate, and prevent fraud, security incidents, or misuse of our services.',
                ]}
              />
            </section>


            {/* 3 */}
            <section
              id="sharing"
              className="scroll-mt-28 rounded-3xl border border-white/10 bg-white/[0.035] p-7 sm:p-9"
            >
              <SectionHeading number="03" title="How We Share Your Information" />

              <p className="mb-5 text-slate-300">
                We do not sell your personal information. We may share information in the following circumstances:
              </p>

              <PolicyList
                items={[
                  'Service providers: third-party tools and platforms we use to deliver services, such as Google (Analytics, Search Console, Ads), Meta, Canva, WordPress hosting providers, CRM platforms, and payment processors.',
                  'Team members and contractors: individuals working on your project under confidentiality obligations.',
                  'Legal requirements: where disclosure is required by law, regulation, legal process, or governmental request.',
                  'Business transfers: in connection with a merger, acquisition, or sale of business assets, subject to confidentiality commitments.',
                  'With your consent: any other sharing will be done only with your explicit permission.',
                ]}
              />
            </section>


            {/* 4 */}
            <section
              id="retention"
              className="scroll-mt-28 rounded-3xl border border-white/10 bg-white/[0.035] p-7 sm:p-9"
            >
              <SectionHeading number="04" title="Data Retention" />

              <p className="leading-8 text-slate-300">
                We retain personal and business information for as long as
                necessary to provide our services, maintain business records,
                comply with legal and tax obligations, and resolve disputes.
                Client account access credentials are retained only for the
                duration of the active engagement and are deleted or revoked
                upon request or contract termination, unless a longer retention
                period is required by law.
              </p>
            </section>


            {/* 5 */}
            <section
              id="security"
              className="scroll-mt-28 rounded-3xl border border-white/10 bg-white/[0.035] p-7 sm:p-9"
            >
              <SectionHeading number="05" title="Data Security" />

              <p className="leading-8 text-slate-300">
                We implement reasonable technical and organizational measures
                to protect your information against unauthorized access,
                alteration, disclosure, or destruction, including restricted
                access to client accounts, secure storage of credentials, and
                use of reputable third-party platforms. However, no method of
                transmission or storage is completely secure, and we cannot
                guarantee absolute security.
              </p>
            </section>


            {/* 6 */}
            <section
              id="rights"
              className="scroll-mt-28 rounded-3xl border border-white/10 bg-white/[0.035] p-7 sm:p-9"
            >
              <SectionHeading number="06" title="Your Rights and Choices" />

              <p className="mb-5 text-slate-400">
                Depending on applicable law, including India's Digital Personal Data Protection Act, 2023 (DPDPA), you may have the right to:
              </p>

              <PolicyList
                items={[
                  'Access the personal information we hold about you.',
                  'Request correction of inaccurate or incomplete information.',
                  'Request deletion of your personal information, subject to legal and contractual retention requirements.',
                  'Withdraw consent for marketing communications or specific processing activities at any time.',
                  'Raise a grievance regarding how your information is handled.',
                ]}
              />

              <div className="mt-7 rounded-2xl border border-white/10 bg-slate-900/60 p-5">
                <p className="leading-7 text-slate-300">
                  To exercise any of these rights, please contact us using the details in Section 10.
                </p>
              </div>
            </section>


            {/* 7 */}
            <section
              id="cookies"
              className="scroll-mt-28 rounded-3xl border border-white/10 bg-white/[0.035] p-7 sm:p-9"
            >
              <SectionHeading number="07" title="Cookies" />

              <p className="leading-8 text-slate-300">
                Our website uses cookies and similar tracking technologies to
                enhance user experience and analyze site traffic. You can manage
                or disable cookies through your browser settings; note that
                disabling cookies may affect the functionality of our website.
              </p>
            </section>


            {/* 8 */}
            <section
              id="third-party"
              className="scroll-mt-28 rounded-3xl border border-white/10 bg-white/[0.035] p-7 sm:p-9"
            >
              <SectionHeading number="08" title="Third-Party Links and Platforms" />

              <p className="leading-8 text-slate-300">
                Our website and services may contain links to third-party
                websites or involve integration with third-party platforms
                (such as social media networks, Google services, or advertising
                platforms). We are not responsible for the privacy practices of
                these third parties. We encourage you to review their respective
                privacy policies.
              </p>
            </section>


            {/* 9 */}
            <section
              id="children"
              className="scroll-mt-28 rounded-3xl border border-white/10 bg-white/[0.035] p-7 sm:p-9"
            >
              <SectionHeading number="09" title="Children's Privacy" />

              <p className="leading-8 text-slate-300">
                Our website and services are intended for businesses and
                individuals aged 18 and above. We do not knowingly collect
                personal information from children.
              </p>
            </section>


            {/* 10 */}
            <section
              id="contact"
              className="scroll-mt-28 rounded-3xl border border-blue-400/20 bg-gradient-to-br from-blue-500/[0.08] to-violet-500/[0.06] p-7 sm:p-9"
            >
              <SectionHeading number="10" title="Contact Us" />

              <p className="mb-6 text-slate-300">
                If you have questions, concerns, or requests regarding this
                Privacy Policy or how your information is handled, please contact us:
              </p>

              <div className="grid sm:grid-cols-2 gap-4">

                <ContactItem
                  label="Business"
                  value="Shuprha Digital Marketing"
                />

                <ContactItem
                  label="Location"
                  value="Pune, Maharashtra, India"
                />

                <ContactItem
                  label="Website"
                  value="https://shuprha.com/"
                  href="https://shuprha.com/"
                />

                <ContactItem
                  label="Email"
                  value="premwaghmare88560@gmail.com"
                  href="mailto:premwaghmare88560@gmail.com"
                />

                <ContactItem
                  label="Phone"
                  value="+91 8856076018"
                  href="tel:+918856076018"
                />

              </div>
            </section>


            {/* 11 */}
            <section
              id="changes"
              className="scroll-mt-28 rounded-3xl border border-white/10 bg-white/[0.035] p-7 sm:p-9"
            >
              <SectionHeading number="11" title="Changes to This Policy" />

              <p className="leading-8 text-slate-300">
                We may update this Privacy Policy from time to time to reflect
                changes in our practices, services, or legal requirements. The
                "Last Updated" date at the top of this Policy indicates when it
                was last revised. We encourage you to review this Policy
                periodically.
              </p>

              <div className="mt-8 border-t border-white/10 pt-6">
                <p className="text-sm leading-7 text-slate-500">
                  This document is a general template and does not constitute
                  legal advice. We recommend a review by a legal professional
                  familiar with the Digital Personal Data Protection Act, 2023
                  (India) before publishing.
                </p>
              </div>
            </section>

          </div>
        </div>
      </section>


      {/* Bottom */}
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

const SectionHeading = ({ number, title }) => {
  return (
    <div className="flex items-start gap-4 mb-7">
      <div className="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 border border-blue-400/20 text-xs font-bold text-blue-400">
        {number}
      </div>

      <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white pt-1">
        {title}
      </h2>
    </div>
  );
};


const PolicySubheading = ({ title }) => {
  return (
    <h3 className="text-lg font-semibold text-white border-l-2 border-blue-500 pl-4">
      {title}
    </h3>
  );
};


const PolicyList = ({ items }) => {
  return (
    <ul className="space-y-4">
      {items.map((item, index) => (
        <li
          key={index}
          className="flex items-start gap-4 leading-7 text-slate-300"
        >
          <span className="mt-3 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-400" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
};


const ContactItem = ({ label, value, href }) => {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/10 p-5">
      <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
        {label}
      </p>

      {href ? (
        <a
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
          className="break-all text-slate-200 hover:text-blue-400 transition"
        >
          {value}
        </a>
      ) : (
        <p className="text-slate-200">
          {value}
        </p>
      )}
    </div>
  );
};


export default PrivacyPolicy;