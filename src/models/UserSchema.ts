import mongoose, { Schema, model } from 'mongoose';

const userSchema = new Schema({
    fullName: String,
    username: String,
    password: String,
});

// export default model('User', userSchema);
export const UserSchema = mongoose.models.User || mongoose.model('User', userSchema);