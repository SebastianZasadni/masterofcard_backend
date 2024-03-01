import { NextFunction, Response, Request } from "express";

const current = async (
  req: Request | any,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name, token } = req.user;
    return res.status(200).json({
      name,
      token,
    });
  } catch (error) {
    next(error);
  }
};

export default current;
