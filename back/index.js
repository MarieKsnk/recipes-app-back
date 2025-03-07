import express from "express";
import connectDB from "./client/db.js";
import "dotenv/config";
import UsersRouter from "./routes/usersRouter.js";
import authRouter from "./routes/authRouter.js";
import recipesRouter from "./routes/recipesRouter.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", UsersRouter);
app.use("/api", recipesRouter);
app.use("/api", authRouter);

connectDB();

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
