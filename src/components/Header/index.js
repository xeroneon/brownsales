import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";
import bgImage from "../../img/hero-6.jpg";
import logo from "../../img/brown-sales-logo.png";

const StyledHeader = styled.div`
  background: url(${bgImage}) center center no-repeat;
  background-size: cover;
  min-height: ${props => props.stockShown ? "250px" : "500px"};
  max-height: 700px;
  height: ${props => props.stockShown ? "30vh" : "60vh"};
`;

const Header = (props) => {
  return (
    <>
      <StyledHeader className="header" id="Header" stockShown={props.stockShown}>
        <div className="header--logo__container" onClick={e => props.updateStockShown(e, false)}>
          <Link to="/">
            <img src={logo} alt="Brown Sales, INC" className="header--logo" />
          </Link>
        </div>
      </StyledHeader>
      <div className="header--message">
        <h1>Clearance Items In Our Phoenix Warehouse</h1>{" "}
        <Link to="/special-buy" onClick={e => props.updateStockShown(e, true)}>
          <h2>Up to 75% off all clearance items!</h2>
        </Link>
      </div>
    </>
  );
};

export default Header;
