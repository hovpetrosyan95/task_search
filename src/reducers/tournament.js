export default (state = { tournaments: [] }, action) => {
  const { tournaments } = state;
  const { type, payload } = action;
  switch (type) {
    case "save":
      return {
        ...state,
        tournaments: [...tournaments, payload]
      };
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
