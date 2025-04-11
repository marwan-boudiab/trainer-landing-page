'use client';

import { useState } from 'react';

import useAdminStore from '@/lib/store';

import { Menu, X } from 'lucide-react';

import MobileNav from '../../navigation/mobile/MobileNav';

const MobileHeader = () => {
  const { allData: name } = useAdminStore(state => ({ allData: state.allData.global?.name }));

  const [openNav, setOpenNav] = useState(false);

  // console.log('MobileHeader Rendered on client');

  return (
    <>
      <h1 className="nav_title">
        {name}&nbsp;<span className="text-accent">Calisthenics</span>
      </h1>
      <>
        <MobileNav containerStyles={`${openNav ? 'opened_nav' : 'closed_nav'} mobile_nav`} />
        <button onClick={() => setOpenNav(!openNav)} className="menu_btn">
          {openNav ? <X size={24} /> : <Menu size={24} />}
        </button>
      </>
    </>
  );
};

export default MobileHeader;
