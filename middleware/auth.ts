import { NextFunction, Response, Request } from "express";
import jwt from "jsonwebtoken";
import Guest from "../models/guest";

const SECRET = process.env.SECRET || "sekreTjesTtajnY";

interface RequestAuth extends Request {
  user: { name: string; token: string };
}

const auth = async (req: any, res: Response, next: NextFunction) => {
  try {
    const { authorization } = req.headers;

    if (!authorization) {
      throw new Error("Authorization header is missing");
    }

    const [bearer, token] = authorization.split(" ");

    if (bearer !== "Bearer") {
      throw new Error("Not Authorized");
    }

    const { name } = jwt.verify(token, SECRET) as { name: string };

    const user = await Guest.findOne({ name, token });

    if (!user || user.token !== token || !user.token) {
      throw new Error("Not Authorized");
    }
    req.user = user;
    next();
  } catch (error) {
    next(error);
  }
};

export default auth;
