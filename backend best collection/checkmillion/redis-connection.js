import Redis from 'ioredis';

function createRedisConnection() {
  return new Redis({
    host: 'localhost',
    port: 6379,
  });
}

export const redis = createRedisConnection();

export const publisher = createRedisConnection();

export const subscriber = createRedisConnection();
