import { model, Schema } from "mongoose";

const Guest = model(
  "Guest",
  new Schema({
    name: {
      type: String,
      required: [true, "Set name"],
    },
    cards: Number,
    token: {
      type: String,
      required: [true, "Set token"],
    },
  })
);

export default Guest;
