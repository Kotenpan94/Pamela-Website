import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import pamelaPortrait from "../media/Pamela.jpg";

export default function Home() {
  return (
    <>
      <SEO
        title="Home"
        description="Experiential somatic psychotherapy in Montclair, NJ and telehealth throughout NY & NJ. Trauma recovery, EMDR, IFS, and group therapy with Pamela Goldsteen, LCSW."
      />

      {/* ============ HERO ============ */}
      <div className="section-hero">
        <svg className="hero-deco" viewBox="0 0 1100 700" preserveAspectRatio="xMaxYMid slice" aria-hidden="true">
          <circle cx="950" cy="160" r="120" fill="none" stroke="var(--clay)" strokeOpacity="0.35" strokeWidth="1.5" />
          <circle cx="1010" cy="330" r="60" fill="var(--moss)" fillOpacity="0.16" />
          <circle cx="880" cy="470" r="8" fill="var(--clay)" fillOpacity="0.55" />
          <circle cx="1040" cy="500" r="5" fill="var(--clay)" fillOpacity="0.5" />
          <path d="M840 610 C 900 560, 980 560, 1040 610" fill="none" stroke="var(--moss)" strokeOpacity="0.4" strokeWidth="1.5" />
        </svg>
        <div className="wrap">
          <div className="hero-inner">
            <span className="eyebrow">Somatic Psychotherapy &middot; Montclair, NJ &amp; Telehealth</span>
            <h1>Get your body into the conversation.</h1>
            <p className="hero-sub">Experiential, body-centered psychotherapy for trauma, anxiety, and the nervous system's long memory of what happened.</p>
            <p className="hero-meta">In-person in Montclair, NJ &nbsp;&middot;&nbsp; Telehealth throughout NY &amp; NJ</p>
            <div className="hero-actions">
              <Link className="btn" to="/contact">Book a Free Consultation</Link>
              <span className="note">15-minute call &middot; no cost</span>
            </div>
          </div>
        </div>
      </div>

      {/* ============ WELCOME / ABOUT TEASER ============ */}
      <div className="section-welcome">
        <div className="wrap welcome-grid">
          <img src={pamelaPortrait} alt="Pamela Goldsteen, LCSW" className="portrait-img" />
          <div className="welcome-text">
            <span className="eyebrow">Hi, I'm Pamela</span>
            <h2>A collaborative, body-centered approach to healing</h2>
            <blockquote>&ldquo;Traumatic events are whole-body experiences &mdash; held by the entire body, not just the thinking brain.&rdquo;</blockquote>
            <p className="body-text">As a licensed clinical social worker in New York and New Jersey, I bring advanced training in EMDR, Internal Family Systems, and Somatic Experiencing to an integrative, body-centered approach to healing, for individuals, couples, and families.</p>
            <p className="credential-line">
              <strong>LCSW</strong> licensed in NY &amp; NJ &middot; <strong>EMDRIA Certified</strong> EMDR Clinician &amp; Consultant-in-Training &middot; <strong>Internal Family Systems</strong> &middot; <strong>Somatic Experiencing Practitioner (SEP)</strong>
            </p>
            <Link className="link-arrow" to="/about">More About Me &rarr;</Link>
          </div>
        </div>
      </div>

      {/* ============ SPECIALTIES ============ */}
      <div className="section-specialties">
        <div className="wrap">
          <div className="specialties-head">
            <span className="eyebrow">How I can help</span>
            <h2>Three ways we might work together</h2>
          </div>
          <div className="card-grid">

            <div className="card">
              <div className="card-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--moss)" strokeWidth="1.6">
                  <path d="M12 3v6M12 15v6M4.2 7.5l5.2 3M14.6 13.5l5.2 3M4.2 16.5l5.2-3M14.6 10.5l5.2-3" strokeLinecap="round" />
                </svg>
              </div>
              <h3>Trauma &amp; PTSD Recovery</h3>
              <p>Somatic Experiencing, EMDR, and IFS to help your nervous system finish what it started.</p>
              <Link className="link-arrow" to="/services">Learn More &rarr;</Link>
            </div>

            <div className="card">
              <div className="card-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--moss)" strokeWidth="1.6">
                  <circle cx="12" cy="12" r="7" />
                  <path d="M12 8v4l2.5 2.5" strokeLinecap="round" />
                </svg>
              </div>
              <h3>Anxiety &amp; Emotional Regulation</h3>
              <p>Body-centered, integrative care for chronic stress, anxiety, panic, and relationship strain.</p>
              <Link className="link-arrow" to="/services">Learn More &rarr;</Link>
            </div>

            <div className="card">
              <div className="card-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--moss)" strokeWidth="1.6">
                  <circle cx="8" cy="9" r="3" />
                  <circle cx="16" cy="9" r="3" />
                  <path d="M3 20c.5-3 2.5-5 5-5s4.5 2 5 5M13 20c.4-2.4 2-4.2 4-4.8" strokeLinecap="round" />
                </svg>
              </div>
              <h3>Couples, Family &amp; Group</h3>
              <p>Relational, trauma-informed support for the people who hold you.</p>
              <Link className="link-arrow" to="/services">Learn More &rarr;</Link>
            </div>

          </div>
        </div>
      </div>

      {/* ============ CTA BANNER ============ */}
      <div className="section-cta">
        <div className="wrap cta-inner">
          <h2>Ready to start your healing journey?</h2>
          <p>You don't have to do this alone. Contact me to schedule a free 15-minute consultation.</p>
          <Link className="btn" to="/contact">Schedule Your Consultation</Link>
        </div>
      </div>
    </>
  );
}
