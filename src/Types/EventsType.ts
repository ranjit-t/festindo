type EventsType = {
  id: number | string;
  title: string;
  description: string;
  organizerName: string;
  organizerId: number | string;
  address: string;
  ticketPrice: number;
  photos?: string[];
  country: string;
  city: string;
  category?: string;
};

export default EventsType;
