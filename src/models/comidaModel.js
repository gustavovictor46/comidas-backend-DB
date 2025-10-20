import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();


export const encontreTodas = async () => {
    return await prisma.comidas.findMany({
        orderBy: { nome: 'asc' }
    });
}

export const encontreUma = async () => {
    return await prisma.comidas.findUnique({
        where: { id: Number(id)}
    })
}