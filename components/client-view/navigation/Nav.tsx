'use client';

import { usePathname } from 'next/navigation';
import useAdminStore, { AllData } from '@/lib/store';

import ScrollLink from '@/components/client-view/navigation/link/ScrollLink';

const homeLinks: LinkType[] = [
  { name: 'home', target: 'home', offset: 0 },
  { name: 'about', target: 'about', offset: 3 },
  { name: 'gallery', target: 'gallery', offset: 4 },
  { name: 'prices', target: 'prices', offset: 4 },
  { name: 'testimonial', target: 'testimonial', offset: 5 },
  { name: 'contact', target: 'contact', offset: 6 },
];

export const menuItems = ['hero', 'about', 'gallery', 'plan', 'testimonial', 'social', 'global'];

const Nav = ({ containerStyles }: { containerStyles?: string }) => {
  const pathname = usePathname();
  const { currentSelectedTab, setCurrentSelectedTab, resetFormDatas } = useAdminStore(state => ({
    currentSelectedTab: state.currentSelectedTab,
    setCurrentSelectedTab: state.setCurrentSelectedTab,
    resetFormDatas: state.resetFormDatas,
  }));

  const handleNavigation = (id: string) => {
    setCurrentSelectedTab(id as keyof AllData);
    resetFormDatas();
  };

  return (
    <nav className={`nav ${containerStyles}`}>
      {pathname === '/' ? (
        // Home Navigation
        <div className="hidden gap-4 sm:flex">
          {homeLinks.map((link, index) => (
            <ScrollLink key={`link_${index}`} offset={link.offset} to={link.target} smooth spy activeClass="active" className="cursor-pointer transition-all hover:text-accent">
              <h1 className="h6 font-medium">{link.name}</h1>
            </ScrollLink>
          ))}
        </div>
      ) : pathname === '/admin' ? (
        // Admin Navigation
        <div className="hidden gap-4 sm:flex">
          {menuItems.map((link, index) => (
            <div key={`link_${index}`} className={`cursor-pointer transition-all hover:text-accent ${currentSelectedTab === link ? 'text-accent' : 'text-white'}`} onClick={() => handleNavigation(link)}>
              <h1 className="h6 font-medium">{link}</h1>
            </div>
          ))}
        </div>
      ) : null}
    </nav>
  );
};

export default Nav;