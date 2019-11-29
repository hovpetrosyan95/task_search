import React, { useState } from "react";
import Input from "../../components/Input";
import Top10 from "../../components/Top10";
import requestMaker from "../../utils/requestMaker";
import "./index.scss";

export default function Search() {
  const [searchItems, setSearchItems] = useState([]);
  const [isInputValid, setInputValidation] = useState(true);

  const onInputChange = async ({ target }) => {
    const { value } = target;

    if (value.length < 2) {
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

  return (
    <div className="form-container">
      <div>
        <Input onInputChange={onInputChange} isInputValid={isInputValid} />
        <Top10 searchItems={searchItems}></Top10>
      </div>
    </div>
  );
}
