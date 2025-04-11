'use client';
import { usePathname } from 'next/navigation';

import useAdminStore from '@/lib/store';

import Motion from '@/components/client-view/motion/MotionComp';
import { CircleDollarSign, Dumbbell, Pencil, Trash, Verified } from 'lucide-react';

const iconMapping: IconMapping = { Verified: Verified, CircleDollarSign: CircleDollarSign, Dumbbell: Dumbbell };

// const featuresData: FeatureType[] = [
//   {
//     _id: 'feature-1',
//     icon: 'Verified',
//     title: 'certified trainer',
//     subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum aperiam, officiis quo accusamus possimusadf quamdwf provident eos.',
//   },
//   {
//     _id: 'feature-2',
//     icon: 'CircleDollarSign',
//     title: 'excellent pricing',
//     subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum aperiam, officiis quo accusamus possimusadf quamdwf provident eos.',
//   },
//   {
//     _id: 'feature-3',
//     icon: 'Dumbbell',
//     title: 'modern equipment',
//     subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum aperiam, officiis quo accusamus possimusadf quamdwf provident eos.',
//   },
// ];

const Features = () => {
  const pathname = usePathname();
  const {
    allData: features,
    deleteDataById,
    updateData,
    currentSelectedTab,
  } = useAdminStore(state => ({
    allData: state.allData.about!,
    deleteDataById: state.deleteDataById,
    updateData: state.updateData,
    currentSelectedTab: state.currentSelectedTab,
  }));

  const handleDeleteAbout = async (id: string) => await deleteDataById(id);
  const handleUpdateAbout = (data: Partial<FeatureType>) => updateData(data);

  return (
    <Motion as="div" delay={0.4} className="grid grid-cols-1 gap-7 md:grid-cols-2 xl:grid-cols-3">
      {features?.map((feature: FeatureType) => {
        const IconComponent = iconMapping[feature.icon];
        return (
          <div className="relative flex flex-col items-center justify-center gap-4 rounded-xl border-2 bg-accent px-6 py-10" key={feature._id}>
            <div className="flex h-[80px] w-[80px] items-center justify-center rounded-full text-white">{IconComponent ? <IconComponent className="size-16 text-white" /> : <Verified className="size-16 text-white" />}</div>
            <div className="flex flex-col items-center justify-center gap-2 text-center">
              <h4 className="h4">{feature.title}</h4>
              <p className="text-muted">{feature.subtitle}</p>
              {pathname === '/admin' && currentSelectedTab === 'about' && (
                <>
                  <Trash className="absolute right-4 top-4 size-8 cursor-pointer text-white hover:cursor-pointer" onClick={() => handleDeleteAbout(feature._id!)} />
                  <Pencil className="absolute right-16 top-4 size-8 cursor-pointer text-white hover:cursor-pointer" onClick={() => handleUpdateAbout(feature)} />
                </>
              )}
            </div>
          </div>
        );
      })}
    </Motion>
  );
};
export default Features;
