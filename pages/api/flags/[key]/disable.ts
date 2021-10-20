import { NextApiRequest, NextApiResponse } from 'next';
import redis from '../../../../utils/redis'
export default async (req: NextApiRequest, res: NextApiResponse) =>  {
    const key = req.query.key


    await redis.set(`flag:${key}`, "0")

    res.status(200).json({key})


}