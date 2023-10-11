import EventsType from "../Types/EventsType";
export let events: EventsType[] = [
  {
    id: 12345,
    title: "Music Festival 2023",
    description:
      "Join us for a weekend of live music and entertainment! Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quaerat reiciendis odit rerum pariatur officia ipsa? Incidunt fuga nisi modi, suscipit non repellendus perspiciatis, excepturi a officiis officia esse sapiente!",
    organizerName: "EventMasters",
    organizerId: "67890",
    address: "123 Main Street, Cityville, USA",
    ticketPrice: 50.0,
    photos: [
      // "https://images.unsplash.com/photo-1527075240784-552cddfbb143?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2952&q=80",
      "https://plus.unsplash.com/premium_photo-1674118771197-de18d929a7c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2832&q=80",
    ],
    country: "France",
  },
  {
    id: 54321,
    title: "Art Exhibition",
    description: "Explore a collection of contemporary art.",
    organizerName: "ArtGallery Co.",
    organizerId: "98765",
    address: "456 Art Avenue, Artville, USA",
    ticketPrice: 10.0,
    photos: [
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
    ],
    country: "France",
  },
  {
    id: 67890,
    title: "Food Truck Festival",
    description: "Taste delicious dishes from around the world!",
    organizerName: "Foodie Delights",
    organizerId: "23456",
    address: "789 Food Street, Tastyville, USA",
    ticketPrice: 20.0,
    photos: [
      "https://images.unsplash.com/photo-1585607344893-43a4bd91169a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
    ],
    country: "USA",
  },
  {
    id: 98765,
    title: "Tech Conference 2023",
    description: "Stay updated with the latest tech trends and innovations.",
    organizerName: "TechCon Inc.",
    organizerId: "34567",
    address: "101 Tech Avenue, Innovativetown, USA",
    ticketPrice: 100.0,
    photos: [
      "https://images.unsplash.com/photo-1597811119369-748db0973125?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
    ],
    country: "France",
  },
  {
    id: 23456,
    title: "Nature Hike Adventure",
    description: "Explore the beauty of the great outdoors!",
    organizerName: "Wild Explorers",
    organizerId: "54321",
    address: "789 Wilderness Trail, Natureville, USA",
    ticketPrice: 15.0,
    photos: [
      "https://images.unsplash.com/photo-1592843997881-cab3860b1067?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
    ],
    country: "USA",
  },
];
