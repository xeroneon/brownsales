import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";
import bgImage from "../../img/hero-6.jpg";
import logo from "../../img/brown-sales-logo.png";

const StyledHeader = styled.div`
  background: url(${bgImage}) center center no-repeat;
  background-size: cover;
`;

const Header = (props) => {
  return (
    <>
      <StyledHeader className="header" id="Header">
        <div className="header--logo__container">
          <Link to="/">
            <img src={logo} alt="Brown Sales, INC" className="header--logo" />
          </Link>
        </div>
      </StyledHeader>
      <div className="header--message">
        <h1>Clearance Items In Our Phoenix Warehouse</h1>{" "}
        <Link to="/clearance">
          <h2>Up to 75% off all clearance items!</h2>
        </Link>
        <Link to="/stock">
          <p>Come see what we carry</p>
        </Link> 
      </div>
    </>
  );
};

export default Header;
