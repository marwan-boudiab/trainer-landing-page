declare type GlobalType = { _id?: string; name: string; aboutSubtitle: string; footerDescription: string; plansImg: string };
declare type SocialType = { _id: string; icon: string; text: string; href: string | null };
declare type HeroType = { _id?: string; title: string; subtitle: string; description: string; img: string };
declare type FeatureType = { _id?: string; icon: string; title: string; subtitle: string };
declare type GalleryType = { _id?: string; title: string; img: string; description: string };
declare type planType = { _id?: string; title: string; price: string; benefits: BenefitType[] };
declare type BenefitType = { checked?: boolean; text: string };
declare type TestimonialType = { _id?: string; img: string; message: string; name: string };
declare type GalleryType = { _id: string; title: string; img: string; description: string };
declare type LinkType = { name: string; target: string; offset: number };
// declare type Equipment = { id: number; title: string; }

declare type HeroStructureProps = { subtitle: string; title: string; description: string; img: string };
declare type GallerySectionProps = { gallery: GalleryType[] };
declare type ScrollLinkProps = { to: string; offset?: number; smooth?: boolean; spy?: boolean; activeClass?: string; className?: string; children: React.ReactNode };
declare type SocialsProps = { iconStyles: string; displayContent?: boolean; direction?: 'row' | 'column' };
declare type AnimatedButtonProps = { text: string; containerStyles: string; contact?: boolean; pending?: boolean; onClick?: () => void; primary?: boolean };
declare type ToastProps = { message: string; close: () => void; type: 'success' | 'warning' | 'info' | 'error' };

declare type CheckBoxProps = { formData: Record<string, any>; setFormData: React.Dispatch<React.SetStateAction<Record<string, any>>>; controlItem: Control; handleInputChange: (e: ChangeEvent<HTMLInputElement>, name: string) => void };
declare type ImageSelectorProps = { handleUploadImage: (result: any) => void; handleRemoveImage: () => void };
declare type RadioBtnsProps = { formData: Record<string, any>; controlItem: Control; handleInputChange: (e: ChangeEvent<HTMLInputElement>, name: string) => void };
declare type ContactFormEmailProps = { senderName: string; senderEmail: string; message: string };

declare type IconMapping = { [key: string]: React.ComponentType<{ className?: string }> };

declare type Control = { _id: string; name: string; placeholder?: string; type: string; label: string; options?: string[] };
declare type FormControlsProps = {
  controls: Control[];
  formData: Record<string, any>;
  setFormData: (data: Record<string, any>) => void;
};

declare type ToastContextValue = { open: (message: string, type?: 'success' | 'warning' | 'info' | 'error') => void; close: (id: number) => void };


