import { PrismaClient, Profile, User } from "@prisma/client";

const prisma = new PrismaClient();

const createUser = async (data: User): Promise<User> => {
  const user = await prisma.user.create({
    data,
  });
  return user;
};

const createOrUpdateProfile = async (data: Profile): Promise<any> => {
  const user = await prisma.profile.findUnique({
    where: { userId: data.userId },
  });

  if (user) {
    const updateProfile = await prisma.profile.update({
      where: { userId: data.userId },

      data: {
        bio: data.bio,
      },
    });
    return updateProfile;
  }

  const createProfile = await prisma.profile.create({
    data
  })
  return createProfile
};

const getUsers = async (): Promise<any> => {
    const users = await prisma.user.findMany({
    //   select:{
    //     email:true,
    //   },
    include:{
        Profile:true
    }
    })
    return users;
  };

const getSingleUser = async (id:number): Promise<any> => {
    const user = await prisma.user.findUnique({
    //   select:{
    //     email:true,
    //   },
    where:{
        id
    }
    })
    return user;
  };

export const UserService = {
  createUser,
  createOrUpdateProfile,
  getUsers,
  getSingleUser
};
