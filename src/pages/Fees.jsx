import { Link } from "react-router-dom";
import SEO from "../components/SEO";

export default function Fees() {
  return (
    <>
      <SEO
        title="Fees & Insurance"
        description="Rates, out-of-network insurance, and superbills for therapy with Pamela Goldsteen, LCSW in Montclair, NJ."
      />

      <div className="page-hero">
        <div className="wrap">
          <span className="eyebrow">Rates &amp; Insurance</span>
          <h1>Fees and insurance</h1>
        </div>
      </div>

      <section className="prose-section">
        <div className="wrap">
          <div className="prose">
            <p>
              My fee is <strong>$300 for a 50-minute session</strong>.
            </p>

            <p>
              I am an out-of-network provider and am not paneled with any
              insurance companies. If you have out-of-network benefits, I will
              provide you with a monthly superbill to submit to your insurer for
              out-of-network reimbursement.
            </p>

            <h3>What to ask your insurance company</h3>
            <p>
              Here's what to ask your insurance company to confirm your
              coverage:
            </p>
            <ol>
              <li>
                Do I have out-of-network coverage for mental health services?
              </li>
              <li>If yes, what is my deductible?</li>
              <li>
                When does my deductible renew? (For most policies this is
                January 1st, but not all.)
              </li>
              <li>
                How much do you cover for CPT codes 90791 (intake evaluation),
                90834 (individual sessions), and 90847 (couples sessions)?
              </li>
            </ol>

            <div className="callout">
              <p>
                <strong>Not sure where to start?</strong>
              </p>
              <p>
                A free 15-minute consultation is a good first step &mdash;{" "}
                <Link to="/contact" className="text-link">
                  get in touch
                </Link>{" "}
                and we can talk it through.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
