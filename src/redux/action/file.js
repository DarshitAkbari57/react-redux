export const increaseCount = (count) => {
  console.log('in action : ', count);
  return {
    type: 'COUNTER',
    payload: {
      count,
    },
  };
};
