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
