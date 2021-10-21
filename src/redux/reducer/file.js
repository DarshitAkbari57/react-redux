const initialState = {
  count: 0,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case 'COUNTER': {
      console.log('in add to do action stae', state);
      console.log('in add to do action', action);
      console.log('in add to do staet daee', {
        count: action.payload.count,
      });
      return {
        count: action.payload.count,
      };
    }
    default:
      return state;
  }
}
