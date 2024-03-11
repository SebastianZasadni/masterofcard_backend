import { model, Schema } from "mongoose";
import Card from "./card";

const Game = model(
  "Game",
  new Schema({
    name: String,
    playTime: Number,
    ownerId: String,
    numberOfPlayers: Number,
    playerOne: {
      id: Number,
      name: String,
      cards: [{ type: Schema.Types.ObjectId, ref: Card }],
      score: Number,
    },
    playerTwo: {
      id: Number,
      name: String,
      cards: [{ type: Schema.Types.ObjectId, ref: Card }],
      score: Number,
    },
    playerThree: {
      id: Number,
      name: String,
      cards: [{ type: Schema.Types.ObjectId, ref: Card }],
      score: Number,
    },
    playerFour: {
      id: Number,
      name: String,
      cards: [{ type: Schema.Types.ObjectId, ref: Card }],
      score: Number,
    },
    discardPileCards: [{ type: Schema.Types.ObjectId, ref: Card }],
    whoseTurn: Number,
    whoWin: Number,
  })
);

export default Game;
