import SEO from "../components/SEO";
import officePic from "../media/office.jpeg";

export default function Services() {
  return (
    <>
      <SEO
        title="Services"
        description="Experiential somatic psychotherapy, EMDR, Internal Family Systems, and group therapy in Montclair, NJ — Pamela Goldsteen, LCSW."
      />

      <div className="page-hero">
        <div className="wrap">
          <span className="eyebrow">My Approach</span>
          <h1>Somatic, experiential psychotherapy</h1>
          <p>Trauma-informed, body-centered treatment for individuals, couples, families, and groups.</p>
        </div>
      </div>

      <section className="prose-section">
        <div className="wrap">
          <div className="prose">
            <img src={officePic} alt="Pamela Goldsteen's therapy office" className="full-photo" />

            <p>I specialize in experiential somatic modalities that gently and effectively support healing and integration of the nervous system. This neurobiological approach is highly effective at alleviating trauma and stress disorders including PTSD, developmental and relational trauma, depression, anxiety, OCD, chronic pain, and grief.</p>

            <p>If you've had the experience of knowing intellectually that a behavior does not serve you, yet remain powerless to change it, it may be driven by old emotional beliefs operating outside your conscious awareness. Somatic, experiential psychotherapy can help bridge the gap between what we know to be true and what we actually do.</p>

            <p>Traumatic events are whole-body experiences, held by the entire body and not just the thinking brain. I will teach you to track your nervous system and create a conversation between your thinking brain and your body. Together, we will facilitate experiences in the treatment room to gently support you in getting in touch with, and then updating, subconsciously held material that drives deeply ingrained behaviors that are harmful to ourselves and our relationships.</p>

            <p>All the modalities I am trained in &mdash; including EMDR, Internal Family Systems, Somatic Experiencing, and Coherence Psychotherapy &mdash; are effective ways to support memory reconsolidation, which is the basis for all effective trauma treatment. When memory reconsolidation is successful, it creates permanent, effortless change in the behaviors and beliefs that no longer serve you.</p>

            <h2 id="group-therapy">Group Psychotherapy</h2>
            <p>Have you ever felt like something is deeply wrong with you? Felt profoundly alone in your experiences, or found yourself in relationships that feel one-sided and unfulfilling?</p>
            <p>Group psychotherapy offers a powerful, cost-effective path toward healing &mdash; a safe, confidential space to connect with others who share similar struggles and realize you are not alone. This is a process group, which differs from a psychoeducational group: rather than focusing on information or skills, the work happens through the relationships in the room.</p>
            <p>In a group setting, you'll normalize your experiences, recognize old interpersonal patterns, and practice new ways of relating within a genuinely supportive community. These patterns often trace back to environments that couldn't consistently meet your core emotional needs; groups offer a chance to process that grief while loosening the beliefs you developed to cope. I actively facilitate throughout, helping members communicate directly, ensuring all voices are heard, and keeping the group focused.</p>
            <p>Many people who come to group have never experienced relationships built on genuine reciprocity. This work directly challenges that isolation &mdash; offering the experience of being truly seen and met with compassion, simply because you are human.</p>

            <div className="callout">
              <p><strong>Interested in group therapy?</strong></p>
              <p><a href="tel:+12016144031" className="text-link">Call (201) 614-4031</a> to learn more.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
