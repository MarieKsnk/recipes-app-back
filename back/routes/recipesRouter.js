import { Router } from "express";
import { getAllRecipes } from "../controllers/recipesController.js";
import { createNewRecipe } from "../controllers/recipesController.js";

const recipesRouter = Router();

recipesRouter.get("/recipes", getAllRecipes);
recipesRouter.post("/recipes", createNewRecipe);

export default recipesRouter;
