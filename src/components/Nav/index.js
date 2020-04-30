import React from "react";
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
`;

const Nav = () => {
  return (
    <nav className="nav">
      {categories.map((cat, index) => (
        <NavItem category={cat} index={index} />
      ))}
    </nav>
  );
};

const NavItem = (props) => {
  return (
    <StyledNavItem img={props.category.img} className="nav--item">
      <p className="nav--item__name">{props.category.name}</p>
    </StyledNavItem>
  );
};

export default Nav;
