import SEO from "../components/SEO";
import pamelaPic2 from "../media/Pamela2.jpg";

export default function Contact() {
  return (
    <>
      <SEO
        title="Contact"
        description="Get in touch with Pamela Goldsteen, LCSW — in-person in Montclair, NJ or by telehealth throughout NY & NJ. Free 15-minute consultation available."
      />

      <div className="page-hero">
        <div className="wrap">
          <span className="eyebrow">Get in Touch</span>
          <h1>Let's talk</h1>
          <p>Contact me for a free 15-minute consultation.</p>
        </div>
      </div>

      <section className="prose-section">
        <div className="wrap prose-grid">
          <img src={pamelaPic2} alt="Pamela Goldsteen, LCSW" className="portrait-photo" />
          <div className="prose">
            <p>
              Email:{" "}
              <a href="mailto:pamelagoldsteenlcsw@gmail.com" className="text-link">
                pamelagoldsteenlcsw@gmail.com
              </a>
            </p>
            <p>
              Phone:{" "}
              <a href="tel:+12016144031" className="text-link">(201) 614-4031</a>
            </p>
            <p>70 Park Street, Suite 206<br />Montclair, NJ 07042</p>
            <p>Telehealth available throughout New York &amp; New Jersey.</p>

            <div className="callout">
              <p><strong>Office</strong></p>
              <p>Sessions are held at the offices of the{" "}
                <a href="https://mindbodytherapycollective.com" target="_blank" rel="noopener noreferrer" className="text-link">
                  MindBody Therapy Collective
                </a>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
