import { model, Schema } from "mongoose";

const Card = model(
  "Card",
  new Schema({
    symbol: String,
    letter: String,
    power: Number,
  })
);

const Game = model(
  "Table",
  new Schema({
    name: String,
    numberOfPlayers: Number,
    discardPileCards: [Card],
    playerOneCards: [Card],
    playerTwoCards: [Card],
    playerThreeCards: [Card],
    playerFourCards: [Card],
    whoseTurn: Number,
    whoWin: Number,
  })
);

export default Game;
