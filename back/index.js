import express from "express";
import connectDB from "./client/db.js";
import "dotenv/config";
import UsersRouter from "./routes/usersRouter.js";
import recipesRouter from "./routes/recipesRouter.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", UsersRouter);
app.use("/api", recipesRouter);

connectDB();

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
