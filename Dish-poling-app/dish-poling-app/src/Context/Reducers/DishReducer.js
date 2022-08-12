const DishReducer = (state, { type, payload }) => {
  const data = state.slice();
  switch (type) {
    case 'ADD_DISHES':
      return payload;
    case 'RANK_1':
      for (let item of data) {
        if (item.id === payload) {
          item.rank1 = true;
          item.rank2 = false;
          item.rank3 = false;
        } else {
          item.rank1 = false;
        }
      }
      return data;
    case 'RANK_2':
      for (let item of data) {
        if (item.id === payload) {
          item.rank1 = false;
          item.rank2 = true;
          item.rank3 = false;
        } else {
          item.rank2 = false;
        }
      }
      return data;
    case 'RANK_3':
      for (let item of data) {
        if (item.id === payload) {
          item.rank1 = false;
          item.rank2 = false;
          item.rank3 = true;
        } else {
          item.rank3 = false;
        }
      }
      return data;

    default:
      return state;
  }
};

export default DishReducer;
