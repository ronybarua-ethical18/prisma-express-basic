import { Post, PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// in case of working in a team we can use a project which is using prisma, by following
// 1. npx prisma db push 
// 2. npx prisma db pull

// note: both team member should use same db url

const createPost = async (data: Post): Promise<Post> => {
  const post = await prisma.post.create({
    data,
  });
  return post;
};

const getAllPosts = async (options: any): Promise<any> => {
  const { sortBy, sortOrder, searchTerm, page, limit } = options;
  const parsedLimit = parseInt(limit);
  const parsedPage = parseInt(page);
  const skip = parsedLimit * parsedPage - parsedLimit || 0;
  const take = parsedLimit || 5;

  return await prisma.$transaction(async (trans) => {
    const total = await trans.post.count();
    const posts = await trans.post.findMany({
      //   select:{
      //     email:true,
      //   },
      skip: skip,
      take: take,
      include: {
        category: true,
      },
      orderBy:
        sortBy && sortOrder ? { [sortBy]: sortOrder } : { createdAt: "desc" },

      // AND, OR, NOT
      where: {
        OR: [
          {
            title: {
              contains: searchTerm,
              mode: "insensitive",
            },
          },
          {
            category: {
              title: {
                contains: searchTerm,
                mode: "insensitive",
              },
            },
          },
        ],
      },
    });
    return { posts, total };
  });
};

const updatePost = async (id: number, data: Partial<Post>): Promise<Post> => {
  const post = await prisma.post.update({
    where: { id },
    data,
  });
  return post;
};

const getUsersUsingRawQuery = async () => {
  // const post = await prisma.$queryRaw`select * from posts where title='I post'`

  const post = await prisma.$executeRaw`update posts set title='I three post' where id=10`
  return post;
};

const deletePost = async (id: number): Promise<Post> => {
  const post = await prisma.post.delete({
    where: { id }
  });
  return post;
};


const postAggregateAndGrouping = async ()=> {
  // const post = await prisma.post.aggregate({
  //   _avg:{
  //     authorId:true,
  //     categoryId:true
  //   },
  // _count:{
  //   authorId:true,
  //   categoryId:true
  // },
  // _sum:{
  //   authorId:true,
  //   categoryId:true
  // }
  // });

  const post = await prisma.post.groupBy({
    by:['title'],
    _count:{
      title:true
    }
  })
  return post;
};



export const PostService = {
  createPost,
  getAllPosts,
  updatePost,
  deletePost,
  postAggregateAndGrouping,
  getUsersUsingRawQuery
};
