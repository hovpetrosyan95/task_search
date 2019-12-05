export const deleteTournament = (id) => {
  localStorage.removeItem(`id_${id}`);
  return {
    type: "DELETE",
    payload: id
  };
};
