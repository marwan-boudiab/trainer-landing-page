import { ImageMinus } from 'lucide-react';
import { CldUploadButton } from 'next-cloudinary';

const ImageSelector: React.FC<ImageSelectorProps> = ({ handleUploadImage, handleRemoveImage }) => {
  return (
    // <input
    //   id={controlItem.name}
    //   name={controlItem.name}
    //   type="file"
    //   onChange={e => handleFileInputChange(e, controlItem.name)}
    //   placeholder={controlItem.placeholder}
    // />
    <div className="flex items-center gap-x-4">
      <CldUploadButton onUpload={handleUploadImage} className="rounded-xl border-2 bg-accent px-4 py-2 text-white" uploadPreset="next_cloudinary_trainer_app">
        Upload Image
      </CldUploadButton>
      <ImageMinus className="cursor-pointer hover:text-accent" onClick={handleRemoveImage} />
    </div>
  );
};
export default ImageSelector;
