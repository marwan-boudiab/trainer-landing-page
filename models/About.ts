import mongoose from 'mongoose';

const AboutSchema = new mongoose.Schema(
  {
    icon: { type: String, required: false },
    title: { type: String, required: true },
    subtitle: { type: String, required: true },
  },
  { timestamps: true }
);

const About = mongoose.models.About || mongoose.model('About', AboutSchema);

export default About;
