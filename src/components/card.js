import React from "react";

const Card = ({ monster }) => {
  return (
    <div className="col-md-3 mb-5">
      <div className="card" style={{ height: "350px" }}>
        <img
          src={`https://robohash.org/${monster.id}?set=set2&size=180x180`}
          alt="monster"
        />
        <div className="card-body">
          <h2>{monster.name}</h2>
          <p>{monster.email}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
