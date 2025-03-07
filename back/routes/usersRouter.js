import { Router } from "express";
import { getAllUsers } from "../controllers/userController.js";
import { createUser } from "../controllers/userController.js";
import { updateUser } from "../controllers/userController.js";
import { getUserByID } from "../controllers/userController.js";

const usersRouter = Router();

usersRouter.get("/users", getAllUsers);
usersRouter.get("/users/:id", getUserByID);
usersRouter.post("/users", createUser);
usersRouter.put("/users/:id", updateUser);

export default usersRouter;
