import React from "react";
import { Link, useLocation } from "react-router-dom";

import styled from "styled-components";
import bgImage from "../../img/hero-6.jpg";
import logo from "../../img/brown-sales-logo.png";
import specialBuyIcon from "../../img/special-buy.svg"
const StyledHeader = styled.div`
  background: url(${bgImage}) center center no-repeat;
  background-size: cover;
  min-height: ${props => props.stockShown ? "300px" : "500px"};
  max-height: 700px;
  height: ${props => props.stockShown ? "30vh" : "60vh"};
`;

const Header = () => {
  const location = useLocation();
  const path = location.pathname.startsWith('/special-buy');
  
  return (
    <>
      <StyledHeader className="header" id="Header" stockShown={path}>
        <div className="header--logo__container">
          <Link to="/">
            <img src={logo} alt="Brown Sales, INC" className="header--logo" />
          </Link>
        </div>
      </StyledHeader>
      <div className="header--message">
        <h1>Special buys In Our Phoenix Warehouse!
          <div className="special-buy-icon">
            <img src={specialBuyIcon} alt="Special Buy"/>
          </div>
          </h1>{" "}
        {/* <Link to="/special-buy">
          <h2>Up to 75% off all clearance items!</h2>
        </Link> */}
      </div>
    </>
  );
};

export default Header;
