
import mongoose from 'mongoose';



const connectToMongo = async () => {
  try {
    
    await mongoose.connect('mongodb://localhost:27017/todo_next_js_t')
    console.log('Connected to MongoDB');
    
  } catch (error) {
    console.error('Error connecting to MongoDB', error);
    process.exit(1);
  }
};

export default connectToMongo;
