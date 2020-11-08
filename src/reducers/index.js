const initialState = {
  user: null,
  products: []
};

const functionsCreator = (newState) => ({
  SET_USER: ({ user }) => {
    return {
      ...newState,
      user
    };
  },
  SET_PRODUCTS: ({ products}) => {
    return {
      ...newState,
      products: [...products]
    };
  },
  CLEAR_USER: () => {
    return {
      ...newState,
      user: null
    }
  }
});

const reducer = (state = initialState, action) => {
  console.log(action)

  const { type } = action;
  const processAction = functionsCreator(state);

  const reduce = processAction[type];
  return reduce ? reduce(action) : state;
}

export default reducer
