import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  // Only allow GET requests
  assertMethod(event, ['GET','POST']);
  const body = await readBody(event)
 
  const favorite = await prisma.favorite.create({
    data: {
      name: body.postName,
      userId: body.postUserId,
    },
  })

  if(!favorite){
    throw createError({
      statusCode :404, 
      statusMessage : 'Favorite not created'});
    
  }
  return favorite;
})
