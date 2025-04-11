// 'use client';

// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import AnimatedButton from './AnimatedButton';
// import { motion } from 'framer-motion';
// import { fadeIn } from '@/lib/variants';

// const HeroSlider = () => {
//   return (
//     <Swiper className="h-full cursor-grab">
//       <SwiperSlide>
//         <div className="flex h-full justify-end pt-28">
//           <div className="flex flex-col items-center lg:max-w-[700px] lg:items-start">
//             <motion.h1
//               variants={fadeIn('up', 0.4)}
//               initial="hidden"
//               whileInView={'show'}
//               viewport={{ once: true, amount: 0.2 }}
//               className="sm:h1 mb-2 text-center text-6xl lg:text-left"
//             >
//               <span>The only limit is the one you set yourself.</span>
//             </motion.h1>
//             <motion.p
//               variants={fadeIn('up', 0.6)}
//               initial="hidden"
//               whileInView={'show'}
//               viewport={{ once: true, amount: 0.2 }}
//               className="mb-4 text-center italic text-white lg:text-left"
//             >
//               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem inventore vero accusantium.
//             </motion.p>
//             <motion.div variants={fadeIn('up', 0.8)} initial="hidden" whileInView={'show'} viewport={{ once: true, amount: 0.2 }}>
//               <AnimatedButton text="Get Started" containerStyles="w-[196px] h-[62px]" />
//             </motion.div>
//           </div>
//         </div>
//       </SwiperSlide>

//       <SwiperSlide>
//         <div className="bottom- flex h-full justify-end pt-28">
//           <div className="flex flex-col items-center lg:max-w-[700px] lg:items-start">
//             <motion.h1
//               variants={fadeIn('up', 0.4)}
//               initial="hidden"
//               whileInView={'show'}
//               viewport={{ once: true, amount: 0.2 }}
//               className="sm:h1 mb-2 text-center text-6xl lg:text-left"
//             >
//               <span>The body achieves what the mind believes</span>
//             </motion.h1>
//             <motion.p
//               variants={fadeIn('up', 0.6)}
//               initial="hidden"
//               whileInView={'show'}
//               viewport={{ once: true, amount: 0.2 }}
//               className="mb-4 text-center italic text-white lg:text-left"
//             >
//               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem inventore vero accusantium.
//             </motion.p>
//             <motion.div variants={fadeIn('up', 0.8)} initial="hidden" whileInView={'show'} viewport={{ once: true, amount: 0.2 }}>
//               <AnimatedButton text="Get Started" containerStyles="w-[196px] h-[62px] " />
//             </motion.div>
//           </div>
//         </div>
//       </SwiperSlide>
//     </Swiper>
//   );
// };
// export default HeroSlider;