import useAdminStore from '@/lib/store';

import FormControls from '../form-controls/AdminFormControls';

import AnimatedButton from '@/components/client-view/ui/button/AnimatedButton';
import { Eraser } from 'lucide-react';

import About from '@/components/client-view/about/About';

const controls: Control[] = [
  { _id: 'about_input_1', name: 'icon', type: 'radio', label: 'Icon', options: ['Verified', 'CircleDollarSign', 'Dumbbell'] },
  { _id: 'about_input_2', name: 'title', placeholder: 'Title', type: 'text', label: 'About title' },
  { _id: 'about_input_3', name: 'subtitle', placeholder: 'Subtitle', type: 'text', label: 'About sub title' },
];

const AdminAboutView = () => {
  const { update, aboutViewFormData, setFormData, handleSaveData, resetFormDatas } = useAdminStore(state => ({
    update: state.update,
    aboutViewFormData: state.aboutViewFormData,
    setFormData: (data: Partial<FeatureType>) => state.setFormData('about', data),
    handleSaveData: state.handleSaveData,
    resetFormDatas: state.resetFormDatas,
  }));

  return (
    <div className="w-full">
      <div className="admin_form_container">
        <FormControls controls={controls} formData={aboutViewFormData} setFormData={setFormData} />
        <AnimatedButton text={!update ? 'Add' : 'Update'} containerStyles="admin_custom_btn" contact={true} pending={false} onClick={() => handleSaveData()} />
        <Eraser className="admin_eraser" onClick={() => resetFormDatas()} />
      </div>
      <About />
    </div>
  );
};

export default AdminAboutView;
