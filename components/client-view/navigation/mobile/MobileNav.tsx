import useAdminStore, { AllData } from '@/lib/store';
import { usePathname } from 'next/navigation';
import { menuItems } from '../Nav';
import ScrollLink from '../link/ScrollLink';

const homeLinks = [
  { name: 'home', target: 'home', offset: 0 },
  { name: 'about', target: 'about', offset: 0 },
  { name: 'gallery', target: 'gallery', offset: 2 },
  { name: 'prices', target: 'prices', offset: 3 },
  { name: 'testimonial', target: 'testimonial', offset: 5 },
  { name: 'contact', target: 'contact', offset: 6 },
];

const MobileNav = ({ containerStyles }: { containerStyles: string }) => {
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
    <nav className={`${containerStyles}`}>
      {pathname === '/'
        ? // Home Navigation
          homeLinks.map((link, index) => (
            <ScrollLink key={`link_${index}`} offset={link.offset} to={link.target} smooth spy activeClass="active" className="cursor-pointer transition-all hover:text-accent">
              <h1>{link.name}</h1>
            </ScrollLink>
          ))
        : pathname === '/admin'
          ? // Admin Navigation
            menuItems.map((link, index) => (
              <div key={`link_${index}`} onClick={() => handleNavigation(link)} className={`cursor-pointer transition-all hover:text-accent ${currentSelectedTab === link ? 'text-accent' : 'text-white'}`}>
                <h1>{link}</h1>
              </div>
            ))
          : null}
    </nav>
  );
};

export default MobileNav;

// import { useMediaQuery } from 'react-responsive';

// import CustomLink from '../link/ScrollLink';

// const links = [
//   { name: 'home', target: 'home', offset: 0 },
//   { name: 'about', target: 'about', offset: 0 },
//   { name: 'gallery', target: 'gallery', offset: 2 },
//   { name: 'prices', target: 'prices', offset: 3 },
//   { name: 'testimonial', target: 'testimonial', offset: 5 },
//   { name: 'contact', target: 'contact', offset: 5 },
// ];

// const MobileNav = ({ containerStyles }: { containerStyles: string }) => {
//   // console.log('MobileNav Rendered on client');

//   // const isMobile = useMediaQuery({
//   //   query: '(max-width: 640px)',
//   // });
//   return (
//     <nav className={`${containerStyles}`}>
//       {links.map((link, index) => (
//         <CustomLink
//           key={`link_${index}`}
//           offset={link.offset}
//           to={link.target}
//           smooth
//           spy
//           activeClass="active"
//           className="cursor-pointer transition-all hover:text-accent"
//           // duration={500}
//         >
//           <h1>{link.name}</h1>
//         </CustomLink>
//       ))}
//     </nav>
//   );
// };
// export default MobileNav;
