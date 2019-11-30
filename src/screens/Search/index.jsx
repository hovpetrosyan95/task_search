import React, { useState } from "react";
import Input from "../../components/Input";
import Top10 from "../../components/Top10";
import SavedTournaments from "../../components/SavedTournaments";
import Prompt from "../../components/Prompt";
import requestMaker from "../../utils/requestMaker";
import "./index.scss";

export default function Search() {
  const [searchItems, setSearchItems] = useState([]);
  const [isInputValid, setInputValidation] = useState(true);
  const [open, setOpen] = React.useState(false);
  const [tournamentForDelete, setTournamentDelete] = useState(null);

  const onTournamentDelete = (title) => {
    setOpen(true);
    setTournamentDelete(title);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
    setSearchItems(searchResult[0].documents);
  };

  const onTournamentSelect = (tournament) => {
    localStorage.setItem(`id_${tournament.id}`, JSON.stringify(tournament));
    setSearchItems([]);
  };

  return (
    <div className="main-container">
      <Prompt
        open={open}
        handleClose={handleClose}
        tournamentTitle={tournamentForDelete}
      />
      <div className="form-container">
        <Input onInputChange={onInputChange} isInputValid={isInputValid} />
        <Top10
          searchItems={searchItems}
          onTournamentSelect={onTournamentSelect}
        ></Top10>
      </div>
      <div className="saved-tournaments-container">
        <SavedTournaments onTournamentDelete={onTournamentDelete} />
      </div>
    </div>
  );
}
