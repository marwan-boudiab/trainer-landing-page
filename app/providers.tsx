'use client';

import { ToastProvider } from '@/components/client-view/Toast';

export const Providers = ({ children }: { children: React.ReactElement }) => <ToastProvider>{children}</ToastProvider>;
