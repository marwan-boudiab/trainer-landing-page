import useAdminStore from '@/lib/store';

import FormControls from '../form-controls/AdminFormControls';

import AnimatedButton from '@/components/client-view/ui/button/AnimatedButton';
import { Eraser } from 'lucide-react';

import Socials from '@/components/client-view/socials/Socials';

const controls: Control[] = [
  { _id: 'social_input_1', name: 'icon', type: 'radio', label: 'Icon', options: ['Instagram', 'Facebook', 'Phone', 'MapPin'] },
  { _id: 'social_input_2', name: 'text', placeholder: 'Text', type: 'text', label: 'Social Title' },
  { _id: 'social_input_3', name: 'href', placeholder: 'Link to your social', type: 'text', label: 'Link to your social' },
];

const AdminSocialView = () => {
  const { socialViewFormData, setFormData, handleSaveData, update, resetFormDatas } = useAdminStore(state => ({
    socialViewFormData: state.socialViewFormData,
    setFormData: (data: Partial<SocialType>) => state.setFormData('social', data),
    handleSaveData: state.handleSaveData,
    update: state.update,
    resetFormDatas: state.resetFormDatas,
  }));

  return (
    <div className="w-full">
      <div className="admin_form_container px-3">
        <FormControls controls={controls} formData={socialViewFormData} setFormData={setFormData} />
        <AnimatedButton text={update ? 'Update' : 'Add'} containerStyles="admin_custom_btn" contact={true} pending={false} onClick={() => handleSaveData()} />
        <Eraser className="admin_eraser" onClick={() => resetFormDatas()} />
      </div>
      <div className="px-3">
        <Socials displayContent={true} iconStyles={'w-10 h-10 border-2 border-white rounded-xl flex justify-center items-center text-white text-base hover:bg-white hover:text-accent hover:transition-all duration-500'} />
      </div>
    </div>
  );
};

export default AdminSocialView;
