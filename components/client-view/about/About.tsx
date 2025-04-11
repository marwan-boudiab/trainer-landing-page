import Header from './components/header/AboutHeader';
import Features from './components/features/AboutFeatures';

const About = () => {
  // console.log('About Rendered on server');
  return (
    <section className="border-t-2 py-24 md:py-44" id="about">
      <div className="container mx-auto">
        {/* header */}
        <Header />
        {/* featured items */}
        <Features />
      </div>
    </section>
  );
};
export default About;
