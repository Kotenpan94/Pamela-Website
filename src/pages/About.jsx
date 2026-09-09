import SEO from "../components/SEO";
import pamelaPortrait from "../media/Pamela.jpg";

export default function About() {
  return (
    <>
      <SEO
        title="About"
        description="Meet Pamela Goldsteen, LCSW — a licensed clinical social worker in Montclair, NJ with advanced training in EMDR, Internal Family Systems, and Somatic Experiencing."
      />

      <div className="page-hero">
        <div className="wrap">
          <span className="eyebrow">About Pamela</span>
          <h1>A collaborative, body-centered approach to healing</h1>
        </div>
      </div>

      <section className="prose-section">
        <div className="wrap prose-grid">
          <img src={pamelaPortrait} alt="Pamela Goldsteen, LCSW" className="portrait-photo" />
          <div className="prose">
            <p>As a licensed clinical social worker in New York and New Jersey, I help people navigate life's toughest challenges. I have advanced training in modalities like EMDR, Internal Family Systems (IFS), and Somatic Experiencing, which allows me to offer an integrative, body-centered approach to healing.</p>
            <p>Before becoming a psychotherapist, I earned a doctorate in Art History and worked in non-profit fundraising. This background gave me a deep appreciation for the unique stories we all carry and the importance of finding our purpose. My past work taught me how to guide people through complex narratives and arrive at a cohesive story that gives context to their experiences, a skill I now bring to my clinical practice.</p>
            <p>Prior to opening my practice, I worked in hospital and community mental health settings.</p>
            <p>
              I practice in-person and virtually in Montclair, New Jersey. I see clients at the offices of the{" "}
              <a href="https://mindbodytherapycollective.com" target="_blank" rel="noopener noreferrer" className="text-link">
                MindBody Therapy Collective
              </a>
              , home to a group of dedicated psychotherapists and complementary healing professionals.
            </p>

            <h3>Common Concerns I Work With</h3>
            <p>I believe that traumatic events are at the root of much psychic distress, and addressing them is the best way to alleviate stress-induced conditions. I help individuals, couples, and families find healing and integration through specialized somatic therapies. I can work successfully with you to alleviate:</p>
            <ul>
              <li>Chronic Stress &amp; Tension</li>
              <li>Anxiety &amp; Panic Attacks</li>
              <li>Trauma Recovery (PTSD)</li>
              <li>Difficulty with Emotional Regulation</li>
              <li>Relationship Stress</li>
            </ul>
            <p>I also work with people who are:</p>
            <ul>
              <li>Survivors of abuse and neglect</li>
              <li>Adult children of parents with narcissistic traits</li>
              <li>Parents and families of neurodivergent and developmentally disabled children</li>
            </ul>

            <h3>EMDR Consultation</h3>
            <p>As an EMDRIA Certified EMDR clinician and Consultant-in-Training, I provide support to clinicians working toward EMDR certification.</p>
          </div>
        </div>
      </section>
    </>
  );
}
