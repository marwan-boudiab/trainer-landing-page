'use client';

import useAdminStore from '@/lib/store';

import Nav from '../navigation/Nav';
import MobileHeader from './mobile/MobileHeader';
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathname = usePathname();
  const { authUser } = useAdminStore(state => ({
    authUser: state.authUser,
  }));
  // console.log('Header Rendered on client');

  if (!authUser && pathname === '/admin') return null;
  return (
    <header className="header_container">
      <div className="fixed_header">
        <div className="nav_container">
          <Nav />
          <MobileHeader />
        </div>
      </div>
    </header>
  );
};

export default Header;
