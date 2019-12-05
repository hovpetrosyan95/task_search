import React from "react";
import PropTypes from "prop-types";
import Tournament from "../Tournament";
import "./index.scss";

function Top10(props) {
  const { searchItems } = props;

  return (
    <div className="top10-container">
      {searchItems.length
        ? searchItems.map((item) => (
            <Tournament data={item} key={item.id} clickable />
          ))
        : null}
    </div>
  );
}

Top10.propTypes = {
  searchItems: PropTypes.array.isRequired
};

export default Top10;
