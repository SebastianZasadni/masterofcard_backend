import { NextFunction, Response, Request } from "express";
import Joi from "joi";
import Game from "../../models/game";

const gameSchema = Joi.object({
  playTime: Joi.number().min(5).max(20).required(),
  name: Joi.string().min(3).max(30).required().alphanum(),
  numberOfPlayers: Joi.number().min(2).max(4).required(),
  id: Joi.string().required(),
});

const createGame = async (req: any, res: Response, next: NextFunction) => {
  try {
    const { playTime, numberOfPlayers, name } = req.body;
    const { id } = req.user;
    const validate = gameSchema.validate({
      playTime,
      numberOfPlayers,
      name,
      id,
    });
    if (!!validate.error) {
      return res.status(422).json({
        error: validate.error.message,
      });
    }
    const userCreatedGame = await Game.find({ ownerId: id });
    if (!!userCreatedGame.length) {
      return res.status(409).json({
        message: "User has already created the game",
        status: "failed",
      });
    }
    const isNameTaken = await Game.find({ name });
    if (!!isNameTaken.length) {
      return res.status(409).json({
        message: "Name is taken",
        status: "failed",
      });
    }
    const game = await Game.create({
      playTime,
      name,
      numberOfPlayers,
      ownerId: id,
    });
    return res.status(200).json({
      message: "Game created",
      status: "success",
      data: game,
    });
  } catch (error) {
    next(error);
  }
};

export default createGame;
