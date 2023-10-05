export const DateTimeService = {
  dateTimeFormating,
};

function dateTimeFormating(date) {
  const dateformat =
    [date.getDate(), date.getMonth() + 1, date.getFullYear()].join("/") +
    " " +
    [date.getHours(), date.getMinutes(), date.getSeconds()].join(":");
  return dateformat;
}
