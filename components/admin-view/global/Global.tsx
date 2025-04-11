import useAdminStore from '@/lib/store';

import FormControls from '../form-controls/AdminFormControls';

import AnimatedButton from '@/components/client-view/ui/button/AnimatedButton';

import About from '@/components/client-view/about/About';
import Plans from '@/components/client-view/plans/Plans';
import Footer from '@/components/client-view/footer/Footer';

const controls: Control[] = [
  { _id: 'global_input_1', name: 'name', placeholder: 'Name', type: 'text', label: 'Name' },
  { _id: 'global_input_2', name: 'aboutSubtitle', placeholder: 'About Subtitle', type: 'text', label: 'About sub title' },
  { _id: 'global_input_3', name: 'footerDescription', placeholder: 'Footer Description', type: 'text', label: 'Footer description' },
  { _id: 'global_input_4', name: 'plansImg', placeholder: 'Plans Image Path', type: 'image', label: 'Plans image path' },
];

const AdminGlobalView = () => {
  const { globalViewFormData, setFormData, update, handleSaveData } = useAdminStore(state => ({
    globalViewFormData: state.globalViewFormData,
    setFormData: (data: Partial<GlobalType>) => state.setFormData('global', data),
    update: state.update,
    handleSaveData: state.handleSaveData,
  }));

  return (
    <div className="w-full">
      <div className="admin_form_container">
        <FormControls controls={controls} formData={globalViewFormData} setFormData={setFormData} />
        <AnimatedButton text={update ? 'Update' : 'Add'} containerStyles="admin_custom_btn" contact={true} pending={false} onClick={() => handleSaveData()} />
      </div>
      {/* About Header View */}
      <About />
      {/* Plan View */}
      <Plans />
      {/* Footer View */}
      <Footer />
    </div>
  );
};

export default AdminGlobalView;
