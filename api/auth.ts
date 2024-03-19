import { post } from '~/services/fetch';

export const registration = async (attributes) => post('users/create', attributes);
export const login = async (attributes) => post('users/token', attributes);
export const refresh = async (refresh) => post('users/token/refresh', { refresh });
