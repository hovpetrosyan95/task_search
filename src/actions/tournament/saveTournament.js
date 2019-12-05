export const saveTournament = (tournament) => {
  return {
    type: "SAVE",
    payload: tournament
  };
};
