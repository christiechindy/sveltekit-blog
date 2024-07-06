export type TMeta = {
    code: number;
    status: boolean;
    message: string
}

export type TApiResp = {
    meta: TMeta,
    data: any
}