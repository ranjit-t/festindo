function filterEvents<T extends { country: string }>(
  country: string,
  events: T[]
): T[] {
  if (!country) {
    return events;
  }
  return events.filter((event) => event.country === country);
}

export default filterEvents;
