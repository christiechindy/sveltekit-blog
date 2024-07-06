import { json } from "@sveltejs/kit";
import UserSchema from "../../../models/UserSchema"
import { failMeta, successMeta } from "$lib/meta";

export const GET = async () => {
    try {
        const users = await UserSchema.find();

        return json({
            meta: successMeta,
            data: {
                users
            }
        });
    } catch (err) {
        return json({
            meta: failMeta,
            data: err
        })
    }
}

export const POST = async ({ request }) => {
    try {
        const {username, password} = await request.json();
        
        const user = new UserSchema({
            username, password
        });
    
        await user.save();

        return json({
            meta: successMeta,
            data: {
                user
            }
        });
    } catch (err) {
        return json({
            meta: failMeta,
            data: err
        })
    }
}