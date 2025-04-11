'use client';

import { motion, useReducedMotion } from 'framer-motion';

import { fadeIn } from '@/lib/motionVariants';

interface MotionProps {
  children: React.ReactNode;
  delay?: number;
  as?: 'div' | 'h1' | 'p' | 'section';
  [key: string]: any;
}

const Motion: React.FC<MotionProps> = ({ children, delay = 0.4, as = 'div', ...props }) => {
  const shouldReduceMotion = useReducedMotion();

  const defaultProps = {
    variants: fadeIn('up', delay),
    initial: 'hidden',
    whileInView: 'show',
    viewport: { once: true, amount: 0.5 },
    transition: { duration: 1.2 },
  };

  const Component = motion[as];

  if (shouldReduceMotion) {
    return <Component>{children}</Component>;
  }

  return (
    <Component {...defaultProps} {...props}>
      {children}
    </Component>
  );
};

export default Motion;
