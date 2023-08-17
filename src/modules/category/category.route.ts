import express, { Request, Response, Router } from "express"
import { CategoryController } from "./category.controller"

const router:Router = express.Router()

router.post("/", CategoryController.createCategory)

export const CategoryRoutes = router