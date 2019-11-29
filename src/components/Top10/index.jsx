import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Tournament from "../Tournament";
import "./index.scss";

export default function Top10(props) {
  const { searchItems } = props;
  useEffect(() => {
    console.log(props.searchItems);
    console.log("useEffect Top10");
  });

  return (
    <div className="top10-container">
      {searchItems.length
        ? searchItems.map((item) => <Tournament data={item} key={item.ID} />)
        : null}
    </div>
  );
}

Top10.propTypes = {
  searchItems: PropTypes.array || PropTypes.object
};
