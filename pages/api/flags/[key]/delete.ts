import { NextApiRequest, NextApiResponse } from 'next';
import redis from '../../../../utils/redis'
export default async (req: NextApiRequest, res: NextApiResponse) =>  {
    const key = req.query.key


    await redis.multi().srem("flags", key).del(`flag:${key}`).exec()

    res.status(200).json({key})


}