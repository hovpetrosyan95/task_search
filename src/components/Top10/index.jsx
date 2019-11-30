import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Tournament from "../Tournament";
import { saveTournament } from "../../actions/tournament/saveTournament";
import "./index.scss";

function Top10(props) {
  const { searchItems } = props;
  const onTournamentSelect = (tournament) => {
    localStorage.setItem(`id_${tournament.id}`, JSON.stringify(tournament));
    props.saveTournament(tournament);
  };

  return (
    <div className="top10-container">
      {searchItems.length
        ? searchItems.map((item) => (
            <Tournament
              data={item}
              key={item.id}
              onTournamentSelect={onTournamentSelect}
              clickable
            />
          ))
        : null}
    </div>
  );
}

Top10.propTypes = {
  searchItems: PropTypes.array.isRequired,
  saveTournament: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  ...state
});

const mapDispatchToProps = (dispatch) => ({
  saveTournament: (tournament) => dispatch(saveTournament(tournament))
});

export default connect(mapStateToProps, mapDispatchToProps)(Top10);
