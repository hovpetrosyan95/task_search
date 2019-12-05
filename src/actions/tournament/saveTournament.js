export const saveTournament = (tournament) => {
  localStorage.setItem(`id_${tournament.id}`, JSON.stringify(tournament));
  return {
    type: "SAVE",
    payload: tournament
  };
};
