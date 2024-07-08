import { BlogSchema } from "../../models/BlogSchema";

export const load = async () => {
    console.log("--------------------------mni");
    try {
        const blogs = await BlogSchema.find().select('-_id -author').lean();
        // console.log(blogs);
        return {blogs};
    } catch (err) {
        return null;
    }
}