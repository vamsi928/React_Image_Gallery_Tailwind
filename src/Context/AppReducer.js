export const AppReducer = (state, action) => {
  switch (action.type) {
    case "DATA_FETCHED":
      return { ...state, images: action.payload, isLoading: false };
    default:
      return state;
  }
};
