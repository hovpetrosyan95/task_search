import React, { useEffect } from "react";
import { connect } from "react-redux";
import Tournament from "../Tournament";
import { saveTournaments } from "../../actions/tournament/saveTournaments";
import PropTypes from "prop-types";
import "./index.scss";

function SavedTournaments(props) {
  useEffect(() => {
    props.saveTournaments();
  }, []);

  const { tournaments } = props;
  const savedTournaments = tournaments.map((tournament) => {
    return <Tournament data={tournament} key={tournament.id} clickable={false} />;
  });

  return <div className="saved-tournaments-container">{savedTournaments}</div>;
}

SavedTournaments.propTypes = {
  tournaments: PropTypes.array.isRequired,
  saveTournaments: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  tournaments: state.tournament.tournaments
});

const mapDispatchToProps = (dispatch) => ({
  saveTournaments: () => dispatch(saveTournaments())
});

export default connect(mapStateToProps, mapDispatchToProps)(SavedTournaments);
