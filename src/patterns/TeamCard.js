import React from "react";

const TeamCard = ({ designation, email }) => {
  return (
    <div>
      <div style={{ backgroundColor: "#e9f6f7", padding: "50px" }}>
        <p className=" text_dark_16">{designation}</p>
        <p className="text_primary_14_v2">{email}</p>
      </div>
    </div>
  );
};

export default TeamCard;
