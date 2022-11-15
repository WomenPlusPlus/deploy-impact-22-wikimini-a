export const WikiminiRoutes = {
  HOME: {
    path: '/home',
  },
  LOGIN: {
    path: '/login',
  },
  FORGOT_PASSWORD: {
    path: '/login/forgot-password',
  },
  RESET_PASSWORD: {
    path: '/reset-password/:uuid',
  },
  DASHBOARD: {
    path: '/dashboard',
  },
  ARTICLES: {
    path: '/articles',
  },
  ARTICLE: {
    path: '/article/:id',
  },
  SEARCH: {
    path: '/search/:item',
  },
  SEARCH_LETTER: {
    path: '/search-letter/:letter',
  },
  SEARCH_CATEGORY: {
    path: '/search-category/:type/:category',
  },
  LANGUAGE: {
    path: '/',
  },
  CREATE_ACTIVITY: {
    path: '/activity/create/:name',
  },
  WRITER: {
    path: '/writer',
  },
}
