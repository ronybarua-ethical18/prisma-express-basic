import { Catergory, PrismaClient, Profile, User } from "@prisma/client";

const prisma = new PrismaClient();

const createCategory = async (data: Catergory): Promise<Catergory> => {
  const catergory = await prisma.catergory.create({
    data,
  });
  return catergory;
};

export const CategoryService = {
    createCategory
}