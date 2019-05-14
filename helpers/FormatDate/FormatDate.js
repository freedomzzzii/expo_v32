export const formatYMD = date => {
  if (!date) {
    return null;
  }
  return new Date(date).toISOString().slice(0,10);
};
