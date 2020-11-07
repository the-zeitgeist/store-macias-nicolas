const initialState = [];

const functionsCreator = (newState) => ({
  show: () => null
})

const reducer = (state = initialState, action) => {
  const { type } = action;
  const processAction = functionsCreator(state);

  return processAction[type](action);
}

export default reducer
