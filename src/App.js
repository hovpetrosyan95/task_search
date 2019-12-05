import React from "react";
import Search from "./components/Search";
import SavedTournaments from "./components/SavedTournaments";
import Prompt from "./components/Prompt";
import "./styles/index.scss";

export default function App() {
  return (
    <div className="main-container">
      <h1>TASK</h1>
      <Search />
      <SavedTournaments />
      <Prompt />
    </div>
  );
}
