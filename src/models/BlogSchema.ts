import mongoose, { Schema } from 'mongoose';

const blogSchema = new Schema({
    title: String,
    description: String,
    picture: String,
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    createdAt: Date,
});

export const BlogSchema = mongoose.models.Blog || mongoose.model('Blog', blogSchema);