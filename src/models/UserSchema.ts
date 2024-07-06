import { Schema, model } from 'mongoose';

const userSchema = new Schema({
    fullName: String,
    username: String,
    password: String,
});

export default model('User', userSchema);
