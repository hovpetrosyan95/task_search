export default (state = { open: false, idForDeleting: "" }, action) => {
  const { type, payload } = action;

  switch (type) {
    case "open":
      return {
        open: true,
        idForDeleting: payload
      };
    case "close":
      return {
        open: false,
        idForDeleting: ""
      };
    default:
      return state;
  }
};
