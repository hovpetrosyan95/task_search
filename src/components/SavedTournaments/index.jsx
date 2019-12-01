import React from "react";
import { connect } from "react-redux";
import Tournament from "../Tournament";
import PropTypes from "prop-types";

function SavedTournaments(props) {
  const { tournaments } = props.tournament;
  const savedTournaments = tournaments.map((tournament) => {
    return <Tournament data={tournament} key={tournament.id} clickable={false} />;
  });

  return (
    <div>
      <h1>SAVED TOURNAMENTS</h1>
      {savedTournaments}
    </div>
  );
}

SavedTournaments.propTypes = {
  tournament: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  ...state
});

export default connect(mapStateToProps)(SavedTournaments);
