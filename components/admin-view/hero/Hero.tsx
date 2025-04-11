import FormControls from '../form-controls/AdminFormControls';

import AnimatedButton from '@/components/client-view/ui/button/AnimatedButton';
import useAdminStore from '@/lib/store';

import Hero from '@/components/client-view/hero/Hero';

const controls: Control[] = [
  { _id: 'hero_input_1', name: 'title', placeholder: 'Title', type: 'text', label: 'Hero title' },
  { _id: 'hero_input_2', name: 'subtitle', placeholder: 'Subtitle', type: 'text', label: 'Hero sub title' },
  { _id: 'hero_input_3', name: 'description', placeholder: 'Description', type: 'text', label: 'Hero description' },
  { _id: 'hero_input_4', name: 'img', placeholder: 'Image Path', type: 'image', label: 'Image path' },
];

const AdminHeroView = () => {
  const { heroViewFormData, setFormData, handleSaveData, update } = useAdminStore(state => ({
    heroViewFormData: state.heroViewFormData,
    setFormData: (data: Partial<HeroType>) => state.setFormData('hero', data),
    handleSaveData: state.handleSaveData,
    update: state.update,
  }));

  return (
    <div className="w-full">
      <div className="admin_form_container">
        <FormControls controls={controls} formData={heroViewFormData} setFormData={setFormData} />
        <AnimatedButton text={update ? 'Update' : 'Add'} containerStyles="admin_custom_btn" contact={true} pending={false} onClick={() => handleSaveData()} />
      </div>
      <Hero />
    </div>
  );
};

export default AdminHeroView;
