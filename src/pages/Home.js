import React from "react";
// import CategoryCard from '../components/CategoryCard';
import { Link } from "react-router-dom";

// const categories = [
//     {name: 'Mattress'},
//     {name: 'Carpet'},
//     {name: 'Tile'},
//     {name: 'Granite & Quartz'},
//     {name: 'Lighting'},
//     // {name: 'Ceiling Fans', src: fans}
// ];

const Home = () => (
  <Link to="/stock">
    <p>Come see what we carry</p>
  </Link>
);

export default Home;
