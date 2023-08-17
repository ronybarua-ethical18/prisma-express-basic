import { Request, Response } from "express";
import { UserService } from "./user.service";

const createUser = async (req: Request, res: Response) => {
  try {
    const user = await UserService.createUser(req.body);
    res.status(200).send(user);
  } catch (error) {
    res.send(error);
  }
};

const getUsers = async (req: Request, res: Response) => {
  try {
    const user = await UserService.getUsers();
    res.status(200).send(user);
  } catch (error) {
    res.send(error);
  }
};


const getSingleUser = async (req: Request, res: Response) => {
  try {
    const user = await UserService.getSingleUser(Number(req.params.id));
    res.status(200).send(user);
  } catch (error) {
    res.send(error);
  }
};

const createOrUpdateProfile = async (req: Request, res: Response) => {
  try {
    const profile = await UserService.createOrUpdateProfile(req.body);
    res.status(200).send(profile);
  } catch (error) {
    res.send(error);
  }
};

export const UserController = {
    createUser,
    createOrUpdateProfile,
    getUsers,
    getSingleUser
}
