'use client';

import { useEffect } from 'react';
import useAdminStore from '@/lib/store';

import AdminHeroView from '@/components/admin-view/hero/Hero';
import AdminAboutView from '@/components/admin-view/about/AdminAbout';
import AdminGalleryView from '@/components/admin-view/gallery/AdminGallery';
import AdminPlanView from '@/components/admin-view/plans/Plans';
import AdminTestimonialView from '@/components/admin-view/testimonial/Testimonial';
import AdminSocialView from '@/components/admin-view/socials/AdminSocials';
import AdminGlobalView from '@/components/admin-view/global/Global';

import AdminForm from '@/components/admin-view/AdminForm';

import Motion from '@/components/client-view/motion/MotionComp';
import { Home } from 'lucide-react';
import Link from 'next/link';

export const menuItems = [
  { id: 'hero', component: <AdminHeroView /> },
  { id: 'about', component: <AdminAboutView /> },
  { id: 'gallery', component: <AdminGalleryView /> },
  { id: 'plan', component: <AdminPlanView /> },
  { id: 'testimonial', component: <AdminTestimonialView /> },
  { id: 'social', component: <AdminSocialView /> },
  { id: 'global', component: <AdminGlobalView /> },
];

const AdminPanel = () => {
  const { currentSelectedTab, authUser, setAuthUser, extractCurrentSelectedTabData } = useAdminStore(state => ({
    currentSelectedTab: state.currentSelectedTab,
    authUser: state.authUser,
    setAuthUser: state.setAuthUser,
    extractCurrentSelectedTabData: state.extractCurrentSelectedTabData,
    // extractAllData: state.extractAllData,
  }));

  useEffect(() => {
    if (currentSelectedTab == 'global' || currentSelectedTab == 'hero') extractCurrentSelectedTabData();
  }, [currentSelectedTab]);

  // useEffect(() => {
  //   extractAllData();
  // }, []);

  useEffect(() => {
    setAuthUser(JSON.parse(sessionStorage.getItem('authUser')!));
  }, []);

  if (!authUser) return <AdminForm setAuthUser={setAuthUser} />;

  return (
    <div>
      <Link href="/" className="fixed bottom-4 left-4 z-50 cursor-pointer rounded-full border-2 bg-accent p-2">
        <Home className="z-50 h-6 w-6 cursor-pointer" />
      </Link>
      <div className="pt-20">
        <Motion delay={0.12}>{menuItems.map(item => item.id === currentSelectedTab && item.component)}</Motion>
      </div>
    </div>
  );
};

export default AdminPanel;
