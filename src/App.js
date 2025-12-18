import React, { useState, useEffect } from "react";
import Navbar from "./navbar.jsx";
import "./App.css";
import pamelaPic from "./media/Pamela.jpg";
import officePic from "./media/office.jpeg";
import pamelaPic2 from "./media/Pamela2.jpg";
import Splash from "./Splash.jsx";

export default function App() {
  const [active, setActive] = useState("hero");

  const [showSplash, setShowSplash] = useState(true);

  if (showSplash) {
    return <Splash onDismiss={() => setShowSplash(false)} />;
  }

  return (
    <div className="App">
      <Navbar />

      {/* HOME / HERO */}
      {/* HOME / HERO */}
      <section id="hero" className="hero-section">
        <div className="hero-overlay">
          <h1>
            Pamela Goldsteen, LCSW Experiential,
            <br /> Somatic Psychotherapy
          </h1>
          <h2>Get your body into the conversation</h2>
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className={`section ${active === "about" ? "show" : "hide"}`}
        tabIndex="-1"
      >
        <h2>About Me</h2>
        <p>
          As a licensed clinical social worker in New York and New Jersey, I
          help people navigate life&#39;s toughest challenges. I have advanced
          training in modalities like EMDR, Internal Family Systems (IFS), and
          Somatic Experiencing, which allows me to offer an integrative,
          body-centered approach to healing. Before becoming a psychotherapist,
          I earned a doctorate in Art History and worked in non- profit
          fundraising. This background gave me a deep appreciation for the
          unique stories we all carry and the importance of finding our purpose.
          My past work taught me how to guide people through complex narratives
          and arrive at a cohesive story that gives context to their
          experiences, a skill that I now bring to my clinical practice.
        </p>
        <p>
          Prior to opening my practice, I worked in hospital and community
          mental health settings.
        </p>
        <p>
          I practice in-person and virtually in Montclair New Jersey. I see
          clients at the offices of the{" "}
          <a
            href="https://mindbodytherapycollective.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            MindBody Therapy Collective
          </a>
          , which is home to a group of dedicated psychotherapists and
          complementary healing professionals.
        </p>
        <h3>Common Concerns I Work With</h3>
        <p>
          <p>
            I believe that traumatic events are at the root of much psychic
            distress and addressing them is the best way to alleviate
            stress-induced conditions. I help individuals, couples, and families
            find healing and integration through specialized somatic therapies.
            I can work successfully with you to alleviate:
          </p>

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
            <li>
              Parents and families of neurodivergent and developmentally
              disabled children
            </li>
          </ul>
        </p>
        <h3>Group Psychotherapy</h3>
        <p>
          <p>
            Group therapy is a powerful and more affordable way to heal. It
            offers a safe and confidential space where you can connect with
            others who share similar struggles and realize you are not alone. In
            a group setting, you'll have the chance to normalize your
            experiences, practice new ways of relating to others, and learn from
            a supportive community. It's a place for both individual growth and
            shared understanding. I offer therapeutic support groups for:
          </p>

          <ul>
            <li>Parents of children with special needs</li>
            <li>Trauma-processing groups for adults</li>
          </ul>
        </p>
        <p>
          <a href="tel:+2016144031" className="phone-link">
            Call to learn more about groups.
          </a>
        </p>
        <h3>EMDR Consultation</h3>
        <p>
          As an EMDRIA Certified EMDR clinician and Consultant-in-Training I
          provide support to clinicians working toward EMDR certification.
        </p>
      </section>

      <hr></hr>

      {/* MY APPROACH */}
      <section
        id="services"
        className={`section ${active === "services" ? "show" : "hide"}`}
        tabIndex="-1"
      >
        <h2>My Approach</h2>
        <img src={officePic} alt="Pamela Goldsteen" className="office-pic" />

        <p>
          <p>
            I specialize in experiential somatic modalities that gently and
            effectively support healing and integration of the nervous system.
            This neurobiological approach is highly effective at alleviating
            trauma and stress disorders including PTSD, developmental and
            relational trauma, depression, anxiety, OCD, chronic pain, and
            grief.
          </p>

          <p>
            If you’ve had the experience of knowing intellectually that a
            behavior does not serve you, yet remain powerless to change it, it
            may be driven by old emotional beliefs operating out of your
            conscious awareness. Somatic, experiential psychotherapy can help
            bridge the gap between what we know to be true and what we actually
            do.
          </p>

          <p>
            Traumatic events are whole body experiences, held by the entire body
            and not just the thinking brain. I will teach you to track your
            nervous system and create a conversation between your thinking brain
            and your body. Together we will facilitate experiences in the
            treatment room to gently support you to get in touch with and then
            update subconsciously held material that drives deeply ingrained
            behaviors that are harmful to ourselves and our relationships.
          </p>

          <p>
            All the modalities I am trained in, including EMDR, Internal Family
            Systems, Somatic Experiencing and Coherence Psychotherapy are
            effective ways to support memory reconsolidation, which is the basis
            for all effective trauma treatment. When memory consolidation is
            successful, it creates permanent, effortless change in the behaviors
            and beliefs that no longer serve you.
          </p>
        </p>
      </section>

      <hr></hr>

      <section
        id="rates"
        className={`section ${active === "rates" ? "show" : "hide"}`}
        tabIndex="-1"
      >
        <h2>Rates and Insurance</h2>

        <p>
          I am an out-of-network provider and am not paneled with any insurance
          companies. If you have out-of-network benefits I will provide you with
          a monthly superbill to submit to your insurer for out-of-network
          reimbursement.
        </p>

        <p>
          Here’s what to ask your insurance company to confirm your coverage:
        </p>

        <ol>
          <li>Do I have out of network coverage for mental health services?</li>
          <li>If yes, what is my deductible?</li>
          <li>
            When does my deductible renew? (For most policies this is January 1,
            but not all)
          </li>
          <li>
            How much do you cover for CPT codes 90791 (intake examination),
            90834 (for individuals) and 90847 (for couples)?
          </li>
        </ol>

        <p>My fee is $275 for a 50 minute session.</p>
      </section>
      <hr></hr>

      {/* CONTACT */}
      <section
        id="contact"
        className={`section ${active === "contact" ? "show" : "hide"}`}
        tabIndex="-1"
      >
        <h2>Contact</h2>
        <img src={pamelaPic2} alt="Pamela Goldsteen" className="profile-pic" />

        <p>
          Email:{" "}
          <a href="mailto:pamelagoldsteenlcsw@gmail.com">
            pamelagoldsteenlcsw@gmail.com
          </a>
          <br></br>
          <a href="tel:+2016144031" className="phone-link">
            (201)-614-4031
          </a>
          <br></br>
          70 Park Street, Suite 206, Montclair, NJ
        </p>
      </section>

      <footer>
        <p>© {new Date().getFullYear()} Pamela Goldsteen</p>
      </footer>
    </div>
  );
}
