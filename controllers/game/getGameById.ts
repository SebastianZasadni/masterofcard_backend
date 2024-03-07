import { NextFunction, Response, Request } from "express";
import Game from "../../models/game";

const getGameById = async (req: any, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const response = await Game.find({ _id: id });
    return res.status(200).json({
      status: "success",
      data: response,
    });
  } catch (error) {
    next(error);
  }
};

export default getGameById;
