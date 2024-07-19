import { Request, Response } from 'express';
import prisma from '@/prisma';

export const register = async (req: Request, res: Response) => {
  try {
    const existingUser = await prisma.user.findFirst({
      where: { email: req.body.email },
    });

    if (existingUser) {
      return res.status(400).send({ message: 'Email already registered' });
    }

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
    const existingUser = await prisma.user.findFirst({
      where: { email: req.body.email },
    });

    if (!existingUser) {
      return res.status(401).send({ message: 'Invalid email or password' });
    }

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
