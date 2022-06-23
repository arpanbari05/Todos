export function amount(number = 0) {
  return `₹ ${parseInt(number).toLocaleString("en-In")}`;
}

export function formatDate(date) {
  const formattedDate = new Date(date).toDateString().split(" ");

  return `${formattedDate[2]} ${formattedDate[1]}, ${formattedDate[3]}`;
}
