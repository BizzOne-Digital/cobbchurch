import React from 'react';
import { Link } from 'react-router-dom';
import {
  FiUsers, FiPackage, FiHeart, FiPlay, FiArrowRight,
  FiBookOpen, FiAlertCircle, FiAward, FiGlobe
} from 'react-icons/fi';
import './Home.css';

const Home = () => {
  const features = [
    { icon: <FiUsers />, title: 'Connect Churches', desc: 'Building relationships and unity among pastors and churches across Cobb County.' },
    { icon: <FiPackage />, title: 'Share Resources', desc: 'Sharing tools, space, and support so no church has to carry the load alone.' },
    { icon: <FiHeart />, title: 'Serve Together', desc: 'Working together to meet needs and make a greater impact in our community.' },
  ];

  const whatWeDo = [
    { icon: <FiUsers />, title: 'Pastor & Church Connection', desc: 'Building relationships that lead to trust, unity, and collaboration.' },
    { icon: <FiPackage />, title: 'Resource Sharing Network', desc: 'Access and share resources, tools, and support.' },
    { icon: <FiHeart />, title: 'Community Outreach', desc: 'Partnering together to serve and meet real needs in our community.' },
    { icon: <FiPlay />, title: 'Pastor Stories & Testimonies', desc: 'Highlighting stories of impact and inspiring one another.' },
    { icon: <FiAward />, title: 'Leadership Development', desc: 'Equipping leaders to grow, lead well, and thrive.' },
    { icon: <FiGlobe />, title: 'Join the Network', desc: 'Easy onboarding and ongoing connection for every church.' },
  ];

  const testimonials = [
    {
      quote: 'When churches begin trusting one another and working together, the impact on the community becomes powerful.',
      author: 'Pastor Marcus D.',
      subtitle: 'Power of Partnership',
    },
    {
      quote: 'This network helped us connect with churches we never would have worked with otherwise.',
      author: 'Pastor Maria S.',
      subtitle: 'Stronger Together',
    },
    {
      quote: 'The vision is simple — stop competing and start collaborating.',
      author: 'Pastor James L.',
      subtitle: 'Impacting Our Community',
    },
  ];

  const stats = [
    { number: '100+', label: 'Churches Connected' },
    { number: '50+', label: 'Community Initiatives' },
    { number: '10K+', label: 'Lives Impacted' },
    { number: '1', label: 'Mission — Transforming Our Community' },
  ];

  return (
    <div className="home">

      {/* ── HERO ─────────────────────────────────────── */}
      <section
        className="hero home-hero"
        style={{ backgroundImage: "url('/images/hero.jpg')" }}
      >
        <div className="hero-overlay" />

        <div className="container hero-content">
          <div className="hero-inner">

            {/* Small logo icon */}
          <div className="logo-icon">
  <img src="/images/logo.png" alt="Cobb Church Network Logo" className="logo-img" />
</div>

            <p className="hero-eyebrow">
              An initiative of Cobb Pastors Alliance •{' '}
              <span>Powered by The Shepherds Table</span>
            </p>

            <h1 className="hero-title">
              Connecting Churches.
              <span className="text-gold">Strengthening Community.</span>
            </h1>

            <div className="hero-divider" />

            <p className="hero-subtitle">
              What could God do in our community if we truly moved together?
            </p>

            <p className="hero-description">
              A place where pastors and churches unite to share resources,
              serve together, and strengthen our community.
            </p>

            <div className="hero-actions">
              <Link to="/request-access" className="btn btn-primary btn-lg">
                <FiUsers /> Join the Network
              </Link>
              <Link to="/resources" className="btn btn-secondary btn-lg">
                <FiPackage /> Explore Resources
              </Link>
              <Link to="/pastor-stories" className="btn btn-outline-light btn-lg">
                <FiPlay /> Hear from Pastors
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ── FEATURES BAR ─────────────────────────────── */}
      <section className="features-bar">
        <div className="container">
          <div className="grid-3">
            {features.map((f, i) => (
              <div key={i} className="feature-item">
                <div className="feature-icon">{f.icon}</div>
                <div>
                  <h3>{f.title}</h3>
                  <p>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO WE ARE ───────────────────────────────── */}
      <section className="section who-we-are">
        <div className="who-grid">
          <div className="who-image">
  <img
    src="/images/why.png"
    alt="Cobb Church Network"
    className="who-img"
  />

  <div className="play-overlay">
    <div className="play-btn">
      <FiPlay size={26} />
    </div>
    <span>Watch Our Story</span>
  </div>
</div>
          <div className="who-content">
            <span className="section-label">Who We Are</span>
            <h2 className="section-title">
              Uniting Churches.<br />
              <span>Transforming Communities.</span>
            </h2>
            <div className="divider" />
            <p>
              The Cobb Church Network is a movement of pastors and churches committed
              to unity, collaboration, and lasting community impact.
            </p>
            <p>
              When churches move together, we can reach further, serve better,
              and change more lives for the Kingdom.
            </p>
            <Link to="/about" className="btn btn-navy" style={{ marginTop: '28px', alignSelf: 'flex-start' }}>
              Learn More About Us <FiArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHAT WE DO ───────────────────────────────── */}
      <section className="section bg-off-white">
        <div className="container text-center">
          <span className="section-label">What We Do</span>
          <h2 className="section-title">How We Serve the Network</h2>
          <div className="divider divider-center" />
          <div className="grid-3 what-we-do-grid" style={{ marginTop: '48px' }}>
            {whatWeDo.map((item, i) => (
              <div key={i} className="what-card">
                <div className="icon-box">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PASTOR STORIES ───────────────────────────── */}
      <section className="section pastor-stories-section">
        <div className="container">
          <div className="pastor-stories-header">
            <div className="pastor-intro-text">
              <span className="section-label">Hear from Pastors</span>
              <h2 className="section-title" style={{ fontSize: '1.9rem' }}>
                Real Stories.<br />Real Impact.
              </h2>
              <div className="divider" />
              <p>
                Real stories from pastors who are experiencing the power of
                unity and collaboration.
              </p>
              <Link to="/pastor-stories" className="btn btn-primary" style={{ marginTop: '8px' }}>
                Watch More Stories
              </Link>
            </div>

            <div className="pastor-videos-grid">
              {testimonials.map((t, i) => (
                <div key={i} className="pastor-video-card">
                  {/* Replace src with real thumbnail if available */}
                  <img
  src={`/images/pastor-${i + 1}.png`}
  alt={t.author}
  className="pastor-video-thumb"
/>
                  <div className="pastor-video-overlay">
                    <div className="pastor-play-btn">
                      <FiPlay size={18} />
                    </div>
                  </div>
                  <div className="pastor-video-info">
                    <strong>{t.author}</strong>
                    <span>{t.subtitle}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── VISION ───────────────────────────────────── */}
      <section className="section vision-section">
        <div className="container">
          <div className="vision-content text-center">
            <span className="section-label">The Vision</span>
            <h2 className="section-title text-white" style={{ color: '#fff' }}>
              We're Better Together.
            </h2>
            <div className="divider divider-center" style={{ background: '#d6a34a' }} />
            <p className="vision-text">
              What could happen if churches across Cobb County truly moved together?
              Not just gathering occasionally. Not just knowing one another's names.
              But actually collaborating. Actually supporting one another.
              Actually responding together when our community hurts.
            </p>
            <p className="vision-text">
              Cobb Church Network was created to help pastors and churches build real connection,
              practical partnership, and visible unity. This is more than a website.
              This is a movement toward stronger churches and a stronger community.
            </p>
            <div className="vision-actions">
              <Link to="/request-access" className="btn btn-primary btn-lg">Request Access</Link>
              <Link to="/contact" className="btn btn-outline-light btn-lg">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ────────────────────────────────────── */}
      <section className="stats-bar">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '32px' }}>
            <h2 style={{
              color: '#07172f',
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 900,
              textTransform: 'uppercase',
              fontSize: 'clamp(1.4rem, 3vw, 2rem)',
              letterSpacing: '0.5px',
            }}>
              Together, We Make an Impact
            </h2>
          </div>
          <div className="grid-4">
            {stats.map((s, i) => (
              <div key={i} className="stat-item">
                <span className="stat-number">{s.number}</span>
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────── */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-box">
            <div className="cta-left">
              <h2>
                Ready to Be Part of<br />
                <span className="text-gold">Something Bigger?</span>
              </h2>
            </div>
            <div className="cta-right">
              <p>
                Join a growing network of pastors and churches committed to
                moving together for Kingdom impact.
              </p>
              <div className="cta-btns">
                <Link to="/request-access" className="btn btn-primary">
                  Join the Network
                </Link>
                <Link to="/donate" className="btn btn-outline-light">
                  Support the Mission
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;