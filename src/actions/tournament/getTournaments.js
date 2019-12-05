import requestMaker from "../../utils/requestMaker";

const route = (value) => `/search?q=${value}&index=tournament`;

export const getTournaments = (param) => {
  return async (dispatch) => {
    try {
      const tournaments = (await requestMaker({ route: route(param) }))[0];

      dispatch(getTournamentsAction(tournaments ? tournaments.documents : []));
    } catch (err) {
      alert("Something went wrong!");
    }
  };
};

const getTournamentsAction = (tournaments) => ({
  type: "GET_TOURNAMENTS",
  payload: tournaments
});
