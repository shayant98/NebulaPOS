import { NextApiRequest, NextApiResponse } from 'next';
import redis from '../../../../utils/redis'
export default async (req: NextApiRequest, res: NextApiResponse) =>  {
    const key = req.query.key


    await redis.multi().sadd("flags", key).set(`flag:${key}`, "1").exec()

    res.status(200).json({key})


}