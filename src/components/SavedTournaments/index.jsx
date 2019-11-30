import React, { useEffect, useState } from "react";
import Tournament from "../Tournament";
import PropTypes from "prop-types";

export default function SavedTournaments(props) {
  const { onTournamentDelete } = props;
  const [tournaments, setTournaments] = useState([]);
  useEffect(() => {
    const keys = Object.keys(localStorage).filter(
      (item) => item.split("_")[0] === "id"
    );
    const savedTournaments = keys.map((key) => localStorage[key]);
    setTournaments(savedTournaments);
  }, []);

  const savedTournaments = tournaments.map((t) => {
    const tournament = JSON.parse(t);
    return (
      <Tournament
        data={tournament}
        key={tournament.id}
        clickable={false}
        onTournamentDelete={onTournamentDelete}
      />
    );
  });

  return <div>{savedTournaments}</div>;
}

SavedTournaments.propTypes = {
  onTournamentDelete: PropTypes.func.isRequired
};
