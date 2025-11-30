import mongoose from 'mongoose';

let initialized = false;

export const connect = async () => {
  mongoose.set('strictQuery', true);
  if (initialized) {
    console.log('Kết nối với MongoDB thành công.');
    return;
  }
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: 'nhatdev-blog',
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Kết nối MongoDB thành công');
    initialized = true;
  } catch (error) {
    console.log('Lỗi kết nối tới MongoDB:', error);
  }
};
