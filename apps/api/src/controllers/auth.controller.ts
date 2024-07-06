import { Request, Response } from 'express';
import prisma from '@/prisma';

export const register = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const user = await prisma.user.create({
      data: { email, password, referralCode: '' },
    });

    res.status(201).send({ message: 'Success register', user });
  } catch (error) {
    res.status(500).send({ error });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = await prisma.user.findFirst({ where: { email, password } });

    if (!user) {
      return res.status(401).send({ message: 'Invalid email or password' });
    }

    res.status(200).send({ message: 'Success login', user });
  } catch (error) {
    res.status(500).send({ error });
  }
};
