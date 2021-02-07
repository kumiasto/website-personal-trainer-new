const INITIAL_STATE = {
  value: false,
};

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "IS_OPEN":
      return { ...state, value: !state.value };
    default:
      return state;
  }
}

export default reducer;
