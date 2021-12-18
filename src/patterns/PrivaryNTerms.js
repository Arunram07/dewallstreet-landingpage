import React from "react";
import { NavLink, Route, useRouteMatch, Switch } from "react-router-dom";

import "../style/patterns/privacyNterms.scss";

import NavBar from "../patterns/NavBar";
import AboutCard from "../cards/AboutCard";

import { overview } from "../data/privacyData";

import terms from "../assets/icons/terms.svg";
import chainPassthrough from "../assets/icons/networkiconLite.svg";
import { Helmet } from "react-helmet";

const PrivaryNTerms = () => {
  const { path, url } = useRouteMatch();

  const renderPrivacyTerms = (
    <div>
      <p className="mb-30 silverGrad text_primary_24">DeWall Street Privacy & Terms</p>
      <div className="privacyTerms text_label_14">
        <NavLink exact to={`${url}`}>
          Overview
        </NavLink>
        <NavLink exact to={`${url}/terms_of_service`}>
          Terms of service
        </NavLink>
        {/* <NavLink>Privacy policy</NavLink>
        <NavLink>Antitrust policy</NavLink>
        <NavLink>FAQs</NavLink> */}
      </div>
    </div>
  );

  const renderOverview = (
    <>
      <Helmet>
        <title>Privacy Policy | DeWallStreet</title>
        <meta name="description" content="Empowering generations of open source innovators" />
      </Helmet>
      <div className="privacyNterms_details_overview">
        {overview.map((data, i) => (
          <AboutCard
            key={i}
            image={data.image}
            amount={data.amount}
            data={data.data}
            link={data.link}
            variant={data.variant}
          />
        ))}
      </div>
    </>
  );

  const renderService = (
    <>
      <Helmet>
        <title>Terms of Service | DeWallStreet</title>
        <meta name="description" content="Empowering generations of open source innovators" />
      </Helmet>
      <div className="privacyNterms_details_service">
        <div>
          <img src={terms} alt={terms} className="mb-30" />
          <p className="mb-30 silverGrad text_primary_16_Med">Tabel of contents</p>
          <img src={chainPassthrough} alt="chain" className="chainNetwork" />
          <div className="text_label_14">
            <p>Why we collect data</p>
            <p>Your privacy controls</p>
            <p>Sharing your information</p>
            <p>Retaining your information</p>
            <p>Exporting & deleting your information</p>
            <p>Related terms of service</p>
          </div>
        </div>
        <div className="text_secondaryLite_14">
          <p className="mb-30">
            By using Linux Foundation websites you are agreeing to be bound by the following terms
            and conditions here.
          </p>{" "}
          <p className="mb-30">Here’s the basic idea:</p>
          <ul>
            <li>
              Don’t violate anyone’s intellectual property and post anyone else’s copyrighted or
              confidential material you don’t have permission to use.{" "}
            </li>
            <li>Don’t post anything vulgar, inflammatory, pornographic, etc. </li>
            <li>Don’t post spam.</li>
            <li>
              Too many metalinks and tags are not accepted. If you try to boost your SEO, that’s an
              abuse of the system.
            </li>
            <li>
              Don’t post just to sell something. Sure, talk up your project, but don’t mention how
              to buy it every single time.
            </li>
            <li>
              Don’t launch into personal attacks. You’re not going to agree with everyone, but
              name-calling will just cause trouble and will be regarded as flaming behavior.
            </li>
            <li>
              Tone down the foul language. You can say what you need to say without relying on
              cursing. In fact, your writing will be regarded as that much more creative.
            </li>
          </ul>
          <p className="mb-30">
            The Linux Foundation and its websites provide a framework for discussion and user
            generated information to expand the knowledge base of Linux-related information. Please
            note that articles, as well as any other user content on Linuxfoundation.org (such as
            blogs, directory content, forums, comments, etc.), do not reflect the views or
            endorsements of the Linux Foundation, its staff, or its members. We recognize there may
            be inaccurate information reflected in this site and that users should understand that
            something that appears on Linuxfoundation.org does not mean the Linux Foundation has
            vetted or endorsed that content.
          </p>
          <p>
            Linux Foundation reserves the right to take down anything you post on this site, for
            these or other reasons. If you don’t agree to these terms, don’t use this website.
            Violation of the terms in this document may result in the removal of the content and a
            warning from the site’s administrators. A second violation will result in the removal of
            your user account.
          </p>
        </div>
      </div>
    </>
  );

  return (
    <div className="privacyNterms">
      <NavBar />
      {renderPrivacyTerms}
      <div className="privacyNterms_details">
        <Switch>
          <Route exact path={`${path}`}>
            {renderOverview}
          </Route>
          <Route exact path={`${path}/terms_of_service`}>
            {renderService}
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default PrivaryNTerms;
