import express from "express";
import connectDB from "./client/db.js";
import "dotenv/config";
import UsersRouter from "./routes/usersRouter.js";

const app = express();

app.use("/api", UsersRouter);

connectDB();

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
