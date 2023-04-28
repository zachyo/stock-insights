
//search filter
export const searchFilter = (searchKey, data) => {
  let newData;
  if (searchKey) {
    newData = data.filter(
      (each) => each?.title.toLowerCase().indexOf(searchKey.toLowerCase()) === 0
    );
  } else newData = data;
  return newData;
};

