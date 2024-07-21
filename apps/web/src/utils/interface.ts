export interface Event {
  id?: number;
  name?: string;
  price?: number;
  location?: string;
  date: Date;
  description?: string;
  availableSeats?: number;
  isFree?: boolean;
  image?: string;
}

export interface IEvent extends Event {
  event_id: number | undefined;
}

export interface Review {
  id: number;
  name: string;
  rating: number;
  comment: string;
}