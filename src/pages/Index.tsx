import Navbar from '@/components/landing/Navbar';
import Hero from '@/components/landing/Hero';
import About from '@/components/landing/About';
import Services from '@/components/landing/Services';
import ServiceFlows from '@/components/landing/ServiceFlows';
import News from '@/components/landing/News';
import Partners from '@/components/landing/Partners';
import Footer from '@/components/landing/Footer';

const Index = () => (
  <div className="antialiased bg-background">
    <Navbar />
    <Hero />
    <About />
    <Services />
    <ServiceFlows />
    <News />
    <Partners />
    <Footer />
  </div>
);

export default Index;
