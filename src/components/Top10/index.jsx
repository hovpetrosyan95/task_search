import React from "react";
import PropTypes from "prop-types";
import Tournament from "../Tournament";
import "./index.scss";

export default function Top10(props) {
  const { searchItems, onTournamentSelect } = props;

  return (
    <div className="top10-container">
      {searchItems.length
        ? searchItems.map((item) => (
            <Tournament
              data={item}
              key={item.id}
              onTournamentSelect={onTournamentSelect}
              clickable={true}
            />
          ))
        : null}
    </div>
  );
}

Top10.propTypes = {
  searchItems: PropTypes.array || PropTypes.object,
  onTournamentSelect: PropTypes.func.isRequired
};
