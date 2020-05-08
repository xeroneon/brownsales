import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
    name: "mattresses",
    img: bgMattresses,
  },
];

const StyledNavItem = styled.div`
  background: url(${(props) => props.img}) center center no-repeat;
  background-size: cover;
  width: calc(33.33% - 34px);
  height: ${props => props.stockShown ? "100px" : "200px"};


`;

const Nav = (props) => {

  return (
    <nav className="nav">
      {categories.map((cat, index) => (
        <NavItem category={cat} index={index} stockShown={props.stockShown} updateStockShown={props.updateStockShown}/>
      ))}
    </nav>
  );
};

const NavItem = (props) => {
  return (
    <StyledNavItem img={props.category.img} className="nav--item" onClick={props.updateStockShown} stockShown={props.stockShown}>
      <p className="nav--item__name">{props.category.name}</p>
    </StyledNavItem>
  );
};

export default Nav;
