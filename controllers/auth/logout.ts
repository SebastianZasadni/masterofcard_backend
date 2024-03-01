import { NextFunction, Response } from "express";
import Guest from "../../models/guest";

interface RequestLogout extends Request {
  user: { name: string; token: string; _id: string };
}

const logout = async (req: any, res: Response, next: NextFunction) => {
  try {
    const { name, token } = req.user;
    await Guest.deleteOne({ name, token });
    return res.status(200).json({
      message: "Guest logged out",
    });
  } catch (error) {
    next(error);
  }
};

export default logout;
