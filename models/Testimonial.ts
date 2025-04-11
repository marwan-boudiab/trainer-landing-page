import mongoose from 'mongoose';

const TestimonialSchema = new mongoose.Schema(
  {
    img: { type: String, required: false },
    name: { type: String, required: true },
    message: { type: String, required: true },
  },
  { timestamps: true }
);

const Testimonial = mongoose.models.Testimonial || mongoose.model('Testimonial', TestimonialSchema);

export default Testimonial;
