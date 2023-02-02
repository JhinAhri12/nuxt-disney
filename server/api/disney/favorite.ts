import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {

    await prisma.favorite.create({

        data: {
    
          name: 'Mickey',
          users: 1,
            
        },
      
      })
}