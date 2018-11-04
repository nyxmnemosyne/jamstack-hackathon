const DEFAULT_STATE = {};

const currentGameReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case "GET_CURRENT_GAME":
      return action.currentGame;
    case "UPDATE_CURRENT_GAME":
      return { ...state, ...action.updates };
    case "CLEAR_CURRENT_GAME":
      return DEFAULT_STATE;
    default:
      return state;
  }
};

export default currentGameReducer;
