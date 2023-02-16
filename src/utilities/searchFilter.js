export const searchFilter = (searchKey, data) => {
  let newData = data.filter(
    (each) => each?.name.toLowerCase().indexOf(searchKey.toLowerCase()) === 0
  );
  return newData;
};

export const genreFilter = (genreFilterKey, data) => {
  let newData = data.filter((each) => each?.genre === genreFilterKey);
  return newData;
};

export const dateFilter = (releaseDate, data) => {
  let newData = data.filter((each) => each?.date === releaseDate);
  return newData;
};
