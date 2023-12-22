
export const formatDate = (date: string) => {
  const utcDate = new Date(date);
  const year = utcDate.getFullYear();
  const month = String(utcDate.getMonth() + 1).padStart(2, "0");
  const day = String(utcDate.getDate()).padStart(2, "0");

  const formattedDate = `${year}/${month}/${day}`;
  return formattedDate;
};
