import Hero from "../../components/Hero/Hero";
import About from "../../components/About/About";
import Skills from "../../components/Skills/Skills";
import Experience from "../../components/Experience/Experience";
import Projects from "../../components/Projects/Projects";
import Contact from "../../components/Contact/Contact";
import Reveal from "../../components/Reveal/Reveal";

function Home() {
  return (
    <>
      <Reveal>
        <Hero />
      </Reveal>
      <Reveal delay={100}>
        <About />
      </Reveal>
      <Reveal delay={200}>
        <Skills />
      </Reveal>
      <Reveal delay={300}>
        <Experience />
      </Reveal>
      <Reveal delay={400}>
        <Projects />
      </Reveal>
      <Reveal delay={500}>
        <Contact />
      </Reveal>
    </>
  );
}

export default Home;
