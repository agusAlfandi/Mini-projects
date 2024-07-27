import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';

const prisma = new PrismaClient();

export const createEvent = async (req: Request, res: Response) => {
  try {
    if (!req.body) {
      return res.status(400).send({ message: 'Content can not be empty!' });
    }
    if (!req.file || (!req.file.path && !req.file.filename)) {
      return res.status(400).send({ message: 'File image not found!' });
    }
    const imagePath = req.file.filename;
    const {
      name,
      price,
      date,
      location,
      description,
      availableSeats,
      isFree,
      organizerId,
    } = req.body;
    const dateEvent = new Date(date);
    const priceNumber = parseFloat(price == '' ? '0' : price);
    const availableSeatsNumber = parseInt(availableSeats);
    const organizerIdNumber = parseInt(organizerId);
    const isFreeBoolean = isFree === 'true';
    const event = await prisma.event.create({
      data: {
        name,
        price: isFree === '' ? 0 : priceNumber,
        date: dateEvent,
        location,
        description,
        availableSeats: availableSeatsNumber,
        isFree: isFreeBoolean,
        image: imagePath,
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
  try {
    if (!req.file?.filename) {
      return res.status(400).send({ message: 'File image not found!' });
    }
    const imagePath = req.file.filename;

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

    const dateEvent = new Date(date);
    const priceNumber = parseFloat(price);
    const availableSeatsNumber = parseInt(availableSeats);
    const organizerIdNumber = parseInt(organizerId);
    const isFreeBoolean = isFree === 'true';

    const event = await prisma.event.update({
      where: { id: Number(id) },
      data: {
        name,
        price: isFree === 0 ? 0 : priceNumber,
        date: dateEvent,
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

export const getEventByLocation = async (req: Request, res: Response) => {
  try {
    const { location } = req.params;

    const event = await prisma.event.findMany({
      where: {
        location: {
          startsWith: location,
        },
      },
    });

    if (event.length === 0) {
      return res.status(404).send({ message: 'Data location is not found' });
    }

    res.status(200).send({ message: 'Success get event locations', event });
  } catch (error) {
    res.status(500).send({ message: 'Server error' });
  }
};

export const getEventByCategory = async (req: Request, res: Response) => {
  try {
    const { category } = req.params;

    const event = await prisma.event.findMany({
      where: {
        name: {
          startsWith: category,
        },
      },
    });

    if (event.length === 0) {
      return res.status(404).send({ message: 'Data category is not found' });
    }

    res.status(200).send({ message: 'Success get event category', event });
  } catch (error) {
    res.status(500).send({ message: 'Server error' });
  }
};
