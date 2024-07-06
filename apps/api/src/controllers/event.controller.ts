import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';

const prisma = new PrismaClient();

export const createEvent = async (req: Request, res: Response) => {
  try {
    if (!req.body) {
      return res.status(400).send({ message: 'Content can not be empty!' });
    }

    const {
      name,
      price,
      location,
      description,
      availableSeats,
      isFree,
      organizerId,
    } = req.body;

    const event = await prisma.event.create({
      data: {
        name,
        price: isFree ? 0 : price,
        date: new Date(),
        location,
        description,
        availableSeats,
        isFree,
        organizerId, // This is the user id
      },
    });

    res.status(201).send({ message: 'Success create event', event });
  } catch (error) {
    res.status(500).send({ message: 'Error create event', error });
  }
};
