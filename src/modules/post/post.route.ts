import express, { Request, Response, Router } from "express"
import { PostController } from "./post.controller"

const router:Router = express.Router()

router.post("/", PostController.createPost)
router.get("/aggregate-grouping", PostController.postAggregateAndGrouping)
router.get("/raw-query", PostController.getUsersUsingRawQuery)
router.get("/", PostController.getPosts)
router.patch("/:id", PostController.updatePost)
router.delete("/:id", PostController.deletePost)

export const PostRoutes = router