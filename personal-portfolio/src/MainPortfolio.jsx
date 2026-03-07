import { useRef } from "react";
import Layout from "./components/Layout";
import Landing from "./pages/Landing";
import About from "./pages/About";
import Certificates from "./pages/Certificates";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Checkpoint from "./components/Checkpoint";

export default function MainPortfolio() {
  const sections = {
    landing: useRef(null),
    about: useRef(null),
    skills: useRef(null),
    projects: useRef(null),
    certificates: useRef(null),
    contact: useRef(null)
  };

  return (
    <Layout sections={sections}>
      <section ref={sections.landing}>
        <Landing
          onStart={() =>
            sections.about.current.scrollIntoView({ behavior: "smooth" })
          }
        />
      </section>

      <section ref={sections.about}>
        <Checkpoint point="MEET THE ENGINEER" />
        <About />
      </section>

      <section ref={sections.skills}>
        <Checkpoint point="THE ARSENAL" />
        <Skills />
      </section>

      <section ref={sections.projects}>
        <Checkpoint point="BATTLES" />
        <Projects />
      </section>

      <section ref={sections.certificates}>
        <Checkpoint point="CERTIFICATES" />
        <Certificates />
      </section>

      <section ref={sections.contact}>
        <Checkpoint point="CONTACT" />
        <Contact />
      </section>
    </Layout>
  );
}