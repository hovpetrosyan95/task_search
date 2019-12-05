export default (state = { tournaments: [], searchItems: [] }, action) => {
  const { tournaments } = state;
  const { type, payload } = action;
  switch (type) {
    case "SAVE": {
      const objectWithUniqueKeys = new Set(
        [...tournaments, payload].map(JSON.stringify)
      );

      return {
        ...state,
        tournaments: [...objectWithUniqueKeys].map(JSON.parse)
      };
    }
    case "DELETE":
      return {
        ...state,
        tournaments: tournaments.filter((tournament) => tournament.id !== payload)
      };
    case "SAVE_ALL":
      return {
        ...state,
        tournaments: payload
      };
    case "GET_TOURNAMENTS":
      return {
        ...state,
        searchItems: payload
      };
    case "CLEAR_SEARCH_RESULT":
      return {
        ...state,
        searchItems: []
      };
    default:
      return state;
  }
};
