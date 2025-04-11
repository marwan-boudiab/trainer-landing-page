import Motion from '@/components/client-view/motion/MotionComp';
import AboutSubtitle from './subtitle/AboutSubtitle';

// const subtitle = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti dolore laborum, veniam aliquid ullam molestiae!';
const AboutHeader = () => {
  // console.log('AboutHeader Rendered on server');
  return (
    <div className="mb-8 flex flex-col items-center gap-2">
      <Motion as="h1" delay={0.2} className="h2">
        About us
      </Motion>
      <Motion as="p" delay={0.3} className="mx-auto max-w-[600px] text-center">
        <AboutSubtitle />
      </Motion>
    </div>
  );
};
export default AboutHeader;
