import Services from '../components/Services/Services';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';
import Head from 'next/head'

const Home = () => {
  return (
    <Layout>
      <Head>
        <title>Ovie Aloko</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Section grid>
        <Hero />
        <BgAnimation />
      </Section>
      <Timeline />

      {/*<Projects />*/}
      <Technologies />
      <Services />
    </Layout>
  );
};

export default Home;
