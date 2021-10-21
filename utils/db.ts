import { PrismaClient } from '@prisma/client'


declare global {

  var db: PrismaClient | undefined

}


 const db =
  global.db ||  new PrismaClient({
    log: ['query'],
  })

if (process.env.NODE_ENV !== 'production') global.db = db


export default db;