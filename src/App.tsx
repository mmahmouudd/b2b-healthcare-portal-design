import Header from "./components/Header";
import Hero from "./components/Hero";
import Platform from "./components/Platform";
import Integration from "./components/Integration";
import Compliance from "./components/Compliance";
import Voices from "./components/Voices";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div id="top" className="min-h-screen">
      <a href="#main" className="skip-link">
        Skip to main content
      </a>
      <div className="noise-overlay" aria-hidden="true" />
      <Header />
      <main id="main">
        <Hero />
        <Platform />
        <Integration />
        <Compliance />
        <Voices />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
