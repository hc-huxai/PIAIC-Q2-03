export const getDate = (dateStr: string) => {
  const date = new Date();
  date.setDate(+dateStr.split("/")[0]);
  date.setMonth(+dateStr.split("/")[1] - 1);
  date.setFullYear(+dateStr.split("/")[2]);

  return date.toLocaleString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });
};
