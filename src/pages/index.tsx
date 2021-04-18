import Contact from "../components/Organisms/Contact/Contact";
import Footer from "../components/Organisms/Footer/Footer";
import Header from "../components/Organisms/Header/Header";
import OurServices from "../components/Organisms/OurServices/OurServices";
import Projects from "../components/Organisms/Projects/Projects";
import Slider from "../components/Organisms/Slider/Slider";
import About from "../components/Organisms/About/About";
import GalleryModal from "../components/Molecules/GalleryModal/GalleryModal";
import { Container, Loader, SpinnerIcon } from './../components/Organisms/Home/styles';
import { Provider } from 'react-redux';
import store from '../store';
import Head from 'next/head'
import { useEffect, useState } from "react";

export default function Home() {
  const[loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1500);
  }, [])

  return (
    <Container>
      {loading &&
        <Loader>
          <SpinnerIcon />
        </Loader>
      }
      <Head>
        <title>Jordana Mariano - Arquiteta</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="Jordana Mariano - Arquiteta" key="title" />
        <meta property="og:description"
        content="O Escritório JM produz design inovador baseado na observação das interações cotidianas, que guardam possibilidades espaciais e programáticas imprevisíveis."/>
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://jordanamariano.com.br/"/>
        <meta property="og:image" content="meta-img.png"/>
      </Head>
      <Provider store={store}>
        <Header />
        <Slider id="home" />
        <About id="sobre" />
        <OurServices id="servicos" />
        <Projects id="projetos" />
        <Contact id="contato" />
        <Footer />
        <GalleryModal />
      </Provider>
    </Container>
  )
}
