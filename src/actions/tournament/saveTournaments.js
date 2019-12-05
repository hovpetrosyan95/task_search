export const saveTournaments = () => {
  const keys = Object.keys(localStorage).filter(
    (item) => item.split("_")[0] === "id"
  );
  const tournaments = keys.map((key) => JSON.parse(localStorage[key]));

  return {
    type: "SAVE_ALL",
    payload: tournaments
  };
};
