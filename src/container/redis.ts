const redis = require('redis');
const config = require('../config');

export async function initializeRedis() {
  const redisClient = await redis.createClient(config.cacheUrl);

  redisClient.on('error', (err) => {
    console.log(err);
    redisClient.quit();
  });
}
