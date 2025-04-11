'use client';
import { usePathname } from 'next/navigation';

import useAdminStore from '@/lib/store';

import Motion from '../motion/MotionComp';
import { CircleUserRound, Pencil, Quote, Trash } from 'lucide-react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import { CldImage } from 'next-cloudinary';

// const testimonialData: TestimonialType[] = [
//   { _id: 'test-1', img: '', message: 'Amazing training sessions, totally transformed my fitness level!', name: 'Mark Anthony' },
//   { _id: 'test-2', img: '', message: 'Challenging yet rewarding workouts. Highly recommend!', name: 'Jason Smith' },
//   { _id: 'test-3', img: '', message: 'The best calisthenics trainer I’ve ever worked with. Incredible results!', name: 'Sarah Garcia' },
//   { _id: 'test-4', img: '', message: 'Personalized and effective training programs that work.', name: 'Robert Anderson' },
//   { _id: 'test-5', img: '', message: 'Helped me achieve my fitness goals faster than I expected.', name: 'Andrew Jackson' },
// ];

const Testimonials = () => {
  const pathname = usePathname();

  const { updateData, deleteDataById } = useAdminStore(state => ({
    deleteDataById: state.deleteDataById,
    updateData: state.updateData,
  }));
  const handleDeleteTestimonial = async (id: string) => await deleteDataById(id);
  const handleUpdateTestimonial = (data: Partial<TestimonialType>) => updateData(data);

  const { allData: testimonials } = useAdminStore(state => ({ allData: state.allData.testimonial! }));

  return (
    <section className="border-t-2 py-28 md:py-48" id="testimonial">
      <div className="container mx-auto">
        <Motion as="h1" delay={0.2} className="h2 mb-10">
          Testimonials
        </Motion>
        <Motion as="div" delay={0.3}>
          <Swiper slidesPerView={1} spaceBetween={30} modules={[Pagination]} pagination={{ clickable: true }} breakpoints={{ 768: { slidesPerView: 2, spaceBetween: 30 }, 1024: { slidesPerView: 3, spaceBetween: 30 } }} className="h-[320px]">
            {testimonials.map((person: TestimonialType) => {
              return (
                <SwiperSlide className="h-full" key={person._id}>
                  <div className="flex h-full flex-col items-center justify-center gap-6 text-center">
                    {person.img ? (
                      // <Image src={person.img} width={112} height={112} className="size-28 rounded-full" alt={person.name} />
                      <CldImage src={person.img} width={112} height={112} className="size-28 rounded-full" alt={person.name} />
                    ) : (
                      <CircleUserRound className="size-28 text-muted-100" />
                    )}
                    <div className="mb-4 flex flex-col items-center justify-center">
                      <Quote className="size-8 text-muted-100" />
                      <p className="mb-4 max-w-[380px]">{person.message}</p>
                      <span className="text-2xl font-medium capitalize text-accent">{person.name}</span>
                    </div>
                    {pathname === '/admin' && (
                      <>
                        <Trash className="absolute right-0 top-0 size-8 cursor-pointer text-muted-100 hover:cursor-pointer hover:text-accent" onClick={() => handleDeleteTestimonial(person._id!)} />
                        <Pencil className="absolute right-16 top-0 size-8 cursor-pointer text-muted-100 hover:cursor-pointer hover:text-accent" onClick={() => handleUpdateTestimonial(person)} />
                      </>
                    )}
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Motion>
      </div>
    </section>
  );
};
export default Testimonials;
