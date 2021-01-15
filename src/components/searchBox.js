import React from "react";

const SearchBox = ({ value, onChange }) => {
  return (
    <div className="mb-3">
      <input
        className="form-control text-center"
        placeholder="Type a monster name"
        type="search"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default SearchBox;
