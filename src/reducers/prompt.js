export default (state = { open: false, idForDeleting: "" }, action) => {
  const { type, payload } = action;

  switch (type) {
    case "OPEN":
      return {
        open: true,
        idForDeleting: payload
      };
    case "CLOSE":
      return {
        open: false,
        idForDeleting: ""
      };
    default:
      return state;
  }
};
