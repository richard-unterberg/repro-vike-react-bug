export const APP_CONFIG = {
  // query cache settings
  queryCache: {
    short: {
      staleTime: 2 * 60 * 1000, // 2 minutes
      cacheTime: 5 * 60 * 1000, // 5 minutes
    },
  },
  viteUrl: `${
    import.meta.env.PROD ? 'http://localhost:4248' : 'http://localhost:5247'
  }`,
}
