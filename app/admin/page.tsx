import type { Metadata } from 'next';
import AdminPanel from '@/components/admin-view/AdminPanel';

export const metadata: Metadata = {
  //   title: { absolute: 'Admin Panel' },
  title: 'Admin Panel',
  description: 'Manage your calisthenics training content with ease. Update workout plans and keep your fitness community engaged and inspired.',
};

const page = () => <AdminPanel />;

export default page;
