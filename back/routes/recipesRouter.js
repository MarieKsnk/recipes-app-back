import { Router } from "express";
import { getAllRecipes } from "../controllers/recipesController.js";
import { getRecipeByID } from "../controllers/recipesController.js";
import { createNewRecipe } from "../controllers/recipesController.js";
import { updateRecipe } from "../controllers/recipesController.js";

const recipesRouter = Router();

recipesRouter.get("/recipes", getAllRecipes);
recipesRouter.get("/recipes/:id", getRecipeByID);
recipesRouter.post("/recipes", createNewRecipe);
recipesRouter.put("/recipes/:id", updateRecipe);

export default recipesRouter;
