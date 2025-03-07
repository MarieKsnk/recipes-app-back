import Recipe from "../models/recipes.js";

export const getAllRecipes = async (req, res) => {
  try {
    // populate pour afficher les infos de l'utilisateur - select pour cacher le mdp
    const recipes = await Recipe.find().populate("author").select("-password");
    if (recipes.length < 1) {
      return res.status(400).json("Recipes not found");
    }
    return res.status(200).json(recipes);
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: "Internal servor error" });
  }
};

export const createNewRecipe = async (req, res) => {
  try {
    const { title, ingredients, category, pays, description, steps, author } =
      req.body;
    if (
      (!title, !ingredients, !category, !pays, !description, !steps, !author)
    ) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const newRecipe = new Recipe({
      title,
      ingredients,
      category,
      pays,
      description,
      steps,
      author,
    });
    await newRecipe.save();
    return res.status(201).json(newRecipe);
  } catch (err) {
    console.log(err);
    return res.status(500).json("Internal server error");
  }
};
