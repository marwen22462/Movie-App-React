import React from "react";

const Search = ({ value = "", onChange = () => {} }) => (
  <div className="searchNavmenu">
    <section className="searchbox-wrap">
      <input
        type="text"
        value={value}
        placeholder="Search movie name"
        className="searchbox"
        onChange={e => {
          onChange(e.target.value);
        }}
      />
      <button className="btn">Search</button>
    </section>
  </div>
);

export default Search;
