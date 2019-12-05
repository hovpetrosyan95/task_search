import React from "react";
import { connect } from "react-redux";
import Tournament from "../Tournament";
import PropTypes from "prop-types";
import "./index.scss";

function SavedTournaments(props) {
  const { tournaments } = props;
  const savedTournaments = tournaments.map((tournament) => {
    return <Tournament data={tournament} key={tournament.id} clickable={false} />;
  });

  return <div className="saved-tournaments-container">{savedTournaments}</div>;
}

SavedTournaments.propTypes = {
  tournaments: PropTypes.array.isRequired
};

const mapStateToProps = (state) => ({
  tournaments: state.tournament.tournaments
});

export default connect(mapStateToProps)(SavedTournaments);
