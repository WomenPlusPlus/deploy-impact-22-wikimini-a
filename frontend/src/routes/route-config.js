export const WikiminiRoutes = {
  HOME: {
    path: '/',
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
    path: '/article/:id'
  },
  SEARCH: {
    path: '/search/:item',
  },
  SEARCH_LETTER: {
    path: '/search-letter/:letter',
  },
  SEARCH_CATEGORY: {
    path: '/search-category/:category',
  },
  PAGE: {
    path: '/page/:title',
  },
}
