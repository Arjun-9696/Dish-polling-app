const PollReducer = (state, { type, payload }) => {
  const data = state.slice();
  switch (type) {
    case 'RANK_1':
      data[0] = '';
      data[0] = payload[1];
      return data;
    case 'RANK_2':
      data[1] = '';
      data[1] = payload[1];
      return data;
    case 'RANK_3':
      data[2] = '';
      data[2] = payload[1];
      return data;
    default:
      return state;
  }
};

export default PollReducer;
