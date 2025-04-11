import { model, models, Schema } from 'mongoose';

const GlobalSchema = new Schema(
  {
    name: { type: String, required: true },
    aboutSubtitle: { type: String, required: true },
    footerDescription: { type: String, required: true },
    plansImg: { type: String, required: true },
  },
  { timestamps: true }
);

const Global = models.Global || model('Global', GlobalSchema);

export default Global;
