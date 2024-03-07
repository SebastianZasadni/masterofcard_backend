import { NextFunction, Response, Request } from "express";
import Joi from "joi";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
import Guest from "../../models/guest";

const SECRET = process.env.SECRET || "sekreTjesTtajnY";

const nameSchema = Joi.object({
  name: Joi.string().required().min(3).max(30).alphanum(),
});

const loginGuest = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name } = req.body;
    const validate = nameSchema.validate({ name });
    if (!!validate.error) {
      return res.status(422).json({
        error: validate.error.message,
      });
    }

    const isGuest = await Guest.findOne({ name });
    if (isGuest) {
      return res.status(409).json({
        message: "Guest with this name is logged.",
      });
    }

    const token = jwt.sign({ name }, SECRET, { expiresIn: "1h" });
    await Guest.create({
      name,
      token,
    });

    return res.status(200).json({
      message: "Successfuly logged like a guest",
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
