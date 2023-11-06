import { RootState } from '../store';

const selectConversation = {
  selectConversations: (state: RootState) => state?.ConversationSlice.conversations,
};

export default selectConversation;
