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
    savedUrl: (planId: number) => [`/url`, planId],
  },
  ai: {
    youtube: 'youtube',
    write: 'write',
    wolfram: 'wolfram',
    web: 'web',
    reddit: 'reddit',
    academic: 'academic',
    plansChat: (planId: number) => [`/ai/plans/${planId}/chats`, planId],
    chat: `/ai/chats`,
  },
});
