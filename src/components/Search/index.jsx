import React, { useState, useRef } from "react";
import { connect } from "react-redux";
import Input from "../../components/Input";
import Top10 from "../../components/Top10";
import { getTournaments } from "../../actions/tournament/getTournaments";
import { clearSearchResults } from "../../actions/tournament/clearSearchResults";
import PropTypes from "prop-types";
import "./index.scss";

function Search(props) {
  const [isInputValid, setInputValidation] = useState(true);
  const { searchItems, getTournaments, clearSearchResults } = props;
  const timerRef = useRef(null);

  const onInputChange = ({ target }) => {
    const { value } = target;

    if (value.length < 2) {
      setInputValidation(false);
      clearTimeout(timerRef.current);
      clearSearchResults();
      return;
    }

    if (isInputValid === false) {
      setInputValidation(true);
    }
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => getTournaments(value), 1000);
  };

  return (
    <div className="search-container">
      <Input onInputChange={onInputChange} isInputValid={isInputValid} />
      <Top10 searchItems={searchItems}></Top10>
    </div>
  );
}

Search.propTypes = {
  getTournaments: PropTypes.func.isRequired,
  searchItems: PropTypes.array.isRequired,
  clearSearchResults: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  searchItems: state.tournament.searchItems
});

const mapDispatchToProps = (dispatch) => ({
  getTournaments: (value) => dispatch(getTournaments(value)),
  clearSearchResults: () => dispatch(clearSearchResults())
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
