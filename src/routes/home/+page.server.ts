import { BlogSchema } from "../../models/BlogSchema";

// interface IBlogs {
//     title: string;
//     description: string;
//     picture: string;
//     author: string;
//     _id: string;
// }

export const load = async () => {
    try {
        const blogs = await BlogSchema.find().lean().exec();
        for (let i=0; i < blogs.length; i++) {
            blogs[i]._id = blogs[i]._id.toString();
            blogs[i].author = blogs[i].author.toString();
        }
        // console.log(blogs);
        return {blogs};
    } catch (err) {
        return null;
    }
}