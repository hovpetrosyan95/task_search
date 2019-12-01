export default (state = { tournaments: [] }, action) => {
  const { tournaments } = state;
  const { type, payload } = action;
  switch (type) {
    case "save": {
      const objectWithUniqueKeys = new Set(
        [...tournaments, payload].map(JSON.stringify)
      );

      return {
        ...state,
        tournaments: [...objectWithUniqueKeys].map(JSON.parse)
      };
    }
    case "delete":
      return {
        ...state,
        tournaments: tournaments.filter((tournament) => tournament.id !== payload)
      };
    case "saveAll":
      return {
        ...state,
        tournaments: payload
      };
    default:
      return state;
  }
};
