import { NextFunction, Response, Request } from "express";
import Game from "../../models/game";

const deleteGameById = async (req: any, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const response = await Game.deleteOne({ _id: id });
    if (!response.deletedCount) {
      return res.status(404).json({
        status: "failed",
        message: "Game doesn't exist",
      });
    }
    return res.status(200).json({
      status: "success",
      message: "Game has been deleted succesfully",
    });
  } catch (error) {
    next(error);
  }
};

export default deleteGameById;
