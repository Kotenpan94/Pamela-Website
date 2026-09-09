import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Splash from "./Splash";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Fees from "./pages/Fees";
import Contact from "./pages/Contact";
import "./App.css";

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <>
      {/* The real page mounts immediately — search engines and Core Web
          Vitals see it right away. The splash is purely a visual overlay
          on top, not a gate on the content. */}
      {showSplash && <Splash onDismiss={() => setShowSplash(false)} />}

      {/* `inert` disables focus/clicks on the content while it's hidden
          behind the splash, so keyboard users can't tab into nav links
          they can't see. It's dropped the instant the splash dismisses. */}
      <div inert={showSplash}>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/fees" element={<Fees />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
}
