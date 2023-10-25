// @ts-ignore
/* eslint-disable */

declare namespace API {
  type User = {
    id?: number;
    email?: string;
    firstName?: string;
    lastName?: string;
  };

  type CurrentUser = {
    id?: number;
    email?: string;
    firstName?: string;
    lastName?: string;
    signature?: string;
    access?: string;
  };

  type LoginResult = {
    status?: string;
    type?: string;
    currentAuthority?: string;
  };

  type PageParams = {
    current?: number;
    pageSize?: number;
  };

  type RuleListItem = {
    key?: number;
    disabled?: boolean;
    href?: string;
    avatar?: string;
    name?: string;
    owner?: string;
    desc?: string;
    callNo?: number;
    status?: number;
    updatedAt?: string;
    createdAt?: string;
    progress?: number;
  };

  type RuleList = {
    data?: RuleListItem[];
    total?: number;
    success?: boolean;
  };

  type FakeCaptcha = {
    code?: number;
    status?: string;
  };

  type LoginParams = {
    username?: string;
    password?: string;
    type?: string;
  };

  type RegisterParams = {
    email?: string;
    password?: string;
    lastName?: string;
    fistName?: string;
  };

  type RegisterResult = {
    status?: string;
    currentAuthority?: string;
  };

  type ErrorResponse = {
    errorCode: string;
    errorMessage?: string;
    success?: boolean;
  };

  type NoticeIconList = {
    data?: NoticeIconItem[];
    total?: number;
    success?: boolean;
  };

  type NoticeIconItemType = 'notification' | 'message' | 'event';

  type NoticeIconItem = {
    id?: string;
    extra?: string;
    key?: string;
    read?: boolean;
    avatar?: string;
    title?: string;
    status?: string;
    datetime?: string;
    description?: string;
    type?: NoticeIconItemType;
  };

  type ConversationItem = {
    id: number;
    creator?: User;
    recipient?: User;
  };

  type ConversationList = {
    data?: ConversationItem[];
    total?: number;
    success?: boolean;
  };

  type MessageItem = {
    id: number;
    content?: string;
    createAt: string;
    author?: User;
  };

  type MessageList = {
    data?: MessageItem[];
    total?: number;
    success?: boolean;
  };

  type getMessageConversationByIdParams = {
    conversationId?: number;
  };
}
