'use client';

import { useId, useMemo, useState } from 'react';

import { useTimeout } from '@/hooks/useTimeout';

import { ToastContext } from '@/context/ToastContext';

import { CircleAlert, CircleCheck, CircleHelpIcon, X } from 'lucide-react';

const toastTypes = {
  success: { toastClasses: 'bg-accent', icon: <CircleCheck size={22} /> },
  warning: { toastClasses: 'bg-accent', icon: <CircleAlert size={22} /> },
  info: { toastClasses: 'bg-accent', icon: <CircleHelpIcon size={22} /> },
  error: { toastClasses: 'bg-accent', icon: <CircleAlert size={22} /> },
};

const Toast = ({ message, close, type }: ToastProps) => {
  const id = useId();
  const { toastClasses, icon } = toastTypes[type];
  useTimeout(() => close());
  return (
    <div key={id} className={`${toastClasses} fixed right-2 top-2 z-50 rounded-xl border-2 p-3 text-white`}>
      <div className="me-8 flex items-center gap-x-2">
        {icon}
        <p className="text-md flex uppercase">{message}</p>
      </div>
      <X size={18} className="absolute right-2 top-1 cursor-pointer" onClick={close} />
    </div>
  );
};

type ToastProviderProperties = { children: React.ReactElement };

type ToastType = { message: string; id: number; type?: 'success' | 'warning' | 'info' | 'error' /* Make type optional */ };

export function ToastProvider({ children }: ToastProviderProperties) {
  const [toasts, setToasts] = useState<ToastType[]>([]);

  function openToast(message: string, type?: ToastType['type']) {
    const newToast = { id: Date.now(), message, type: type || 'info' /* Default to "info" if type is undefined */ };
    setToasts(prevToasts => [...prevToasts, newToast]);
  }

  function closeToast(id: number) {
    setToasts(prevToasts => prevToasts.filter(toast => toast.id !== id));
  }

  const contextValue = useMemo(() => ({ open: openToast, close: closeToast }), []);

  return (
    <>
      <ToastContext.Provider value={contextValue}>
        {children}
        <div>{toasts && toasts.map(toast => <Toast key={toast.id} message={toast.message} close={() => closeToast(toast.id)} type={toast.type!} />)}</div>
      </ToastContext.Provider>
    </>
  );
}

export default Toast;
