import { ChangeEvent } from 'react';
// import { Control } from '../AdminFormControls';
import { CircleDollarSign, Dumbbell, Facebook, Instagram, MapPin, Phone, Verified } from 'lucide-react';

const iconMapping: IconMapping = {
  Verified: Verified,
  CircleDollarSign: CircleDollarSign,
  Dumbbell: Dumbbell,
  Instagram: Instagram,
  MapPin: MapPin,
  Phone: Phone,
  Facebook: Facebook,
};

const RadioBtns: React.FC<RadioBtnsProps> = ({ formData, controlItem, handleInputChange }) => {
  return (
    <div className="flex justify-center space-x-10">
      {controlItem.options?.map((option: string) => {
        const IconComponent = iconMapping[option];

        return (
          <label key={`${controlItem.name}-${option}`} className="flex cursor-pointer items-center space-x-2">
            <input
              key={option}
              id={`${controlItem.name}-${option}`}
              name={controlItem.name}
              type="radio"
              value={option}
              checked={formData[controlItem.name] === option}
              onChange={e => handleInputChange(e, controlItem.name)}
              className="hidden"
            />
            <div
              onClick={() => handleInputChange({ target: { value: option } } as ChangeEvent<HTMLInputElement>, controlItem.name)}
              className={`flex items-center space-x-2 ${formData[controlItem.name] === option ? 'text-accent' : 'text-white'}`}
            >
              {IconComponent ? <IconComponent className="size-7 transition-colors hover:text-accent" /> : <span>{option}</span>}
            </div>
          </label>
        );
      })}
    </div>
  );
};

export default RadioBtns;
