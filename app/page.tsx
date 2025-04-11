import Hero from '@/components/client-view/hero/Hero';
import About from '@/components/client-view/about/About';
import Gallery from '@/components/client-view/gallery/Gallery';
import Plans from '@/components/client-view/plans/Plans';
import Contact from '@/components/client-view/contact/email/ContactEmail';
import Testimonials from '@/components/client-view/testimonials/Testimonials';

export default function Home() {
  // console.log('Home Rendered on server');
  return (
    <main>
      <Hero />
      <About />
      <Gallery />
      <Plans />
      <Testimonials />
      <Contact />
    </main>
  );
}
