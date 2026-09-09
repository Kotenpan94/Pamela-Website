import { useEffect, useState } from "react";
import "./splash.css";

export default function Splash({ onDismiss }) {
  const [leaving, setLeaving] = useState(false);

  // Show the splash, then start the fade-out
  useEffect(() => {
    const showFor = setTimeout(() => setLeaving(true), 2900);
    return () => clearTimeout(showFor);
  }, []);

  // Once the fade-out starts, unmount after the CSS transition finishes
  useEffect(() => {
    if (!leaving) return;
    const dismiss = setTimeout(onDismiss, 600);
    return () => clearTimeout(dismiss);
  }, [leaving, onDismiss]);

  return (
    <div className={`splash${leaving ? " splash-fade-out" : ""}`}>
      <svg className="splash-deco" viewBox="0 0 1100 700" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <circle cx="150" cy="140" r="110" fill="none" stroke="var(--clay)" strokeOpacity="0.3" strokeWidth="1.5" />
        <circle cx="960" cy="560" r="90" fill="var(--moss)" fillOpacity="0.14" />
        <circle cx="1000" cy="150" r="6" fill="var(--clay)" fillOpacity="0.5" />
      </svg>
      <div className="splash-content">
        <span className="eyebrow">Pamela Goldsteen, LCSW</span>
        <h1 className="splash-title">Get your body into the conversation.</h1>
        {/* <button className="splash-button" onClick={onDismiss}>
          Enter Site
        </button> */}
      </div>
    </div>
  );
}
