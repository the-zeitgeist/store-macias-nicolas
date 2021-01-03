export const paginate = ({ dataGroup = [], page = 0, register = 30 }) => {
  const maxIndex = dataGroup.length;
  const initialIndex = page * register;
  const lastIndex = ++page * register;

  if (initialIndex > maxIndex) { return [] }

  return dataGroup.slice(initialIndex, maxIndex > lastIndex ? lastIndex : maxIndex);
};