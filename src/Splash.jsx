import React, { useEffect } from "react";
import "./splash.css";

export default function Splash({ onDismiss }) {
  // Optional: Automatically hide splash after a few seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      onDismiss();
    }, 3500); // 3.5 seconds
    return () => clearTimeout(timer);
  }, [onDismiss]);

  return (
    <div className="splash">
      <div className="splash-content">
        <h1 className="splash-title fade-in">
          Get your body into the conversation
        </h1>
        <button className="splash-button" onClick={onDismiss}>
          Enter Site
        </button>
      </div>
    </div>
  );
}
