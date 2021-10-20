import { NextApiRequest, NextApiResponse } from 'next';
import redis from '../../../../utils/redis'
export default async (req: NextApiRequest, res: NextApiResponse) =>  {
    const key = req.query.key


    const value = await redis.get(`flag:${key}`);

    res.status(200).json(value === "1")


}