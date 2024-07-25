import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

export const jwtMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    console.log(req.header);
    const token = req.header('Authorization')?.replace('Bearer ', '');
    console.log('🚀 ~ token:', token);

    if (!token) {
      return res.status(401).send({ message: 'Unauthorized' });
    }

    const verifyUser = jwt.verify(
      token,
      process.env.JWT_SECRET || 'IOEHWOEtHFJWP#Ejrt38240-958934-0598',
    );

    if (!verifyUser) {
      return res.status(401).send('Unauthorized');
    }

    req.body.user = verifyUser;
    next();
  } catch (error) {
    console.log('token expired: ', error);
  }
};
