import React from "react";

import "../style/patterns/ecosystem.scss";

import EcosystemCard from "../cards/EcosystemCard";

import aIML from "../assets/icons/aIML.svg";
import blockchain from "../assets/icons/blockchain.svg";
import cloud from "../assets/icons/cloud.svg";
import crossTech from "../assets/icons/crossTech.svg";
import network from "../assets/icons/network.svg";
import hardware from "../assets/icons/hardware.svg";

import ark from "../assets/icons/ark.svg";
import akatsuki from "../assets/icons/akatsuki.svg";
import atix from "../assets/icons/atix.svg";
import autodesk from "../assets/icons/autodesk.svg";
import bankOfamerica from "../assets/icons/bankOfamerica.svg";
import bridge from "../assets/icons/bridge.svg";
import canonical from "../assets/icons/canonical.svg";
import commvault from "../assets/icons/commvault.svg";
import evernym from "../assets/icons/evernym.svg";
import hyper from "../assets/icons/hyper.svg";
import trust from "../assets/icons/trust.svg";
import exo from "../assets/icons/exo.svg";

const Ecosystem = () => {
  const ecosystemAbout = (
    <div className="ecosystem_about">
      <p className="mb-20 text_dark_24">
        At DeWallStreet Corporation, we work with various sustainable ecosystems
      </p>
      <p className="text_secondaryDark_14">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In morbi est enim adipiscing
        elementum libero a in arcu. Nunc massa, sollicitudim.
      </p>
    </div>
  );

  const ecosystemCards = (
    <div className="ecosystem_cards">
      <EcosystemCard
        logoImg={aIML}
        heading="AI, ML, Data and Analytics"
        data="Our project communities drive innovation in Artificial Intelligence, Machine Learning, Data & Analytics projects in partnership with organizations worldwide."
        comp1={hyper}
        comp2={trust}
      />
      <EcosystemCard
        logoImg={blockchain}
        heading="Blockchain"
        data="Our decentralized and virtual communities develop systems that utilize blockchain and related distributed ledger technologies such as governance networks."
        comp1={exo}
        comp2={akatsuki}
      />
      <EcosystemCard
        logoImg={cloud}
        heading="Cloud, Containers and Virtualization"
        data="The DeWall Street Corporation’s communities are building the fundamental building blocks of Hyperscale Public and Private Cloud using Containers, Hypervisors, and other Virtualization technologies."
        comp1={ark}
        comp2={atix}
      />
      <EcosystemCard
        logoImg={crossTech}
        heading="Cross-Technology"
        data="Many of the DeWall Street Corporation’s supported communities do not reside in a specific technology sector and are cross-discipline in nature. We deal in Cross Tech solutions."
        comp1={autodesk}
        comp2={bankOfamerica}
      />
      <EcosystemCard
        logoImg={network}
        heading="Networking and Edge"
        data="Our communities are at the forefront of critical industry open source software projects related to networking and edge computing used at large-scale telecommunications providers worldwide."
        comp1={bridge}
        comp2={canonical}
      />
      <EcosystemCard
        logoImg={hardware}
        heading="Open Hardware"
        data="The DeWall Street Corporation is a key participant and sponsor of project communities related to hardware systems that are open in design and specification."
        comp1={evernym}
        comp2={commvault}
      />
    </div>
  );

  return (
    <div className="ecosystem">
      {ecosystemAbout}
      {ecosystemCards}
    </div>
  );
};

export default Ecosystem;
