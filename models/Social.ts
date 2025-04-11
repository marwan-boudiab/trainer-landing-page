import mongoose from 'mongoose';

const SocialSchema = new mongoose.Schema(
  {
    icon: { type: String, required: false },
    text: { type: String, required: true },
    href: { type: String, default: null },
  },
  { timestamps: true }
);

const Social = mongoose.models.Social || mongoose.model('Social', SocialSchema);

export default Social;
