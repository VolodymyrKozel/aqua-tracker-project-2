import { eachDayOfInterval, endOfMonth, startOfMonth } from 'date-fns';

export const getDateWithTime = time => {
  const [hours, minutes] = time.split(':');

  // Get the current date
  const currentDate = new Date();

  // Set the hours and minutes
  currentDate.setHours(hours);
  currentDate.setMinutes(minutes);
  currentDate.setSeconds(0); // Optionally, reset seconds and milliseconds
  currentDate.setMilliseconds(0);

  return currentDate;
};

export const getTimeFromDate = date => {
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  /*   const seconds = date.getSeconds().toString().padStart(2, '0'); */

  return `${hours}:${minutes}`;
  /*   return `${hours}:${minutes}:${seconds}`; */ // Return time in HH:MM:SS format
  // return `${hours}:${minutes}`; // Return time in HH:MM format if seconds are not needed
};

export const formatTime = time => {
  const [hour, minute] = time.split(':');
  const hourNum = parseInt(hour, 10);
  const period = hourNum < 12 ? 'AM' : 'PM';
  const formattedHour = hourNum % 12 || 12;
  return `${formattedHour}:${minute} ${period}`;
};

export function getDaysInMonth(date) {
  const start = startOfMonth(date);
  const end = endOfMonth(date);

  const days = eachDayOfInterval({ start, end });
  return days;
}
