import { model, Schema } from "mongoose";

const Card = model(
  "Card",
  new Schema({
    cardId: Number,
    symbol: String,
    letter: String,
    power: Number,
  })
);

export default Card;
