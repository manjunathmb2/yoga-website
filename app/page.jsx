import Nav from '../components/Nav';
import Hero from '../components/Hero';
import Classes from '../components/Classes';
import Gallery from '../components/Gallery';
import About from '../components/About';
import Testimonials from '../components/Testimonials';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Classes />
      <Gallery />
      <About />
      <Testimonials />
      <ContactForm />
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
