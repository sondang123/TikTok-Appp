import * as request from '~/utils/request';

export const search = async (q, type = 'less') => {
    try {
        const response = await request.hello('users/search', {
            params: {
                q,
                type,
            },
        });
        return response.data;
    } catch (error) {
        console.log(error);
    }
};
