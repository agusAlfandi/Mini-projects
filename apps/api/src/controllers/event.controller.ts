import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';

const prisma = new PrismaClient();

export const createEvent = async (req: Request, res: Response) => {
  try {
    // console.log('image: ', req.file);
    // console.log('body: ', req.body);

    if (!req.body) {
      return res.status(400).send({ message: 'Content can not be empty!' });
    }

    if (!req.file?.path && !req.file?.filename) {
      return res.status(400).send({ message: 'File not found!' });
    }
    const imagePath = req.file.path;

    const {
      name,
      price,
      date,
      location,
      description,
      availableSeats,
      isFree,
      image = imagePath,
      organizerId,
    } = req.body;

    // console.log(
    //   name,
    //   price,
    //   date,
    //   location,
    //   description,
    //   availableSeats,
    //   isFree,
    //   image,
    //   organizerId,
    // );

    const priceNumber = parseFloat(price);
    const availableSeatsNumber = parseInt(availableSeats);
    const organizerIdNumber = parseInt(organizerId);
    const isFreeBoolean = isFree === 'true';

    const event = await prisma.event.create({
      data: {
        name,
        price: isFree ? 0 : priceNumber,
        date,
        location,
        description,
        availableSeats: availableSeatsNumber,
        isFree: isFreeBoolean,
        image,
        organizerId: organizerIdNumber,
      },
    });

    res.status(201).json({ message: 'Success create event' });
  } catch (error) {
    res.status(500).send({ message: 'Error create event', error });
  }
};

export const getEvents = async (req: Request, res: Response) => {
  try {
    const events = await prisma.event.findMany();
    res.status(200).send({ message: 'Success get events', events });
  } catch (error) {
    res.status(500).send({ message: 'Error get events', error });
  }
};

export const updateEvent = async (req: Request, res: Response) => {
  // console.log('price: ', req.body);
  try {
    if (!req.file?.path && !req.file?.filename) {
      return res.status(400).send({ message: 'File not found!' });
    }
    const imagePath = req.file.path;

    const { id } = req.params;
    const {
      name,
      price,
      date,
      location,
      description,
      availableSeats,
      isFree,
      image = imagePath,
      organizerId,
    } = req.body;
    console.log('🚀 ~ updateEvent ~ price:', typeof price);

    const priceNumber = parseFloat(price);
    const availableSeatsNumber = parseInt(availableSeats);
    const organizerIdNumber = parseInt(organizerId);
    const isFreeBoolean = isFree === 'true';

    console.log('🚀 ~ updateEvent ~ priceNumber:', typeof priceNumber);
    const event = await prisma.event.update({
      where: { id: Number(id) },
      data: {
        name,
        price: priceNumber,
        date,
        location,
        description,
        availableSeats: availableSeatsNumber,
        isFree: isFreeBoolean,
        image,
        organizerId: organizerIdNumber,
      },
    });

    res.status(200).send({ message: 'Success update event', event });
  } catch (error) {
    res.status(500).send({ message: 'Error update event', error });
  }
};

export const getEventById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const event = await prisma.event.findUnique({
      where: { id: Number(id) },
    });

    res.status(200).send({ message: 'Success get event', event });
  } catch (error) {
    res.status(500).send({ message: 'Error get event', error });
  }
};
