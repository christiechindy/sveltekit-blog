import { json, type RequestHandler } from "@sveltejs/kit";
import UserSchema from "../../../models/UserSchema"
import { failMeta, successMeta } from "$lib/meta";
import * as bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";

export const POST:RequestHandler = async ({ request }) => {
    try {
        const {username, password} = await request.json();
        
        const findUser = await UserSchema.find({"username": username});
        
        if (findUser.length === 0) {
            return json({
                meta: {
                    code: 404,
                    status: false,
                    message: "User not found!"
                }
            })
        } else {
            const isPasswordCorrect = bcrypt.compareSync(password, findUser[0].password!);

            if (!isPasswordCorrect) {
                return json({
                    meta: {
                        code: 400,
                        status: false,
                        message: "The password doesn't match"
                    }
                })
            } else {
                const token = jwt.sign({
                    username: findUser[0].username
                }, "jdf8g3");
                const headers = new Headers();
                headers.append('set-cookie', `accessToken=${token}; HttpOnly; Path=/; Max-Age=3600`);
                return json({
                    meta: successMeta,
                    data: {
                        fullName: findUser[0].fullName
                    }
                }, {headers})
            }
        }
    } catch (err) {
        return json({
            meta: failMeta,
            data: err
        })
    }
}