import { model, Schema } from "mongoose";
import Card from "./card";

const Game = model(
  "Game",
  new Schema({
    name: String,
    playTime: Number,
    ownerId: String,
    numberOfPlayers: Number,
    discardPileCards: [{ type: Schema.Types.ObjectId, ref: Card }],
    playerOneCards: [{ type: Schema.Types.ObjectId, ref: Card }],
    playerTwoCards: [{ type: Schema.Types.ObjectId, ref: Card }],
    playerThreeCards: [{ type: Schema.Types.ObjectId, ref: Card }],
    playerFourCards: [{ type: Schema.Types.ObjectId, ref: Card }],
    whoseTurn: Number,
    whoWin: Number,
  })
);

export default Game;
