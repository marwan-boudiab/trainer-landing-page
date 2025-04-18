import mongoose from 'mongoose';

const AdminSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

const Admin = mongoose.models.Admin || mongoose.model('Admin', AdminSchema);

export default Admin;
