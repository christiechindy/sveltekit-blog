import { connectDb } from "$lib/db";

console.log("connecting to mongodb...");
await connectDb();