export const QUERY_KEYS = Object.freeze({
  user: {
    getProfile: '/user/profile',
    quit: '/user',
  },
  news: {
    main: 'main',
    interest: 'interest',
    search: 'search',
    recommand: 'recommand',
  },
  ai: {
    youtube: 'youtube',
    write: 'write',
    wolfram: 'wolfram',
    web: 'web',
    reddit: 'reddit',
    academic: 'academic',
    plansChat: (planId: number) => [`/ai/plans/${planId}/chats`, planId],
    chat: (chatId: number) => [`/ai/chats/${chatId}`, chatId],
  },
});
