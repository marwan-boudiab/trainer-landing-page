import mongoose from 'mongoose';

const GallerySchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    img: { type: String, required: true },
    description: { type: String, required: false },
  },
  { timestamps: true }
);

const Gallery = mongoose.models.Gallery || mongoose.model('Gallery', GallerySchema);

export default Gallery;
