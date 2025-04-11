import { Check } from 'lucide-react';
// import { ChangeEvent } from 'react';
// import { Control } from '../AdminFormControls';

const CheckBox: React.FC<CheckBoxProps> = ({ formData, setFormData, controlItem, handleInputChange }) => {
  return (
    <div className="flex items-center">
      <input key={controlItem._id} id={controlItem.name} className="peer hidden" name={controlItem.name} type={controlItem.type} checked={formData[controlItem.name]} onChange={e => handleInputChange(e, controlItem.name)} />
      <div
        className={`flex h-6 w-6 cursor-pointer items-center justify-center rounded border-2 border-gray-300 transition-all peer-checked:border-accent peer-checked:bg-accent`}
        onClick={() => setFormData({ ...formData, [controlItem.name]: !formData[controlItem.name] })}
      >
        <Check className={`h-4 w-4 text-white ${formData[controlItem.name] ? 'block' : 'hidden'}`} />
      </div>
    </div>
  );
};
export default CheckBox;
