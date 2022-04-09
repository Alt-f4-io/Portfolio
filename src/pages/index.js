import Services from '../components/Services/Services';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';
import Head from 'next/head'
import ScrollAnimation from 'react-animate-on-scroll'
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import Bounce from 'react-reveal/Bounce'

const Home = () => {
  return (
    <Layout>
      <Head>
        <title>Ovie Aloko</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Section grid>
      <Fade>
        <Hero />
      </Fade>
        <BgAnimation />
      </Section>
      <Zoom>
      <Timeline />
      </Zoom>
      {/*<Projects />*/}
      <Bounce>
      <Technologies />
      </Bounce>
      <Fade>
      <Services />

      </Fade>
    </Layout>
  );
};

export default Home;
