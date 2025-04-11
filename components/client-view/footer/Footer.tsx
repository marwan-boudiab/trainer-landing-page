'use client';
import { usePathname } from 'next/navigation';
import useAdminStore from '@/lib/store';
import Motion from '../motion/MotionComp';
import FooterContent from './components/content/FooterContent';
import FooterGallery from './components/gallery/FooterGallery';

const Footer = () => {
  const pathname = usePathname();

  const { allData: gallery } = useAdminStore(state => ({
    allData: state.allData.gallery!,
  }));

  if (pathname !== '/admin')
    return (
      <footer className="border-t-2 bg-accent py-10">
        <Motion as="div" delay={0.2} className="container mx-auto">
          <div className="lg:col-2 flex gap-4 gap-y-12 text-white">
            {/* info */}
            <FooterContent />
            {/* gallery */}
            <FooterGallery gallery={gallery} />
          </div>
        </Motion>
      </footer>
    );

  return null; // If on '/admin', render nothing
};

export default Footer;
