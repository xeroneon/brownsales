import React from "react";
import { useLocation, Link } from "react-router-dom";
import styled from "styled-components";

import bgTile from "../../img/updatedphotos/tile.jpg";
import bgGranite from "../../img/updatedphotos/granite.jpg";
import bgCarpet from "../../img/updatedphotos/carpet.jpg";
import bgLighting from "../../img/updatedphotos/lighting.jpg";
// need a new image link for below.  change to ceiling fan once one is made.  already changed name to bgFans
import bgFans from "../../img/updatedphotos/mattresses.jpg";
import pavers from '../../img/pavers.jpg';

const categories = [
  {
    name: "Tile",
    img: bgTile,
  },
  {
    name: "Granite & Quartz",
    img: bgGranite,
  },
  {
    name: "Carpet",
    img: bgCarpet,
  },
  {
    name: "Lighting",
    img: bgLighting,
  },
  {
    name: "Ceiling fans",
    img: bgFans,
  },
  {name: 'Pavers',
  img: pavers
    }
];

const StyledNavItem = styled.div`
  background: url(${(props) => props.img}) center center no-repeat;
  background-size: cover;
  width: 100%;
  height: ${(props) => (props.stockShown ? "5vw" : "10vw")};
  color: ${({hover}) => !hover ? '#fff' : 'rgba(255,255,255,0)'};

  &::after {
    content: '${props => !props.hover ? '' : props.category}';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: ${({hover}) => !hover ? '' : 'rgba(255,255,255,.6)'};
    z-index:4;
    color: black;
    display:flex;
    flex-direction:row;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    transform: translateY(0);
    transition: .15s all ease-out;
    text-transform: capitalize;
  }

  @media screen and (max-width: 1400px) {  
    height: ${(props) => (props.stockShown ? "7vw" : "12vw")};
  }

  @media screen and (max-width: 1000px) {  
    height: 75px;
  }
`;

const Nav = () => {

  return (
    <nav className="nav">
        {categories.map((cat, index) => (
            <NavItem
            key={index}
            category={cat}
            />
        ))}      
    </nav>
  );
};

const NavItem = (props) => {
  const location = useLocation();
  const path = location.pathname.startsWith('/special-buy');
  const category = props.category.name.toLowerCase().split(' ').join('-');

  return (
    <Link 
      to={`/special-buy/${category}`}
      className="nav--item__link"
    >
      <StyledNavItem
        img={props.category.img}
        className="nav--item" 
        stockShown={path}
        category={props.category.name}
        hover={location.pathname.split('/')[2] === category}
      >
        <p className="nav--item__name">{props.category.name}</p>
      </StyledNavItem>
    </Link>
  );
};

export default Nav;
