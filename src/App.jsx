import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ServicesPage from './pages/ServicesPage'
import about from './pages/About'
import WhyUs from './pages/WhyUs'
import ContactButton from './pages/Contactbutton'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import DigitalMarketing from './pages/DigitalMarketing'
import Branding from './pages/Branding'
import SocialMedia from './pages/SocialMedia'
import SEO from './pages/SEO'
import PrivacyPolicy from './pages/PrivacyPolicy'
import Terms from './pages/Terms'
import Cookies from './pages/Cookies'
import Businesses from './pages/businesses'
import ScrollToTop from './components/ScrollToTop'

// ✅ Home Page Component
const Home = () => {
  return (
    <main>
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <Contact />
    </main>
  )
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/businesses" element={<Businesses />} />
          <Route path="/digital-marketing" element={<DigitalMarketing />} />
          <Route path="/branding" element={<Branding />} />
          <Route path="/social-media" element={<SocialMedia />} />
          <Route path="/SEO" element={<SEO />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<Terms />} />
          <Route path="/cookie-policy" element={<Cookies />} />
          <Route path="/Contact" element={<ContactButton />} />
          <Route path="/Services" element={<ServicesPage />} />
<Route path="/About" element={<About />} />
<Route path="/why-us" element={<WhyUs />} />
        </Routes>

        <ScrollToTop />
        <div className="min-h-screen flex flex-col bg-background text-foreground">
  <Navbar />

  <div className="flex-1 pb-20">   {/* 👈 ADD THIS */}
    <Routes>
      ...
    </Routes>
  </div>

  <Footer />
</div>
        <Footer />
      </div>
    </Router>
  )
}

export default App