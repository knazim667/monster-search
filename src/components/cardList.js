import React from "react";
import Card from "./card";

const Cardlist = ({ monster }) => {
  return (
    <div className="row">
      {monster.map((item) => (
        <Card monster={item} />
      ))}
    </div>
  );
};

export default Cardlist;
