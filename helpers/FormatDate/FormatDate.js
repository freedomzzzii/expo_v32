export const formatYMD = date => {
  if (!date) {
    return null;
  }
  return new Date(date).toISOString().slice(0,10);
};

export const formatDMY = date => {
  if (!date) {
    return null;
  }
  const newDate = new Date(date);
  return `${newDate.getDate() < 10 ? `0${newDate.getDate()}` : newDate.getDate()}-${newDate.getMonth() + 1 < 10 ? `0${newDate.getMonth() + 1}` : newDate.getMonth() + 1}-${newDate.getFullYear()}`;
};
