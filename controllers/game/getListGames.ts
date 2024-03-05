import { NextFunction, Response, Request } from "express";
import Game from "../../models/game";

const getListOfGames = async (req: any, res: Response, next: NextFunction) => {
  try {
    const response = await Game.find({});
    return res.status(200).json({
      status: "success",
      data: response,
    });
  } catch (error) {
    next(error);
  }
};

export default getListOfGames;
