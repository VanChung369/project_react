// @ts-ignore
/* eslint-disable */
import { api } from '..';

export async function currentUser(options?: { [key: string]: any }) {
  return api.get<{ data: API.CurrentUser }>({
    endpoint: '/api/auth/currentUser',
    options: options,
  });
}
