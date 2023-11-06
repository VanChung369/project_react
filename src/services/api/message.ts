// @ts-ignore
/* eslint-disable */
import { api } from '..';

export async function getMessageConversationById(
  params: API.getMessageConversationByIdParams,
  options?: { [key: string]: any },
) {
  const { conversationId: conversationId } = params;
  return api.get<API.MessageList>({
    endpoint: `/api/messages/${conversationId}`,
    options: options,
  });
}

export async function createMessageConversation(
  body: API.CreateMessageParams,
  options?: { [key: string]: any },
) {
  return api.post<API.CreateMessageResult>({
    endpoint: '/api/messages',
    body: body,
    options: options,
  });
}
