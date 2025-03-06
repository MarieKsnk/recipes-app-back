import { Router } from "express";
import { getAllUsers } from "../controllers/userController.js";
import { createUser } from "../controllers/userController.js";

const usersRouter = Router();

usersRouter.get("/users", getAllUsers);
usersRouter.post("/users", createUser);

export default usersRouter;
