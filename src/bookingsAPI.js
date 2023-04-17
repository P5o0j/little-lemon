
export function fetchAPI(date) {
  const result = [];
  const hours = [17, 18, 19, 20, 21, 22, 23];
  const today = new Date().setHours(0, 0, 0, 0);
  const targetDate = new Date(date).setHours(0, 0, 0, 0);

  if (targetDate < today) {
    return result; // Return an empty array if the target date is in the past
  }

  hours.forEach(hour => {
    result.push(hour + ":00");
    result.push(hour + ":30");
  });

  return result;
}
export function submitAPI(formData) {
  return true;
}