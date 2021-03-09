import Contact from "../components/Organisms/Contact/Contact";
import Footer from "../components/Organisms/Footer/Footer";
import Header from "../components/Organisms/Header/Header";
import OurServices from "../components/Organisms/OurServices/OurServices";
import Projects from "../components/Organisms/Projects/Projects";
import Slider from "../components/Organisms/Slider/Slider";
import About from "../components/Organisms/About/About";

import { Container } from './../components/Organisms/Home/styles';

export default function Home() {
  return (
    <Container>
      <Header />
      <Slider />
      <About id="about" />
      <OurServices />
      <Projects />
      <Contact />
      <Footer />
    </Container>
  )
}
