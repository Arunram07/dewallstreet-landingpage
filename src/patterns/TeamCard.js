import React from "react";

const TeamCard = ({ designation, email }) => {
  return (
    <div className="team_wrapper" style={{ backgroundColor: "#e9f6f7", padding: "1.5em" }}>
      <p className=" text_dark_16">{designation}</p>
      <div>
        {email.map((data, i) => (
          <p key={i} className="text_primary_14_v2">
            <a href={`mailto:${data}`}>{data}</a>
          </p>
        ))}
      </div>
    </div>
  );
};

export default TeamCard;
