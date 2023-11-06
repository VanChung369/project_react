import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface Conversation {
  conversations: Conversation[];
  loading: boolean;
}

const initialState: Conversation = {
  conversations: [],
  loading: false,
};

export const ConversationSlice = createSlice({
  name: 'conversations',
  initialState,
  reducers: {
    addConversation: (state: Conversation, action: PayloadAction<Conversation>) => {},
  },
});

export const { addConversation } = ConversationSlice.actions;

export const namespace = 'ConversationSlice';

export default ConversationSlice.reducer;
