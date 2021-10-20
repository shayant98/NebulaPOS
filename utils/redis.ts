import Redis from "ioredis";

const redis = new Redis(parseInt(process.env.REDIS_PORT ), process.env.REDIS_URL);

export default redis;
