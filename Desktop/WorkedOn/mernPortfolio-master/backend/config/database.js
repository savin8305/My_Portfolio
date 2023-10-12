import mongoose from "mongoose";
console.log(`MONGO_URI: ${'mongodb://localhost:27017/Akash'}`);
export const connectDatabase = () => {
  mongoose
    .connect('mongodb://localhost:27017/Akash')
    .then((c) => {
      console.log(`Mongodb connect to: ${c.connection.host} successfully`);
    })
    .catch((e) => {
      console.log(e);
    });
};
