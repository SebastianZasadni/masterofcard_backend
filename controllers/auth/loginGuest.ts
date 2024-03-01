import { NextFunction, Response, Request } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
import Guest from "../../models/guest";

const SECRET = process.env.SECRET || "sekreTjesTtajnY";

const loginGuest = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name } = req.body;
    const isGuest = await Guest.findOne({ name });
    if (isGuest) {
      return res.status(401).json({
        message: "Guest with this name is logged.",
      });
    }
    const payload = { name };
    const token = jwt.sign(payload, SECRET, { expiresIn: "1h" });
    await Guest.create({
      name,
      token,
    });
    return res.status(200).json({
      message: "Successful logged like a guest",
      guest: {
        name,
        token,
      },
    });
  } catch (error) {
    next(error);
  }
};

export default loginGuest;
