'use client';
import { ChangeEvent } from 'react';

import RadioBtns from './components/RadioBtn';
import CheckBox from './components/CheckBox';
import ImageSelector from './components/ImageSelector';

const FormControls: React.FC<FormControlsProps> = ({ controls, formData, setFormData }) => {
  // const handleFileInputChange = (e: ChangeEvent<HTMLInputElement>, name: string) => {
  //   const file = e.target.files && e.target.files[0];
  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onloadend = () => {
  //       setFormData({ ...formData, [name]: reader.result });
  //     };
  //     reader.readAsDataURL(file);
  //   }
  // };
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>, name: string) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setFormData({ ...formData, [name]: value });
  };

  const handleRemoveImage = (name: string) => {
    setFormData({ ...formData, [name]: '' });
  };

  const handleUploadImage = (result: any, name: string) => {
    console.log(result.info.public_id);
    if (result.event === 'success') setFormData({ ...formData, [name]: result.info.public_id });
  };

  return (
    <>
      {controls.map(controlItem => (
        <div className="mb-4" key={controlItem.name}>
          {controlItem.type === 'radio' ? (
            <RadioBtns formData={formData} controlItem={controlItem} handleInputChange={handleInputChange} />
          ) : controlItem.type === 'checkbox' ? (
            <CheckBox formData={formData} setFormData={setFormData} controlItem={controlItem} handleInputChange={handleInputChange} />
          ) : controlItem.type === 'image' ? (
            // <ImageSelector controlItem={controlItem} handleFileInputChange={handleFileInputChange} />
            <ImageSelector handleUploadImage={(result: any) => handleUploadImage(result, controlItem.name)} handleRemoveImage={() => handleRemoveImage(controlItem.name)} />
          ) : (
            <input
              key={controlItem._id}
              id={controlItem.name}
              className={`border-1 h-14 w-full rounded-xl border-2 bg-primary px-4 outline-none transition-all placeholder:text-muted`}
              name={controlItem.name}
              type={controlItem.type}
              value={formData[controlItem.name]}
              onChange={e => handleInputChange(e, controlItem.name)}
              placeholder={controlItem.placeholder}
            />
          )}
        </div>
      ))}
    </>
  );
};

export default FormControls;
