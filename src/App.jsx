import { HashRouter as Router, Link, Route, Routes } from 'react-router-dom'
import './App.css'

const services = [
  {
    title: 'Technical Consulting',
    description:
      'Strategy, architecture, and proof-of-concept development for R&D teams in AI, materials, biology, and computation.',
  },
  {
    title: 'Training & Workshops',
    description:
      'Hands-on programs in first principles modeling, experimental design, reproducibility, and innovation pipeline development.',
  },
  {
    title: 'Mentorship',
    description:
      'One-on-one guidance with senior researchers and industry experts to navigate scientific and career pathways.',
  },
  {
    title: 'Sponsorship & Grants',
    description:
      'Financial support for high-impact projects, early-career investigators, and interdisciplinary teams.',
  },
]

const packagesData = [
  {
    id: 1,
    name: 'Supporter',
    price: 150,
    benefits: ['Research newsletter', '1 mentor hour', 'Recognition on site'],
  },
  {
    id: 2,
    name: 'Catalyst',
    price: 500,
    benefits: ['Direct project feedback', '2 mentor hours', 'Quarterly report'],
  },
  {
    id: 3,
    name: 'Pioneer',
    price: 1200,
    benefits: ['Custom research partnership', 'Monthly cohort sessions', 'Showcase invite'],
  },
]

function Header() {
  return (
    <header className="site-header">
      <div className="container header-grid">
        <Link to="/" className="logo">
          First Principles Fellowship
        </Link>
        <nav className="main-nav open">
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/programs">Programs</Link>
          <Link to="/sponsorship">Sponsorship</Link>
          <Link className="cta" to="/contact">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <p>© 2026 First Principles Fellowship. Built for research excellence.</p>
        <div className="footer-links">
          <Link to="/privacy">Privacy</Link>
          <Link to="/terms">Terms</Link>
          <Link to="/faq">FAQ</Link>
        </div>
      </div>
    </footer>
  )
}

function Home() {
  return (
    <section className="hero" id="home">
      <div className="container hero-content">
        <h1>
          Accelerating scientific discovery by returning to first principles
        </h1>
        <p>
          Technical consulting, career mentorship, training, and sponsorship
          programs for research innovators and deep technology teams.
        </p>
        <div className="hero-actions">
          <Link to="/services" className="btn btn-primary">
            Explore Services
          </Link>
          <Link to="/sponsorship" className="btn btn-secondary">
            Support Researchers
          </Link>
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section className="info-cards" id="about">
      <div className="container">
        <h2>About First Principles Fellowship</h2>
        <p>
          We are a research & development hub for scientists, engineers,
          entrepreneurs, and institutions. We enable breakthroughs with practical
          programs, collaboration, and investment in ideas that matter.
        </p>
        <div className="card-grid">
          <article className="card">
            <h3>Vision</h3>
            <p>
              Empower the next generation of scientific leaders to build resilient,
              principled solutions across disciplines.
            </p>
          </article>
          <article className="card">
            <h3>Mission</h3>
            <p>
              Bridge research, funding, and mentorship to reduce failure risk and
              accelerate time-to-insight.
            </p>
          </article>
          <article className="card">
            <h3>Values</h3>
            <p>
              Curiosity, rigor, integrity, and practical experimentation drive
              everything we do.
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}

function Services() {
  return (
    <section className="services-section" id="services">
      <div className="container">
        <h2>Core Offerings</h2>
        <div className="service-grid">
          {services.map((service) => (
            <article key={service.title} className="service-card">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Programs() {
  return (
    <section className="programs" id="programs">
      <div className="container">
        <h2>Programs in Action</h2>
        <div className="timeline">
          <div className="timeline-point">
            <strong>Research Residency</strong>
            <span>Tailored lab consultation and cross-sector partnerships.</span>
          </div>
          <div className="timeline-point">
            <strong>Founders Fellowship</strong>
            <span>Curated cohort for early-stage deep tech founders + mentors.</span>
          </div>
          <div className="timeline-point">
            <strong>Innovation Bootcamps</strong>
            <span>6-week sprint from hypothesis to prototype.</span>
          </div>
        </div>
      </div>
    </section>
  )
}

function Sponsorship() {
  return (
    <section className="shop" id="shop">
      <div className="container">
        <h2>Sponsorship Packages</h2>
        <p>
          These packages are currently informational only. To sponsor our work, please reach out by email.
        </p>
        <div className="product-grid">
          {packagesData.map((item) => (
            <div key={item.id} className="product-card">
              <h3>{item.name}</h3>
              <p>${item.price} CAD (indicative only)</p>
              <ul>
                {item.benefits.map((benefit, idx) => (
                  <li key={idx}>{benefit}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="contact-summary" style={{ marginTop: '1rem', padding: '1rem', border: '1px solid #334155', borderRadius: '10px', background: '#0f172a' }}>
          <h3>How to Sponsor</h3>
          <p>Send an email to <a href="mailto:info@firstprinciplesfellowship.org">info@firstprinciplesfellowship.org</a> with the package name and your organization details.</p>
          <p>We’ll follow up with an invoice and next steps.</p>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2>Contact & Join</h2>
        <p>
          Ready to collaborate? We’re actively engaging with research institutions and
          funders worldwide.
        </p>
        <div className="contact-info" style={{ display: 'grid', gap: '12px' }}>
          <p>
            Email: <a href="mailto:info@firstprinciplesfellowship.org">info@firstprinciplesfellowship.org</a>
          </p>
          <p>Phone: +1 (555) 123-4567</p>
          <p>Address: 123 Research Way, Innovation City, Country</p>
          <p>
            Describe your research area, required support, and timeline. We will contact
            you with proposal options and next steps.
          </p>
        </div>
      </div>
    </section>
  )
}

function App() {

  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/sponsorship" element={<Sponsorship />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="*"
              element={
                <section className="container" style={{ padding: '4rem 0' }}>
                  <h2>Page not found</h2>
                  <p>The page you are looking for does not exist.</p>
                  <Link to="/" className="btn btn-primary">
                    Return Home
                  </Link>
                </section>
              }
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
