import type { TMeta } from "../types/ApiTypes";

export const successMeta:TMeta = {
    code: 200,
    status: true,
    message: "Success"
}

export const failMeta:TMeta = {
    code: 500,
    status: false,
    message: "Fail"
}