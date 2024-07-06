import { json } from '@sveltejs/kit';
import UserSchema from '../../../models/UserSchema.js';
import { failMeta, successMeta } from '$lib/meta.js';
import * as bcrypt from "bcrypt";

export const POST = async ({request}) => {
    try {
        const {full_name, username, password} = await request.json();

        const findUser = await UserSchema.find({"username": username});

        if (findUser.length) {
            return json({
                meta: {
                    code: 409,
                    status: false,
                    message: "That username has already exists! If you own it, please login. Otherwise, make a unique username!"
                }
            })
        } else {
            // hash the password and create a user
            const salt = bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync(password, salt);

            const user = new UserSchema({
                fullName: full_name,
                username,
                password: hash
            });
            await user.save();

            return json({
                meta: successMeta,
                data: {
                    user
                }
            });
        }
    } catch(err) {
        return json({
            meta: failMeta,
            data: err
        })
    }
}