import useAdminStore from '@/lib/store';

import FormControls from '../form-controls/AdminFormControls';

import AnimatedButton from '@/components/client-view/ui/button/AnimatedButton';
import { Eraser } from 'lucide-react';

import Gallery from '@/components/client-view/gallery/Gallery';

const controls: Control[] = [
  { _id: 'gallery_input_1', name: 'title', placeholder: 'Title', type: 'text', label: 'Title' },
  { _id: 'gallery_input_2', name: 'description', placeholder: 'Description', type: 'text', label: 'Description' },
  { _id: 'gallery_input_3', name: 'img', placeholder: 'Image Path', type: 'image', label: 'Image path' },
];

const AdminGalleryView = () => {
  const { galleryViewFormData, setFormData, handleSaveData, update, resetFormDatas } = useAdminStore(state => ({
    galleryViewFormData: state.galleryViewFormData,
    setFormData: (data: Partial<GalleryType>) => state.setFormData('gallery', data),
    handleSaveData: state.handleSaveData,
    update: state.update,
    resetFormDatas: state.resetFormDatas,
  }));

  return (
    <div className="w-full">
      <div className="admin_form_container">
        <FormControls controls={controls} formData={galleryViewFormData} setFormData={setFormData} />
        <AnimatedButton text={update ? 'Update' : 'Add'} containerStyles="admin_custom_btn" contact={true} pending={false} onClick={() => handleSaveData()} />
        <Eraser className="admin_eraser" onClick={() => resetFormDatas()} />
      </div>
      <Gallery />
    </div>
  );
};

export default AdminGalleryView;
