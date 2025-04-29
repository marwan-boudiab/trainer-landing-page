'use client';
import useAdminStore from '@/lib/store';
import { CldImage } from 'next-cloudinary';
import { useState } from 'react';

const PlansBackground = () => {
  const { allData: img } = useAdminStore(state => ({ allData: state.allData.global?.plansImg! }));
  const [imageLoading, setImageLoading] = useState(true);

  return (
    <>
      {/* Skeleton loader */}
      {imageLoading && (
        <div className="absolute inset-0 z-5 animate-pulse bg-primary-200"></div>
      )}
      <div style={{ opacity: imageLoading ? 0 : 1, transition: 'opacity 0.3s ease' }}>
        <div className="absolute left-0 top-0 -z-10 h-full w-full before:absolute before:top-0 before:z-10 before:h-full before:w-full before:bg-black/50">
          <CldImage
            src={img}
            alt="Hero image"
            sizes="(max-width: 640px) 640px, (max-width: 768px) 768px, (max-width: 1024px) 1024px, (max-width: 1280px) 1280px, 1920px"
            className="object-cover"
            fill
            crop="fill"
            gravity="auto"
            quality="auto"
            format="auto"
            onLoad={() => setImageLoading(false)}
          />
        </div>
      </div>
    </>
  );
};

export default PlansBackground;