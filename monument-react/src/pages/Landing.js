import Header from '../components/landing/Header';
import NavBar from '../components/NavBar';
import Archive from '../components/landing/Archive';
import About from '../components/landing/About';
import Gallery from '../components/landing/Gallery';
import Contact from '../components/landing/Contact';
import '../css/landing.css';

function Landing() {
  return (
    <>
      <Header />
      <NavBar />
      <Archive />
      <About />
      <Gallery />
      <Contact />
    </>
  );
}

export default Landing;