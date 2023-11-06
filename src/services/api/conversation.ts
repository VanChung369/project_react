// @ts-ignore
/* eslint-disable */
import { api } from '..';

export async function getConversation(options?: { [key: string]: any }) {
  return api.get<API.ConversationList>({ endpoint: '/api/conversations', options: options });
}

export async function createConversationConversation(
  body: API.CreateConversationParams,
  options?: { [key: string]: any },
) {
  return api.post<any>({
    endpoint: '/api/conversations',
    body: body,
    options: options,
  });
}
