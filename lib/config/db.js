
import mongoose from 'mongoose';



const connectToMongo = async () => {
  try {


    
    
    await mongoose.connect('mongodb+srv://emilshiju:Hacker@10@cluster0.klkhk.mongodb.net/')
    console.log('Connected to MongoDB');
    

  } catch (error) {
    console.error('Error connecting to MongoDB', error);
    process.exit(1);
  }
};

export default connectToMongo;
