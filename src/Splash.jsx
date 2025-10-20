import React from "react";
import "./splash.css";

export default function Splash({ onDismiss }) {
  return (
    <div className="splash">
      <div className="splash-content">
        <h1 className="splash-title">Get your body into the conversation</h1>
        <button className="splash-button" onClick={onDismiss}>
          Enter Site
        </button>
      </div>
    </div>
  );
}
