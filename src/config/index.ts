const config = {
  name: 'git-cat',
  version: process.env.VERSION || 'default',
  env: process.env.NODE_ENV || 'dev',
  cacheRefreshInterval: process.env.CACHE_REFRESH_INTERVAL || 1800000, // Milliseconds
  serviceCallerTimeout: 60000,
  dbUrl: `postgres://admin:admin@${process.env.DB_HOST}:5432/db`,
  cacheUrl: `redis://${process.env.REDIS_HOST}:${process.env.REDIS_PORT}`
};

export default config;
