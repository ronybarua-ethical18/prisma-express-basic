import express, { Request, Response, Router } from "express"
import { UserController } from "./user.controller"

const router:Router = express.Router()

router.post("/", UserController.createUser)
router.get("/", UserController.getUsers)
router.get("/:id", UserController.getSingleUser)
router.post("/profile", UserController.createOrUpdateProfile)

export const UserRoutes = router