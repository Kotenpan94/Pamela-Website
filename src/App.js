import React, { useState, useEffect } from "react";
import Navbar from "./navbar.jsx";
import "./App.css";
import pamelaPic from "./media/Pamela.jpg";
import officePic from "./media/office.jpeg";
import pamelaPic2 from "./media/Pamela2.jpg";

export default function App() {
  const [active, setActive] = useState("hero");

  // optional: move keyboard focus to the newly shown section
  useEffect(() => {
    const el = document.getElementById(active);
    if (el) el.focus();
  }, [active]);

  return (
    <div className="App">
      <Navbar active={active} onNav={setActive} />

      {/* HERO */}
      <section
        id="hero"
        className={`section ${active === "hero" ? "show" : "hide"}`}
        tabIndex="-1"
      >
        <img src={pamelaPic} alt="Pamela Goldsteen" className="profile-pic" />
        <h1>Hi, I&apos;m Pamela Goldsteen</h1>
        <p>
          I’m a social worker dedicated to helping individuals and families find
          healing, support, and growth.
        </p>
        <button onClick={() => setActive("contact")}>Contact Me</button>
      </section>

      <hr></hr>

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
          My past work taught me how to guide people through complex narratives,
          a skill that I now bring to my clinical practice.
        </p>
        <p>
          Prior to opening my practice, I worked in hospital and community
          mental health settings. Before becoming a psychotherapist I received a
          doctorate in Art History and worked in non- profit fundraising. I
          practice in-person and virtually in Montclair New Jersey. I see
          clients at the offices of the{" "}
          <a
            href="https://mindbodytherapycollective.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            MindBody Therapy Collective
          </a>
          , , which is home to a group of dedicated psychotherapists and
          complementary healing professionals.
        </p>
        <h3>Who I Treat</h3>
        <h4>Individuals and Couples</h4>
        <p>
          I work with adults, families and couples throughout the life span. I
          draw on my experience as  a parent of children with special education
          needs to support them in managing the stressors associated with
          raising neurodivergent children whose needs are not well supported in
          a traditional setting.
        </p>
        <h3>Group Psychotherapy</h3>
        <p>
          Group psychotherapy is a powerful, cost-efficient vehicle for healing.
          Group therapy provides a place to help you recognize you are not alone
          in your suffering, help normalize life challenges, gain skills to
          navigate difficult emotions, recognize your strengths and more
          effectively advocate for your needs. You will learn to give and
          receive support from others who are experiencing similar challenges. I
          offer therapeutic support groups for parents of children with special
          needs and trauma-processing groups for adults.
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
          I specialize in experiential somatic modalities that gently and
          effectively support healing and integration of the nervous system.
          This approach is highly effective at alleviating trauma and stress
          disorders including PTSD, developmental and relational trauma,
          depression, anxiety, OCD, chronic pain, and grief. <br></br> If you’ve
          had the experience of knowing intellectually that a behavior does not
          serve you, yet remain powerless to change it, it may be driven by old
          emotional beliefs operating out of your conscious awareness. Somatic,
          experiential psychotherapy can help bridge the gap between what we
          know to be true and what we actually do. <br></br>Traumatic events are
          whole body experiences, held by the entire body and not just the
          thinking brain. I will teach you to track your nervous system and
          create a conversation between your thinking brain and your body.
          Together we will facilitate experiences in the treatment room to
          gently support you to get in touch with and then update subconsciously
          held material that drives deeply ingrained behaviors that are harmful
          to ourselves and our relationships. <br></br>All the modalities I am
          trained in, including EMDR, Internal Family Systems, Somatic
          Experiencing and Coherence Psychotherapy are effective ways to support
          memory reconsolidation, which is the basis for all effective trauma
          treatment. When memory consolidation is successful, it creates
          permanent, effortless change in the behaviors and beliefs that no
          longer serve you.
        </p>
      </section>

      <hr></hr>

      <section
        id="services"
        className={`section ${active === "rates" ? "show" : "hide"}`}
        tabIndex="-1"
      >
        <h2>Rates and Insurance</h2>

        <p>
          I am an out-of-network provider and am not paneled with any insurance
          companies. If you have out-of-network benefits I will provide you with
          a monthly superbill to submit to your insurer for out-of-network
          reimbursement. Here’s what to ask your insurance company to confirm
          your coverage: <br></br> 1. Do I have out of network coverage for
          mental health services? <br></br> 2. If yes, what is my deductible?{" "}
          <br></br> 3. When does my deductible renew? (For most policies this is
          January 1, but not all) <br></br> 4. How much do you cover for CPT
          codes 90791 (intake examination), 90834 (for individuals) and 90847
          (for couples)? <br></br>Individual sessions are 50 minutes, and my fee
          is $250. Couples and family sessions are 50 minutes and my fee is $275
        </p>
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
