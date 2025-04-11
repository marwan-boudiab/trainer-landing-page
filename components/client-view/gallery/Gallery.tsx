'use client';

import { usePathname } from 'next/navigation';

import useAdminStore from '@/lib/store';

import { Pencil, Trash } from 'lucide-react';
import Motion from '../motion/MotionComp';

import { CldImage } from 'next-cloudinary';

// const galleryData: GalleryType[] = [
//   {
//     _id: 'gallery-1',
//     title: 'body building',
//     img: '/assets/img/gallery/bodybuilding.jpeg',
//     description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat perferendis repudiandae eaque',
//   },
//   {
//     _id: 'gallery-2',
//     title: 'front lever',
//     img: '/assets/img/gallery/front-lever.jpeg',
//     description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat perferendis repudiandae eaque',
//   },
//   {
//     _id: 'gallery-3',
//     title: 'pull ups',
//     img: '/assets/img/gallery/pullup.jpeg',
//     description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat perferendis repudiandae eaque',
//   },
//   {
//     _id: 'gallery-4',
//     title: 'Muscle up',
//     img: '/assets/img/gallery/muscleup.jpeg',
//     description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat perferendis repudiandae eaque',
//   },
// ];

const Gallery = () => {
  const pathname = usePathname();
  const { deleteDataById } = useAdminStore(state => ({ deleteDataById: state.deleteDataById }));
  const handleDeleteGallery = async (id: string) => await deleteDataById(id);
  const { updateData } = useAdminStore(state => ({ updateData: state.updateData }));
  const handleUpdateGallery = (data: Partial<GalleryType>) => updateData(data);

  const { allData: gallery } = useAdminStore(state => ({ allData: state.allData.gallery! }));

  return (
    <section id="gallery" className="border-t-2">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {gallery.map((item: GalleryType) => {
          return (
            <Motion delay={0.2} className="lg:g-[500px] relative flex h-[400px] w-full flex-col items-center justify-center" key={item._id}>
              {/* overlay */}
              <div className="absolute top-0 z-10 h-full w-full bg-black/40"></div>
              {/* <Image src={item.img} fill className="object-cover" alt={''} /> */}
              <CldImage src={item.img} fill className="object-cover" alt={item.title} />
              {/* text & btn */}
              <div className="z-30 flex max-w-[380px] flex-col items-center justify-center gap-4 text-center">
                <Motion as="h1" delay={0.3} className="h3 text-accent">
                  {item.title}
                </Motion>
                <Motion as="p" delay={0.4} className="px-4 text-white">
                  {item.description}
                </Motion>
                {/* <motion.div variants={fadeIn('up', 0.8)} initial="hidden" whileInView={'show'} viewport={{ once: true, amount: 0.2 }}>
                  <AnimatedButton
                    containerStyles="w-[164px] h-[46px]"
                    text="Read more"
                  />
                </motion.div> */}
              </div>
              {pathname === '/admin' && (
                <>
                  <Trash className="absolute right-4 top-4 z-50 size-8 cursor-pointer text-gray-300 hover:cursor-pointer hover:text-accent" onClick={() => handleDeleteGallery(item._id!)} />
                  <Pencil className="absolute right-16 top-4 z-50 size-8 cursor-pointer text-gray-300 hover:cursor-pointer hover:text-accent" onClick={() => handleUpdateGallery(item)} />
                </>
              )}
            </Motion>
          );
        })}
      </div>
    </section>
  );
};
export default Gallery;