import Contact from "../components/Contact/Contact";
import OurServices from "../components/OurServices/OurServices";
import Projects from "../components/Projects/Projects";
import Slider from "../components/Slider/Slider";
import TitleText from "../components/TitleText/TitleText";

import { Container } from './../components/Home/styles';

export default function Home() {
  return (
    <Container>
      <Slider />
      <TitleText />
      <OurServices />
      <Projects />
      <Contact />
    </Container>
  )
}
