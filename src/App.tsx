import "locomotive-scroll/dist/locomotive-scroll.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Welcome from "./components/Welcome";
import Features from "./components/Features";
import Story from "./components/Story";
import Vault from "./components/Vault";
import About from "./components/About";
import Partners from "./components/Partners";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <div className="app overflow-hidden">
        <Hero />
        <Welcome />
        <Features />
        <Story />
        <Vault />
        <About />
        <Partners />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
