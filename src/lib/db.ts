import mongoose from 'mongoose';

const MONGODB_URI = 'mongodb://127.0.0.1:27017/';
const connection = mongoose.createConnection(MONGODB_URI);

export const connectDb = async() => {
    await mongoose.connect(MONGODB_URI, {dbName: "svelte-blog"})
    .then(() => console.log("successfully connected to mongoDB"))
}

export default connection;