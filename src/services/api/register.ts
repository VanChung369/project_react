// @ts-ignore
/* eslint-disable */
import { api } from '..';

export async function register(body: API.RegisterParams, options?: { [key: string]: any }) {
  return api.post<API.RegisterResult>({
    endpoint: '/api/auth/register',
    body: body,
    options: options,
  });
}
