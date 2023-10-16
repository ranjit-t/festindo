export function formatDateWithMonthName(inputDate: string) {
  const date = new Date(inputDate);
  const day = date.getDate();
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const monthName = monthNames[date.getMonth()];
  const year = date.getFullYear();

  // Ensure the day is two digits
  const formattedDay = day < 10 ? `0${day}` : day;

  return `${formattedDay}-${monthName}-${year}`;
}
