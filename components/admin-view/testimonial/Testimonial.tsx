import useAdminStore from '@/lib/store';

import FormControls from '../form-controls/AdminFormControls';

import AnimatedButton from '@/components/client-view/ui/button/AnimatedButton';
import { Eraser } from 'lucide-react';
import Testimonials from '@/components/client-view/testimonials/Testimonials';

const controls: Control[] = [
  { _id: 'testimonial_input_1', name: 'name', placeholder: 'Name', type: 'text', label: 'Name' },
  { _id: 'testimonial_input_2', name: 'message', placeholder: 'Message', type: 'text', label: 'Message' },
  { _id: 'testimonial_input_3', name: 'img', placeholder: 'Image path', type: 'image', label: 'Image path' },
];

const AdminTestimonialView = () => {
  const { testimonialViewFormData, setFormData, handleSaveData, update, resetFormDatas } = useAdminStore(state => ({
    testimonialViewFormData: state.testimonialViewFormData,
    setFormData: (data: Partial<Record<string, string>>) => state.setFormData('testimonial', data),
    handleSaveData: state.handleSaveData,
    update: state.update,
    resetFormDatas: state.resetFormDatas,
  }));

  return (
    <div className="w-full">
      <div className="admin_form_container container rounded">
        <FormControls controls={controls} formData={testimonialViewFormData} setFormData={setFormData} />
        <AnimatedButton text={update ? 'Update' : 'Add'} containerStyles="admin_custom_btn" contact={true} pending={false} onClick={() => handleSaveData()} />
        <Eraser className="admin_eraser" onClick={() => resetFormDatas()} />
      </div>
      <Testimonials />
    </div>
  );
};

export default AdminTestimonialView;
