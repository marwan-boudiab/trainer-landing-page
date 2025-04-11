'use client';
import useAdminStore from '@/lib/store';

const AboutSubtitle = () => {
  const { allData: subtitle } = useAdminStore(state => ({ allData: state.allData.global?.aboutSubtitle }));
  return subtitle;
};

export default AboutSubtitle;
