// 'use client';

// import { z } from 'zod';

// import { useState, ChangeEvent, FormEvent, useEffect } from 'react';

// // import useAdminStore from '@/lib/store';
// import { useSelectedEquipment } from '@/context/useEquipmentsContext';

// import Motion from '../../motion/MotionComp';
// import AnimatedButton from '../../ui/button/AnimatedButton';

// // Define schema using Zod
// const formSchema = z.object({
//   name: z.string().min(1, { message: 'Name is required' }),
//   message: z.string().min(1, { message: 'Message is required' }),
// });

// interface FormData {
//   name: string;
//   message: string;
// }

// // interface ContactProps {
// //   selectedTitle: string | null; // Add the selectedTitle prop type
// // }

// // interface ContactProps {
// //   selectedEquipment: { id: number; title: string }[]; // Add the selectedEquipment prop type
// // }

// const Contact: React.FC = (
//   {
//     // selectedTitle,
//     // selectedEquipment,
//   }
// ) => {
//   const [formData, setFormData] = useState<FormData>({ name: '', message: '' });
//   const [errors, setErrors] = useState<Partial<FormData>>({});
//   const [pending, setPending] = useState(false);
//   const { selectedEquipment, clearEquipment } = useSelectedEquipment();

//   // useEffect(() => {
//   //   if (selectedTitle) {
//   //     setFormData((prevData) => ({
//   //       ...prevData,
//   //       message: `I'd like to order the following calisthenics equipment: ${selectedTitle}. Please provide payment and delivery details. Thank you.`,
//   //     }));
//   //     setErrors((prev) => ({ ...prev, message: undefined }));
//   //   }
//   // }, [selectedTitle]);

//   useEffect(() => {
//     if (selectedEquipment.length > 0) {
//       // Count occurrences of each equipment title
//       const equipmentCount: { [title: string]: number } = {};
//       selectedEquipment.forEach(item => {
//         if (equipmentCount[item.title]) {
//           equipmentCount[item.title]++;
//         } else {
//           equipmentCount[item.title] = 1;
//         }
//       });

//       // Create a list of equipment with their counts
//       const equipmentList = Object.entries(equipmentCount)
//         .map(([title, count]) => `${count} x ${title}`)
//         .join(', ');

//       setFormData(prevData => ({
//         ...prevData,
//         message: `I'd like to order the following calisthenics equipment: ${equipmentList}. Please provide payment and delivery details. Thank you.`,
//       }));
//       setErrors(prev => ({ ...prev, message: undefined }));
//     }
//   }, [selectedEquipment]);

//   const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     setFormData(prevData => ({ ...prevData, [name]: value }));

//     // Validate the field on change
//     try {
//       const fieldToValidate: Partial<{ [K in keyof FormData]: true }> = {
//         [name]: true,
//       };
//       formSchema.pick(fieldToValidate).parse({ [name]: value });
//       setErrors(prev => ({ ...prev, [name]: undefined }));
//     } catch (error) {
//       if (error instanceof z.ZodError) {
//         setErrors(prev => ({ ...prev, [name]: error.errors[0].message }));
//       }
//     }
//   };

//   const handleSubmit = (e: FormEvent) => {
//     e.preventDefault();
//     setPending(true);

//     // Validate form data using Zod
//     const result = formSchema.safeParse(formData);
//     if (!result.success) {
//       // Extract errors and set them in state
//       const fieldErrors: Partial<FormData> = {};
//       result.error.errors.forEach(error => {
//         fieldErrors[error.path[0] as keyof FormData] = error.message;
//       });
//       setErrors(fieldErrors);
//       setPending(false);
//       return;
//     }

//     const whatsappMessage = `https://wa.me/96103047158?text=${encodeURIComponent(`Hello my name is ${formData.name}\n${formData.message}`)}`;
//     window.open(whatsappMessage, '_blank');

//     setTimeout(() => {
//       setPending(false);
//       setFormData({ name: '', message: '' }); // Clear form fields
//       clearEquipment(); // Reset selected equipment
//     }, 1000);
//   };

//   return (
//     <section id="contact" className="flex items-center py-14">
//       <div className="container mx-auto">
//         <Motion as="h1" delay={0.2} className="h2 mb-5 mt-10 text-center">
//           Contact Us
//         </Motion>
//         <Motion as="section" delay={0.3} className="mx-auto w-[min(100%,38rem)] text-center">
//           <form className="mt-4 flex flex-col gap-y-4 dark:text-black" onSubmit={handleSubmit}>
//             <div className="flex flex-col gap-y-1">
//               <input
//                 className={`${
//                   errors.name ? 'border-2 border-accent font-bold placeholder:text-accent' : 'border-1 border-muted placeholder:text-muted'
//                 } h-14 rounded-xl border px-4 transition-all dark:bg-white dark:bg-opacity-80 dark:outline-none dark:focus:bg-opacity-100`}
//                 name="name"
//                 type="text"
//                 value={formData.name}
//                 onChange={handleChange}
//                 // required
//                 maxLength={100}
//                 placeholder="Name"
//               />
//               {errors.name && <p className="flex justify-start font-bold text-accent">{errors.name}</p>}
//               {/* <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 required
//               />
//               {errors.name && (
//                 <span style={{ color: "red" }}>{errors.name}</span>
//               )} */}
//             </div>
//             <div className="flex flex-col gap-y-1">
//               <textarea
//                 className={`${
//                   errors.message ? 'border-2 border-accent font-bold placeholder:text-accent' : 'border-1 border-muted placeholder:text-muted'
//                 } h-52 resize-none rounded-xl border p-4 transition-all dark:bg-white dark:bg-opacity-80 dark:outline-none dark:focus:bg-opacity-100`}
//                 name="message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 placeholder="Message"
//                 // required
//                 maxLength={5000}
//               />
//               {errors.message && <p className="flex justify-start font-bold text-accent">{errors.message}</p>}
//               {/* <label htmlFor="message">Message:</label>
//               <textarea
//                 id="message"
//                 name="message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 required
//               />
//               {errors.message && (
//                 <span style={{ color: "red" }}>{errors.message}</span>
//               )} */}
//             </div>
//             <AnimatedButton text="Send Message" containerStyles="w-[196px] h-[56px]" contact={true} pending={pending} />
//             {/* <button type="submit">Send Message</button> */}
//           </form>
//         </Motion>
//       </div>
//     </section>
//   );
// };

// export default Contact;
