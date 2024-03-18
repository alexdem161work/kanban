import BadRequestError from '~/errors/BadRequestError';

export interface payloadType {
  [key: string]: string | null | number | boolean
}

interface apiOptions {
  method: 'GET' | 'POST' | 'DELETE',
  payload?: payloadType,
}

export const call = async (url: string, options: apiOptions = { method: 'GET' }): Promise<object> => {
  const headers = {
    'Content-Type': 'application/json;charset=utf-8',
    Authorization: '',
  };

  const authToken: string | null = localStorage.getItem('kanban.auth.access');
  if (authToken) {
    headers.Authorization = `JWT ${authToken}`;
  }

  let uri = `https://trello.backend.tests.nekidaem.ru/api/v1/${url}/`;
  const fetchOptions: RequestInit = {
    method: options.method,
    headers,
  };

  if (options.method === 'POST' && options.payload) {
    fetchOptions.body = JSON.stringify(options.payload);
  } else if (options.payload) {
    const queryParams = new URLSearchParams(
      Object.entries(options.payload)
        .filter(([key, value]) => value !== undefined && value !== null && value !== '')
        .reduce((accum, [key, value]) => ({ ...accum, [key]: value }), {}),
    ).toString();
    uri += `?${queryParams}`;
  }

  const response: Response = await fetch(uri, fetchOptions);

  const data = await response.json();
  if (response.status === 400) {
    throw new BadRequestError('Bad Request', data);
  } else if (response.ok) {
    return data;
  }

  throw new Error('Произошло что-то очень страшное.');
};

export const get = async (
  url: string,
  payload: payloadType = {},
): Promise<object> => await call(url, { method: 'GET', payload });

export const post = async (
  url: string,
  payload: payloadType = {},
): Promise<object> => await call(url, { method: 'POST', payload });

export const remove = async (
  url: string,
  payload: payloadType = {},
): Promise<object|null> => await call(url, { method: 'DELETE', payload });
