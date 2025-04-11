import mongoose from 'mongoose';

const HeroSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    subtitle: { type: String, required: true },
    description: { type: String, required: false },
    img: { type: String, required: true },
  },
  { timestamps: true }
);

const Hero = mongoose.models.Hero || mongoose.model('Hero', HeroSchema);

export default Hero;