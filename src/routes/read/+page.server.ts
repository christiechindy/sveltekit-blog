import { BlogSchema } from '../../models/BlogSchema.js';

export async function load({ url }) {
    const id = url.href.split('?id=')[1];

    try {
        const blog = await BlogSchema.findById(id).lean().exec();
        blog._id = blog._id.toString();
        blog.author = blog.author.toString();
        console.log("blog", blog);
    
        return {blog};
    } catch (err) {
        return null;
    }
}