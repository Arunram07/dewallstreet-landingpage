import React from "react";
// import Button from "../components/Button";

// import member1 from "../assets/images/member1.png";
// import { ReactComponent as Twitter } from "../assets/icons/twitter.svg";
// import { ReactComponent as Linkedin } from "../assets/icons/linkedin.svg";
// import { ReactComponent as Discord } from "../assets/icons/discord.svg";
import TeamCard from "./TeamCard";
import "../style/patterns/team.scss";

// const Member = ({ image, name, designation }) => {
//   const renderInfo = (
//     <div className="team-card_hover-block">
//       <h5 className="mb-10">{name}</h5>
//       <p className=" subtitle mb-20">Chairman</p>
//       <p className="mb-20">
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio nibh malesuada egestas a proin
//         consectetur pulvinar. Enim volutpat ridiculus dui.
//       </p>
//       <div>
//         <a href="/">
//           <Linkedin />
//         </a>
//         <a href="/">
//           <Discord />
//         </a>
//         <a href="/">
//           <Twitter />
//         </a>
//       </div>
//     </div>
//   );
//   return (
//     <div className="team-card">
//       <img src={image} alt="member" />
//       <p className="text_primary_12_W500">{name}</p>
//       {renderInfo}
//     </div>
//   );
// };

const Team = () => {
  // const renderTitles = (
  //   <>
  //     <Button variant="primary" children="All" type="submit" />
  //     <Button variant="secondaryBlack" children="Leadership" type="submit" />
  //     <Button variant="secondaryBlack" children="Technology" type="submit" />
  //     <Button variant="secondaryBlack" children="Design" type="submit" />
  //     <Button variant="secondaryBlack" children="Operations" type="submit" />
  //   </>
  // );

  const renderAbout = (
    <div className="team_about">
      <p className="mb-20 text_dark_24">
        It takes <span className="primeGrad">teamwork</span> to make the dream work
      </p>
      <p className="mb-30 text_secondaryDark_14">
        The DeWall Street Corp. leadership team includes experts in technology management, business,
        legal, marketing, and ecosystem development – all focused on open technology. We are
        passionate about software development and about unlocking the power of open technology to
        drive shared innovation for the collective benefit.
      </p>
      {/* <div className="team_about_titles">{renderTitles}</div> */}
    </div>
  );

  const renderTeamNav = (
    <div className="team_nav">
      <div>
        <div id="orange"></div>
        <div id="yellow"></div>
        <div id="green"></div>
      </div>
      <p className="text_dark_12" style={{ whiteSpace: "nowrap" }}>
        DeWall Street Corporation
      </p>
    </div>
  );

  const renderMembers = (
    <div className="team_members" style={{ gridTemplateColumns: "repeat(3,1fr)" }}>
      <TeamCard designation="Founder" email="zeroakasam@gmail.com" />
      <TeamCard designation="Founder" email="zeroakasam@gmail.com" />
      <TeamCard designation="Founder" email="zeroakasam@gmail.com" />
      <TeamCard designation="Founder" email="zeroakasam@gmail.com" />
      <TeamCard designation="Founder" email="zeroakasam@gmail.com" />
      <TeamCard designation="Founder" email="zeroakasam@gmail.com" />
      <TeamCard designation="Founder" email="zeroakasam@gmail.com" />
      <TeamCard designation="Founder" email="zeroakasam@gmail.com" />

      {/* <Member name="Courtney Henry" />
      <Member image={member1} name="Marvin McKinney" />
      <Member image={member1} name="Robert Fox" />
      <Member image={member1} name="Darlene Robertson" />
      <Member image={member1} name="Floyd Miles" />
      <Member image={member1} name="Esther Howard" />
      <Member image={member1} name="Albert Flores" />
      <Member image={member1} name="Guy Hawkins" />
      <Member image={member1} name="Leslie Alexander" />
      <Member image={member1} name="Arlene McCoy" />
      <Member image={member1} name="Savannah Nguyen" /> */}
    </div>
  );

  return (
    <div className="team">
      {renderAbout}
      <div>
        {renderTeamNav}
        {renderMembers}
      </div>
    </div>
  );
};

export default Team;
