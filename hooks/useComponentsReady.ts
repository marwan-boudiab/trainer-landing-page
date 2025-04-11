import useAdminStore from '@/lib/store';
import { useState, useEffect } from 'react';

const useComponentsReady = () => {
  const [componentsReady, setComponentsReady] = useState(false);
  const { allData, extractAllData } = useAdminStore(state => ({
    allData: state.allData,
    extractAllData: state.extractAllData,
  }));

  useEffect(() => {
    extractAllData();
  }, []);

  useEffect(() => {
    if (allData.hero && allData.about && allData.gallery && allData.plan && allData.testimonial) {
      setComponentsReady(true);
    }
  }, [allData]);

  return componentsReady;
};

export default useComponentsReady;
