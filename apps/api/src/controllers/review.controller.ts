import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';

const prisma = new PrismaClient();

export const reviewEvent = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, rating, comment } = req.body;

    const eventId = parseInt(id);
    const ratingNumber = parseInt(rating);

    const event = await prisma.review.create({
      data: {
        name,
        event: { connect: { id: eventId } },
        rating: ratingNumber,
        comment,
      },
    });

    res.status(201).send({ message: 'Success review event', event });
  } catch (error) {
    res.status(500).send({ message: 'Error review event', error });
  }
};

export const getReviewByIdEvent = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const eventId = parseInt(id);

    const event = await prisma.review.findMany({
      where: { eventId },
    });

    res.status(200).send({ message: 'Success get review event', event });
  } catch (error) {
    res.status(500).send({ message: 'Error get review event', error });
  }
};
