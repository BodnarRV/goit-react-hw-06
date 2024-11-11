import React from "react";
import "./SearchBox.css";

export default function SearchBox({ value, handleSearch }) {
  return (
    <>
      <label className="search-label">
        Find contact by name
        <input
          className="search-input"
          type="text"
          value={value}
          onChange={handleSearch}
        ></input>
      </label>
    </>
  );
}
