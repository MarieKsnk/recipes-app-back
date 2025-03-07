import mongoose, { Schema } from "mongoose";

const recipesSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  ingredients: [
    {
      type: String,
    },
  ],
  category: {
    type: String,
  },
  pays: {
    type: String,
  },
  description: {
    type: String,
  },
  steps: [
    {
      type: String,
    },
  ],
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

export default mongoose.model("Recipe", recipesSchema);
