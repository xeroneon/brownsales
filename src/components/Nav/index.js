import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import styled from "styled-components";
import ItemCard from "../ItemCards";

import bgTile from "../../img/updatedphotos/tile.jpg";
import bgGranite from "../../img/updatedphotos/granite.jpg";
import bgCarpet from "../../img/updatedphotos/carpet.jpg";
import bgLighting from "../../img/updatedphotos/lighting.jpg";
// need a new image link for below.  change to ceiling fan once one is made.  already changed name to bgFans
import bgFans from "../../img/updatedphotos/mattresses.jpg";

const categories = [
  {
    name: "tile",
    img: bgTile,
  },
  {
    name: "granite & quartz",
    img: bgGranite,
  },
  {
    name: "carpet",
    img: bgCarpet,
  },
  {
    name: "lighting",
    img: bgLighting,
  },
  {
    name: "celiing-fans",
    img: bgFans,
  },
];

const StyledNavItem = styled.div`
  background: url(${(props) => props.img}) center center no-repeat;
  background-size: cover;
  width: 100%;
  height: ${(props) => (props.stockShown ? "5vw" : "10vw")};

  @media screen and (max-width: 1400px) {  
    height: ${(props) => (props.stockShown ? "7vw" : "12vw")};
  }

  @media screen and (max-width: 1000px) {  
    height: 75px;
  }
`;

const Nav = (props) => {
  const location = useLocation();
  console.log(location);
  return (
    <nav className="nav">
      {categories.map((cat, index) => (
        <NavItem
        key={index}
        category={cat}
        stockShown={props.stockShown}
        updateStockShown={e => props.updateStockShown(e,true)}
        />
      ))}
    </nav>
  );
};

const NavItem = (props) => {
  return (
    <Link
      to={`/special-buy/${props.category.name}`}
      onClick={props.updateStockShown}
      className="nav--item__link"
      style={{

      }}>
      <StyledNavItem
        img={props.category.img}
        className="nav--item"
        stockShown={props.stockShown}
      >
        <p className="nav--item__name">{props.category.name}</p>
      </StyledNavItem>
    </Link>
  );
};

export default Nav;
