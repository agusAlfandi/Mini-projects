import { Request, Response } from 'express';
import prisma from '@/prisma';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const register = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const existingUser = await prisma.user.findFirst({
      where: { email: email },
    });

    if (existingUser) {
      return res.status(400).send({ message: 'Email already registered' });
    }

    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);

    const user = await prisma.user.create({
      data: { email, password: hashedPassword, referralCode: '' },
    });

    res.status(201).send({ message: 'Success register', user });
  } catch (error) {
    res.status(500).send({ error });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const existingUser = await prisma.user.findFirst({
      where: { email: email },
    });

    const isPasswordMatch = bcrypt.compareSync(
      password,
      existingUser?.password || '',
    );

    if (!isPasswordMatch) {
      return res.status(401).send({ message: 'Invalid email or password' });
    }

    const user = await prisma.user.findFirst({
      where: { email, password: isPasswordMatch ? existingUser?.password : '' },
    });

    const jsonwebtoken = jwt.sign(
      { id: existingUser?.id, data: email },
      process.env.JWT_SECRET || 'IOEHWOEtHFJWPEjrt38240-958934-0598',
      {
        expiresIn: '1h',
      },
    );

    res.cookie('jwt', jsonwebtoken, { httpOnly: true });

    res
      .status(200)
      .send({ message: 'Success login', user: { ...user, jsonwebtoken } });
  } catch (error) {
    res.status(500).send({ error });
  }
};
