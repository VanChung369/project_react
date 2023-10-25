// @ts-ignore
/* eslint-disable */
import { api } from '..';

export async function getConversation(options?: { [key: string]: any }) {
  return api.get<API.ConversationList>({ endpoint: '/api/conversations', options: options });
}
