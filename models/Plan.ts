import mongoose from 'mongoose';

const BenefitSchema = new mongoose.Schema({
  checked: { type: Boolean, required: true },
  text: { type: String, required: true },
});

const PlanSchema = new mongoose.Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true },
  benefits: { type: [BenefitSchema], required: true },
});

const Plan = mongoose.models.Plan || mongoose.model('Plan', PlanSchema);

export default Plan;
