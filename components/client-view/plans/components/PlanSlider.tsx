'use client';

import { usePathname } from 'next/navigation';

import useAdminStore from '@/lib/store';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import AnimatedButton from '../../ui/button/AnimatedButton';
import { Check, DollarSign, Pencil, Slash, Trash, X } from 'lucide-react';
import ScrollLink from '../../navigation/link/ScrollLink';

const PlanSlider = () => {
  const pathname = usePathname();
  
  const { allData: plans } = useAdminStore(state => ({ allData: state.allData.plan! }));
  const { deleteDataById, updateData, currentSelectedTab } = useAdminStore(state => ({ deleteDataById: state.deleteDataById, updateData: state.updateData, currentSelectedTab: state.currentSelectedTab }));

  const handleDeletePlan = async (id: string) => await deleteDataById(id);
  const handleUpdatePlan = (data: Partial<planType>) => updateData(data);


  return (
    <Swiper slidesPerView={1} modules={[Pagination]} pagination={{ clickable: true }} breakpoints={{ 768: { slidesPerView: 2, spaceBetween: 30 }, 1024: { slidesPerView: 3, spaceBetween: 30 } }} className="min-h-[570px]">
      {plans.map((item: planType) => {
        // console.log(item._id, item.title);
        return (
          <SwiperSlide key={item._id}>
            <div className="mx-auto w-[99%] max-w-sm rounded-xl border-2 border-white transition-all duration-300 hover:bg-primary-300/80 xl:max-w-none">
              <div className="border-b border-white px-11 py-5">
                <h4 className="h4">{item.title}</h4>
              </div>
              {/* benefits */}
              <div className="py-[30px] ps-11">
                <ul className="mb-7 flex flex-col gap-5">
                  {item.benefits.map((item, index) => {
                    const IconComponent = item.checked ? Check : X;
                    return (
                      <li className="flex items-center gap-2" key={index}>
                        <IconComponent className="text-lg text-accent" />
                        {item.text}
                      </li>
                    );
                  })}
                </ul>
                {/* price & button */}
                <p className="mb-8 flex items-center gap-1 text-accent">
                  <sup className="text-4xl">
                    <DollarSign />
                  </sup>
                  <strong className="text-6xl">{item.price}</strong>
                  <em className="flex self-end text-2xl">
                    <Slash />
                    month
                  </em>
                </p>
                <ScrollLink key={`plan_cbtn_${item._id}`} offset={5} to={'contact'} smooth spy>
                  <AnimatedButton containerStyles="w-[196px] h-[62px]" text="Contact Us" />
                </ScrollLink>
                {/* <AnimatedButton containerStyles="w-[196px] h-[62px]" text="Contact Us" /> */}
                {pathname === '/admin' && currentSelectedTab === 'plan' && (
                  <>
                    <Trash className="absolute right-2 top-2 size-8 cursor-pointer text-gray-300 hover:cursor-pointer hover:text-accent" onClick={() => handleDeletePlan(item._id!)} />
                    <Pencil className="absolute right-16 top-2 size-8 cursor-pointer text-gray-300 hover:cursor-pointer hover:text-accent" onClick={() => handleUpdatePlan(item)} />
                  </>
                )}
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
export default PlanSlider;
