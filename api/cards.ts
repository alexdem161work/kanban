import { get, post } from '~/services/fetch';

export const getCards = async (): Promise<[]> => get('cards');

export const createCard = async (data) => post('cards', data);
