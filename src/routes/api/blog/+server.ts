import { failMeta, successMeta } from "$lib/meta";
import { json, type RequestHandler } from "@sveltejs/kit";
import { BlogSchema } from "../../../models/BlogSchema";
import fs from 'fs';
import jwt from 'jsonwebtoken';
import { JWT_SECRET } from "$env/static/private";

interface IJwtPayload {
    id: string;
}

export const POST:RequestHandler = async ({request}) => {
    try {
        const authHeader = request.headers.get('Authorization');
        if (!authHeader) {
            return json({
                meta: {
                    code: 401,
                    status: false,
                    message: 'Authorization header missing' 
                }
            });
        }

        const token = authHeader.split(' ')[1];
        if (!token) {
            return json({
                meta: {
                    code: 401,
                    status: false,
                    message: "Token missing"
                }
            });
        }

        let userID;
        try {
            const decoded = jwt.verify(token, JWT_SECRET) as IJwtPayload;
            userID = decoded.id;
        } catch (err) {
            return json({
                meta: {
                    code: 403,
                    status: false,
                    message: "Invalid token"
                }
            });
        }

        const formData = await request.formData();
        const title = formData.get('title') as string;
        const description = formData.get('description') as string;
        const coverImageFile = formData.get('coverImage') as File;

        if (!coverImageFile) {
            return json({ error: 'Cover image is required' }, { status: 400 });
        }

        // Handle the file upload
        const filename = `${Date.now()}-${coverImageFile.name}`;
        const fileBuffer = await coverImageFile.arrayBuffer();
        const filePath = `static/uploads/${filename}`;
        
        // Ensure the directory exists
        fs.mkdirSync('static/uploads', { recursive: true });

        // Save the file to the server
        fs.writeFileSync(filePath, Buffer.from(fileBuffer));

        const picture = `/uploads/${filename}`;

        const newBlog = new BlogSchema({
            title,
            description,
            picture,
            createdAt: new Date(),
            author: userID
        });

        await newBlog.save();

        return json({
            meta: successMeta,
            data: newBlog
        }, { status: 201 });
    } catch (err) {
        return json({
            meta: failMeta,
            data: err
        })
    }
}