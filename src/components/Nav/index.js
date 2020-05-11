import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import styled from "styled-components";
import ItemCard from "../ItemCards";

import bgTile from "../../img/updatedphotos/tile.jpg";
import bgGranite from "../../img/updatedphotos/granite.jpg";
import bgCarpet from "../../img/updatedphotos/carpet.jpg";
import bgLighting from "../../img/updatedphotos/lighting.jpg";
import bgMattresses from "../../img/updatedphotos/mattresses.jpg";

const categories = [
  {
    name: "tile",
    img: bgTile,
  },
  {
    name: "granite-&-quartz",
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
    name: "mattresses",
    img: bgMattresses,
  },
];

const StyledNavItem = styled.div`
  background: url(${(props) => props.img}) center center no-repeat;
  background-size: cover;
  width: 100%;
  height: ${(props) => (props.stockShown ? "100px" : "200px")};
`;

const Nav = (props) => {
  const location = useLocation();
  console.log(location);
  return (
    <nav className="nav">
      {categories.map((cat, index) => (
        <NavItem category={cat} index={index} stockShown={props.stockShown} />
      ))}
    </nav>
  );
};

const NavItem = (props) => {
  return (
    <Link 
      to={`/special-buy/${props.category.name}`}
      style={{
        display: "inline-block",
        width: "calc(33.33% - 34px)",
        margin: "17px"
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
