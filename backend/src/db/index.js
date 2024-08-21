import mongoose from 'mongoose';
import { DB_NAME } from '../constants.js';


const connectDB = async () => {
  try {
    const connectionvar=await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
    console.log(`MongoDB connected: ${connectionvar.connection.host}`);
  } catch (error) {
    console.error('MongoDB connection failed:', error);
    process.exit(1);
  }
};

export default connectDB;