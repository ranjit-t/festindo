export function timeCheck(startTime: string, endTime: string) {
  return (
    parseInt(startTime.replace(":", "")) < parseInt(endTime.replace(":", ""))
  );
}

export function isDateAfterToday(date: Date) {
  // Get today's date
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  date.setHours(0, 0, 0, 0);
  return date > today;
}
