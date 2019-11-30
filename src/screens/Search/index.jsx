import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Input from "../../components/Input";
import Top10 from "../../components/Top10";
import SavedTournaments from "../../components/SavedTournaments";
import Prompt from "../../components/Prompt";
import requestMaker from "../../utils/requestMaker";
import { saveTournaments } from "../../actions/tournament/saveTournaments";
import PropTypes from "prop-types";
import "./index.scss";

function Search(props) {
  const [searchItems, setSearchItems] = useState([]);
  const [isInputValid, setInputValidation] = useState(true);

  useEffect(() => {
    const keys = Object.keys(localStorage).filter(
      (item) => item.split("_")[0] === "id"
    );
    const savedTournaments = keys.map((key) => JSON.parse(localStorage[key]));
    props.saveTournaments(savedTournaments);
  }, []);

  const onInputChange = async ({ target }) => {
    const { value } = target;

    if (value.length < 2) {
      setSearchItems([]);
      setInputValidation(false);
      return;
    }

    if (isInputValid === false) {
      setInputValidation(true);
    }

    const route = `/search?q=${value}&index=tournament`;
    const searchResult = await requestMaker({ route });
    setSearchItems(searchResult[0].documents || []);
  };

  return (
    <div className="main-container">
      <Prompt />
      <div className="form-container">
        <Input onInputChange={onInputChange} isInputValid={isInputValid} />
        <Top10 searchItems={searchItems}></Top10>
      </div>
      <div className="saved-tournaments-container">
        <SavedTournaments />
      </div>
    </div>
  );
}

Search.propTypes = {
  saveTournaments: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  ...state
});

const mapDispatchToProps = (dispatch) => ({
  saveTournaments: (tournaments) => dispatch(saveTournaments(tournaments))
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
