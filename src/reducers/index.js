const initialState = {
  user: null,
  products: []
};

const functionsCreator = (newState) => ({
  SET_USER: ({ user }) => ({
    ...newState,
    user
  }),
  SET_PRODUCTS: ({ products }) => ({
    ...newState,
    products: [...products]
  }),
  CLEAR_USER: () => ({
    ...newState,
    user: null
  })
});

const reducer = (state = initialState, action) => {
  // console.log(action);

  const { type } = action;
  const processAction = functionsCreator(state);

  const reduce = processAction[type];
  return reduce ? reduce(action) : state;
}

export default reducer
