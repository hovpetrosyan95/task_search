export const deleteTournament = (id) => {
  return {
    type: "DELETE",
    payload: id
  };
};
