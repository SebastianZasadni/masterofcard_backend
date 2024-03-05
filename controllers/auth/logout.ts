import { NextFunction, Response } from "express";
import Guest from "../../models/guest";
import Game from "../../models/game";

interface RequestLogout extends Request {
  user: { name: string; token: string; _id: string };
}

const logout = async (req: any, res: Response, next: NextFunction) => {
  try {
    const { name, token, id } = req.user;
    await Guest.deleteOne({ name, token });
    await Game.deleteOne({ ownerId: id });
    return res.status(200).json({
      message: "Guest logged out",
    });
  } catch (error) {
    next(error);
  }
};

export default logout;
