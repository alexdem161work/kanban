import { get, post, patch } from '~/services/fetch';

export const getCards = async (): Promise<[]> => get('cards');

export const createCard = async (attributes) => post('cards', attributes);

export const updateCard = async (id, attributes) => patch(`cards/${id}`, attributes);
