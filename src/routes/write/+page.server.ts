import type { PageServerLoad } from '../write/$types';

export const load = (async ({ cookies }) => {
    const accessToken = cookies.get('accessToken');

    return {
        accessToken
    };
}) satisfies PageServerLoad;