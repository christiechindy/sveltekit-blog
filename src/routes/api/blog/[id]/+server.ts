import { failMeta, successMeta } from '$lib/meta.js';
import { json } from '@sveltejs/kit';
import { BlogSchema } from '../../../../models/BlogSchema.js';

export const DELETE = async ({request, url}) => {
    try {
        const blogID = url.pathname.split("blog/")[1];
        await BlogSchema.findByIdAndDelete(blogID);

        return json({
            meta: successMeta,
            data: blogID
        })
    } catch (err) {
        return json({
            meta: failMeta,
            data: err
        })
    }
}