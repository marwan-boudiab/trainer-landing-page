'use client';

import { z } from 'zod';

import { useState } from 'react';

import { useToast } from '@/hooks/useToast';

import AnimatedButton from '../client-view/ui/button/AnimatedButton';
import Motion from '../client-view/motion/MotionComp';

import { login } from '@/services';

export const contactSchema = z.object({
  Name: z.string().min(1, 'Name is required'),
  Password: z.string().min(1, 'Password is required'),
});

export type ContactFormData = z.infer<typeof contactSchema>;

export default function AdminForm({ setAuthUser }: { setAuthUser: (data: boolean) => void }) {
  const toast = useToast();

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [pending, setPending] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

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

  const [formData, setFormData] = useState<ContactFormData>({ Name: '', Password: '' });

  async function handleLogin() {
    const loginFormData = new FormData();
    loginFormData.append('Name', formData.Name);
    loginFormData.append('Password', formData.Password);

    const res = await login(loginFormData);

    if (!res.success) return { error: res.message };

    setAuthUser(true);
    sessionStorage.setItem('authUser', JSON.stringify(true));
    return { success: res.message };
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setPending(true);

    try {
      contactSchema.parse(formData);
      setErrors({});
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

    const validatedFormData = new FormData();
    validatedFormData.append('Name', formData.Name);
    validatedFormData.append('Password', formData.Password);

    setFormData({
      Name: validatedFormData.get('Name')?.toString()!,
      Password: validatedFormData.get('Password')?.toString()!,
    });

    const { error, success } = await handleLogin();

    if (error) {
      toast?.open(error, 'error');
      setPending(false);
      return;
    }

    toast?.open(success, 'success');
    setPending(false);
    setFormData({ Name: '', Password: '' });
  };

  return (
    <section className="flex items-center py-14">
      <div className="container mx-auto">
        <Motion as="h1" delay={0.2} className="h2 mb-5 mt-10 text-center">
          Login to Admin Panel
        </Motion>
        <Motion as="section" className="mx-auto w-[min(100%,38rem)] text-center sm:mb-28">
          <form className="mt-4 flex flex-col gap-y-4 text-white" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-y-1">
              <input
                className={`${errors.Name ? 'border-accent font-bold placeholder:text-accent' : 'border-muted placeholder:text-muted'} h-14 rounded-xl border-2 bg-primary px-4 outline-none transition-all`}
                name="Name"
                type="text"
                value={formData.Name}
                onChange={handleChange}
                maxLength={100}
                placeholder="Name"
              />
              {errors.Name && <p className="flex justify-start font-bold text-accent">{errors.Name}</p>}
            </div>
            <div className="flex flex-col gap-y-1">
              <input
                className={`${errors.Password ? 'border-accent font-bold placeholder:text-accent' : 'border-muted placeholder:text-muted'} h-14 rounded-xl border-2 bg-primary px-4 outline-none transition-all`}
                name="Password"
                type="text"
                value={formData.Password}
                onChange={handleChange}
                maxLength={500}
                placeholder="Password"
              />
              {errors.Password && <p className="flex justify-start font-bold text-accent">{errors.Password}</p>}
            </div>
            <AnimatedButton text="Submit" containerStyles="w-[196px] h-[56px] border-white" contact={true} pending={pending} />
          </form>
        </Motion>
      </div>
    </section>
  );
}
