import mongoose from 'mongoose';
const DatabaseConnect = async (databaseUri: string) => {
  try {
    await mongoose.connect(databaseUri).then(() => {
      console.log('MongoDb Connected!');
    });
  } catch (err) {
    console.log(err);
  }
};

export { DatabaseConnect };
