import { combineReducers } from 'redux';
import DemoSlice, { namespace as DemoNamespace } from './demo/slice';
import ConversationSlice, { namespace as ConversationNamespace } from './conversation/slice';

export default combineReducers({
  [DemoNamespace]: DemoSlice,
  [ConversationNamespace]: ConversationSlice,
});
