import { get } from '~/services/fetch';

export const getCards = async (): Promise<[]> => get('cards');
