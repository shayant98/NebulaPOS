import Redis from "ioredis";

const redis = new Redis(process.env.REDIS_PORT as Number, process.env.REDIS_URL);

export default redis;
