'use client';

import Header from './client-view/header/Header';
import Footer from './client-view/footer/Footer';
import { ReactNode, useEffect, useState } from 'react';
import useComponentsReady from '@/hooks/useComponentsReady';

const App = ({ children }: { children: ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);
  const componentsReady = useComponentsReady();

  useEffect(() => {
    if (componentsReady) setIsLoading(false);
  }, [componentsReady]);

  if (isLoading)
    return (
      <div className="mt-32 flex items-center justify-center">
        <div className="loader"></div>
      </div>
    );

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default App;
