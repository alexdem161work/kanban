import { post } from '~/services/fetch';

export const registration = async (data) => post('users/create', data);
export const login = async (data) => post('users/token', data);
