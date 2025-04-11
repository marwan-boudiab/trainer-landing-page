import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import Motion from '../motion/MotionComp';
import PlanSlider from './components/PlanSlider';

const PlansBackground = dynamic(() => import('./components/background/PlansBackground'), { ssr: false });

const Plans = () => {
  return (
    <section id="prices" className="border-t-2">
      <Motion as="div" delay={0.2} className="relative h-auto md:py-12">
        <Suspense fallback={null}>
          <PlansBackground />
        </Suspense>
        <div className="container relative z-20 mx-auto flex h-full flex-col px-0 text-white">
          <Motion as="h1" delay={0.3} className="h2 mb-2 pt-16">
            Membership
          </Motion>
          <Motion as="div" delay={0.4} className="px-2">
            <PlanSlider />
          </Motion>
        </div>
      </Motion>
    </section>
  );
};

export default Plans;
