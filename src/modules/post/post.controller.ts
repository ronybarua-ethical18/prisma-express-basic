import { Request, Response } from "express";
import { PostService } from "./post.service";

const createPost = async (req: Request, res: Response) => {
  try {
    const post = await PostService.createPost(req.body);
    res.status(200).send(post);
  } catch (error) {
    res.send(error);
  }
};
const updatePost = async (req: Request, res: Response) => {
  try {
    const post = await PostService.updatePost(parseInt(req.params.id),req.body);
    res.status(200).send(post);
  } catch (error) {
    res.send(error);
  }
};
const deletePost = async (req: Request, res: Response) => {
  try {
    const post = await PostService.deletePost(parseInt(req.params.id));
    res.status(200).send(post);
  } catch (error) {
    res.send(error);
  }
};

const postAggregateAndGrouping = async (req: Request, res: Response) => {
  try {
    const post = await PostService.postAggregateAndGrouping();
    res.status(200).send(post);
  } catch (error) {
    res.send(error);
  }
};

const getPosts = async (req: Request, res: Response) => {
  try {
    const options = req.query
    const post = await PostService.getAllPosts(options);
    res.status(200).send({message:"All posts are fetched successfully", data:post.posts, total:post.total});
  } catch (error) {
    res.send(error);
  }
};

const getUsersUsingRawQuery = async (req: Request, res: Response) => {
  try {

    const post = await PostService.getUsersUsingRawQuery();
    res.status(200).send({message:"All posts are fetched successfully", data:post});
  } catch (error) {
    res.send(error);
  }
};

export const PostController = {
    createPost,
    updatePost,
    deletePost,
    getPosts,
    postAggregateAndGrouping,
    getUsersUsingRawQuery
}