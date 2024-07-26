import prisma from '@/prisma';
import { Request, Response } from 'express';

export const createPromo = async (req: Request, res: Response) => {
  try {
    const event_id = parseInt(req.params.id);
    const { code, discount, date } = req.body;

    const codeString = code.toString();
    const discountNumber = parseInt(discount);
    const datePromo = new Date(date);

    const existingPromo = await prisma.promotion.findFirst({
      where: { code: code },
    });
    if (existingPromo) {
      return res.status(400).send({ message: 'Promo code already exist' });
    }
    const promo = await prisma.promotion.create({
      data: {
        eventId: event_id,
        code: codeString,
        discount: discountNumber,
        validUntil: datePromo,
      },
    });
    res.status(201).send('Success create promo');
  } catch (error) {
    res.status(500).send({ message: 'Error create promo', error });
  }
};

export const getPromos = async (req: Request, res: Response) => {
  try {
    const promos = await prisma.promotion.findFirst({
      where: { eventId: parseInt(req.params.id) },
    });
    res.status(200).send({ message: 'Success get promos', promos });
  } catch (error) {
    res.status(500).send({ message: 'Error get promos', error });
  }
};
