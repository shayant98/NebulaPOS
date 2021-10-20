import { NextApiRequest, NextApiResponse } from 'next';
import redis from '../../../utils/redis';

export default async (req:NextApiRequest, res:NextApiResponse) => {
    const keys = await redis.smembers("flags");
    if (keys.length === 0) res.status(200).json( {})
    const values = await redis.mget(keys.map((key) => `flag:${key}`));


    const mapped = keys.reduce((acc, key, index) => {
        acc.set(key, values[index] === "1");
        return acc;
    }, new Map<string, boolean>());

    res.status(200).json( Object.fromEntries(mapped))


}