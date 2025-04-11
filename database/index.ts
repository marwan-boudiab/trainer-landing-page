import { connect } from 'mongoose';

export default async function connectToDB() {
  try {
    await connect(process.env.MONGO_URI!);
    // console.log('Database connected successfully');
  } catch (e) {
    // console.log(e);
  }
}
