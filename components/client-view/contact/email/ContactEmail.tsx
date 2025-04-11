'use client';

import { z } from 'zod';

import { useState } from 'react';
// import useAdminStore from '@/lib/store';
import { useToast } from '@/hooks/useToast';

import Motion from '../../motion/MotionComp';
import AnimatedButton from '../../ui/button/AnimatedButton';

import { sendEmail } from '@/actions/sendEmail';

// Infer TypeScript types from the schema
type ContactFormData = z.infer<typeof contactSchema>;

// Define Zod schema
const contactSchema = z.object({
  senderName: z.string().min(1, 'Name is required').max(50, 'Name is too long'),
  senderEmail: z.string().email('Invalid email address').max(100, 'Email is too long'),
  message: z.string().min(1, 'Message is required').max(2000, 'Message is too long'),
});

export default function Contact() {
  const toast = useToast();
  const [formData, setFormData] = useState<ContactFormData>({
    senderName: '',
    senderEmail: '',
    message: '',
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [pending, setPending] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // Validate the field on change
    try {
      const fieldToValidate: Partial<{ [K in keyof ContactFormData]: true }> = {
        [name]: true,
      };
      contactSchema.pick(fieldToValidate).parse({ [name]: value });
      setErrors(prev => ({ ...prev, [name]: undefined }));
    } catch (error) {
      if (error instanceof z.ZodError) {
        setErrors(prev => ({ ...prev, [name]: error.errors[0].message }));
      }
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setPending(true);

    // Validate all form data
    try {
      contactSchema.parse(formData);
      setErrors({}); // Clear errors if validation passes
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
        error.errors.forEach(err => {
          fieldErrors[err.path[0] as keyof ContactFormData] = err.message;
        });
        setErrors(fieldErrors);
        setPending(false);
        return;
      }
    }

    // Convert validated data to FormData
    const validatedFormData = new FormData();
    validatedFormData.append('senderName', formData.senderName);
    validatedFormData.append('senderEmail', formData.senderEmail);
    validatedFormData.append('message', formData.message);

    const { data: response, error: sendError } = await sendEmail(validatedFormData);

    if (sendError) {
      toast?.open('Failed to send email', 'error');
      setPending(false);
      return;
    }

    toast?.open('Email sent successfully!', 'success');
    setPending(false);
    setFormData({ senderName: '', senderEmail: '', message: '' });
  };

  return (
    <section id="contact" className="flex items-center border-t-2 py-14">
      <div className="container mx-auto">
        <Motion as="h1" delay={0.2} className="h2 mb-5 mt-10 text-center">
          Contact
        </Motion>
        <Motion as="section" delay={0.3} className="mx-auto w-[min(100%,38rem)] text-center sm:mb-28">
          <p>
            Contact me directly at&nbsp;
            <a className="font-bold underline hover:text-accent" href="mailto:trainer@gmail.com">
              trainer@gmail.com
            </a>
            &nbsp;or through this form.
          </p>

          <form className="mt-4 flex flex-col gap-y-4 dark:text-black" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-y-1">
              <input
                className={`${errors.senderName ? 'border-2 border-accent font-bold placeholder:text-accent' : 'border-2 border-muted placeholder:text-muted'} h-14 rounded-xl border-2 bg-primary px-4 text-white outline-none transition-all`}
                name="senderName"
                type="text"
                value={formData.senderName}
                onChange={handleChange}
                // required
                maxLength={100}
                placeholder="Name"
              />
              {errors.senderName && <p className="flex justify-start font-bold text-accent">{errors.senderName}</p>}
            </div>
            <div className="flex flex-col gap-y-1">
              <input
                className={`${
                  errors.senderEmail ? 'border-2 border-accent font-bold placeholder:text-accent' : 'border-2 border-muted placeholder:text-muted'
                } h-14 rounded-xl border-2 bg-primary px-4 text-white outline-none transition-all`}
                name="senderEmail"
                type="email"
                value={formData.senderEmail}
                onChange={handleChange}
                // required
                maxLength={500}
                placeholder="Email"
              />
              {errors.senderEmail && <p className="flex justify-start font-bold text-accent">{errors.senderEmail}</p>}
            </div>
            <div className="flex flex-col gap-y-1">
              <textarea
                className={`${
                  errors.message ? 'border-2 border-accent font-bold placeholder:text-accent' : 'border-2 border-muted placeholder:text-muted'
                } h-52 resize-none rounded-xl border-2 bg-primary p-4 text-white outline-none transition-all`}
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                // required
                maxLength={5000}
              />
              {errors.message && <p className="flex justify-start font-bold text-accent">{errors.message}</p>}
            </div>
            <AnimatedButton text="Submit" containerStyles="w-[196px] h-[56px] border-white" contact={true} pending={pending} />
          </form>
        </Motion>
      </div>
    </section>
  );
}
