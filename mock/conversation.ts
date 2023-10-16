import { Request, Response } from 'express';

const getConversation = (req: Request, res: Response) => {
  res.json({
    data: [
      {
        id: 1,
        name: 'Mission',
        lastMessage: 'Are you okay?',
      },
      {
        id: 2,
        name: 'Third-party',
        lastMessage: 'See you here',
      },
      {
        id: 3,
        name: 'Information',
        lastMessage: 'good bye',
      },
      {
        id: 4,
        name: 'Version release',
        lastMessage: 'This template is used to remind who has interacted with you',
      },
      {
        id: 5,
        name: 'Mission',
        lastMessage: 'Are you okay?',
      },
      {
        id: 6,
        name: 'Third-party',
        lastMessage: 'See you here',
      },
      {
        id: 7,
        name: 'Information',
        lastMessage: 'good bye',
      },
      {
        id: 8,
        name: 'Version release',
        lastMessage: 'This template is used to remind who has interacted with you',
      },
      {
        id: 9,
        name: 'Mission',
        lastMessage: 'Are you okay?',
      },
      {
        id: 10,
        name: 'Third-party',
        lastMessage: 'See you here',
      },
      {
        id: 11,
        name: 'Information',
        lastMessage: 'good bye',
      },
      {
        id: 12,
        name: 'Version release',
        lastMessage: 'This template is used to remind who has interacted with you',
      },
      {
        id: 13,
        name: 'Information',
        lastMessage: 'good bye',
      },
      {
        id: 14,
        name: 'Version release',
        lastMessage: 'This template is used to remind who has interacted with you',
      },
    ],
  });
};

export default {
  'GET /api/conversation': getConversation,
};
