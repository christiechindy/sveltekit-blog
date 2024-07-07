import { connectDb } from "$lib/db";
import { redirect, type Handle } from "@sveltejs/kit";

console.log("connecting to mongodb...");
await connectDb();

// export const handle:Handle = async({event,resolve}) => {
//     const {cookies, url} = event;
//     const accessToken = cookies.get("accessToken");
//     const urlPath = url.pathname;

//     if (!accessToken && (urlPath==="/login" || urlPath==="/sign-up"))  {
//         console.log("inikah A");
//         return resolve(event);
//     }

//     if (!accessToken) {
//         throw redirect(302, "/login");
//     }

//     if (accessToken && (urlPath==="/login" || urlPath==="/sign-up")) {
//         throw redirect(302, "/home");
//     }

//     return resolve(event);
// }