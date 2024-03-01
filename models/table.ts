import { model, Schema } from "mongoose";

const Table = model(
  "Table",
  new Schema({
    name: String,
    numberOfPlayers: Number,
    discardPileCards: Number,
    playerOneCards: Number,
    playerTwoCards: Number,
    playerThreeCards: Number,
    playerFourCards: Number,
    whoseTurn: Number,
    whoWin: Number,
  })
);

export default Table;
