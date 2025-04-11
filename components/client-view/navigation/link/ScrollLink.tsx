'use client';

import { Link } from 'react-scroll';

const ScrollLink = ({ to, offset = 0, smooth = true, spy = true, activeClass = 'active', className = '', children }: ScrollLinkProps) => {
  return (
    <Link to={to} offset={offset} smooth={smooth} spy={spy} activeClass={activeClass} className={className}>
      {children}
    </Link>
  );
};

export default ScrollLink;
