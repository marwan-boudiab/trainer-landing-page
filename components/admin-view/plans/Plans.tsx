import { useState } from 'react';

import useAdminStore from '@/lib/store';

import FormControls from '../form-controls/AdminFormControls';
import AnimatedButton from '@/components/client-view/ui/button/AnimatedButton';
import { Eraser, X } from 'lucide-react';

import Plans from '@/components/client-view/plans/Plans';

const AdminPlanView = () => {
  const { planViewFormData, setFormData, handleSaveData, update, resetFormDatas } = useAdminStore(state => ({
    planViewFormData: state.planViewFormData,
    setFormData: (data: Partial<planType>) => state.setFormData('plan', data),
    handleSaveData: state.handleSaveData,
    update: state.update,
    resetFormDatas: state.resetFormDatas,
  }));

  const [benefitControls] = useState<Control[]>([
    { _id: 'benefit_input_1', name: 'checked', placeholder: 'Checked?', type: 'checkbox', label: 'Checked?' },
    { _id: 'benefit_input_2', name: 'text', placeholder: 'Benefit', type: 'text', label: 'Benefit text' },
  ]);

  const handleAddBenefit = () => {
    const newBenefits: BenefitType[] = [...planViewFormData.benefits, { checked: false, text: '' }];
    setFormData({ ...planViewFormData, benefits: newBenefits });
  };

  const handleRemoveBenefit = (index: number) => {
    const newBenefits = [...planViewFormData.benefits];
    newBenefits.splice(index, 1);
    setFormData({ ...planViewFormData, benefits: newBenefits });
  };

  const addBenefitFormControls = () => {
    return planViewFormData.benefits.map((_benefit: BenefitType, index: number) => (
      <div key={index} className="relative flex flex-wrap items-center justify-center gap-x-4">
        <FormControls
          controls={benefitControls}
          formData={planViewFormData.benefits[index] || { checked: false, text: '' }}
          setFormData={newData => {
            const newBenefits = [...planViewFormData.benefits];
            newBenefits[index] = { ...newBenefits[index], ...newData };
            setFormData({ ...planViewFormData, benefits: newBenefits });
          }}
        />
        <X className="absolute -right-8 top-4 text-accent hover:cursor-pointer" onClick={() => handleRemoveBenefit(index)} />
      </div>
    ));
  };

  return (
    <div className="w-full">
      <div className="container relative mb-6 flex flex-col items-center justify-start gap-x-4 lg:w-1/2">
        <FormControls
          controls={[
            { _id: 'plan_input_1', name: 'title', placeholder: 'Title', type: 'text', label: 'Title' },
            { _id: 'plan_input_2', name: 'price', placeholder: 'Price', type: 'text', label: 'Price' },
          ]}
          formData={{ title: planViewFormData.title, price: planViewFormData.price }}
          setFormData={newData => setFormData({ ...planViewFormData, ...newData })}
        />
        <h2 className="mb-2 text-lg font-semibold">Benefits</h2>
        {addBenefitFormControls()}
        <div className="flex flex-wrap justify-center gap-2">
          <AnimatedButton text="New" containerStyles="w-[6rem] h-11 border-white" primary={false} contact={true} pending={false} onClick={handleAddBenefit} />
          <AnimatedButton text={update ? 'Update' : 'Add'} containerStyles="w-[6rem] h-11 border-white" contact={true} pending={false} onClick={() => handleSaveData()} />
        </div>
        <Eraser className="absolute right-4 top-0 cursor-pointer hover:text-accent" onClick={() => resetFormDatas()} />
      </div>
      <Plans />
    </div>
  );
};

export default AdminPlanView;
