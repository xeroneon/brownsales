import React from "react";
import serta from "../../img/updatedphotos/serta-logo.jpg";
import craftmade from "../../img/updatedphotos/craftmade-logo.jpg";
import ashley from "../../img/updatedphotos/ashley-logo.jpg";
import coaster from "../../img/updatedphotos/coasterfurniture-logo.jpg";
import legends from "../../img/updatedphotos/legends-logo.jpg";
import legget from "../../img/updatedphotos/leggettplatt-logo.jpg";
import uttermost from "../../img/updatedphotos/uttermost-logo.jpg";
import simmons from "../../img/updatedphotos/simmons-logo.jpg";

const brands = [
  { name: "Serta", src: serta, url: "https://www.serta.com" },
  { name: "Craftmade", src: craftmade, url: "https://www.craftmade.com" },
  { name: "Ashley", src: ashley, url: "https://www.ashleyfurniture.com" },
  { name: "Coaster", src: coaster, url: "https://www.coasterfurniture.com" },
  { name: "Legends", src: legends, url: "https://www.legendsfurniture.com" },
  { name: "Legget & Platt", src: legget, url: "https://www.leggett.com" },
  { name: "Uttermost", src: uttermost, url: "https://www.uttermost.com" },
  { name: "Simmons", src: simmons, url: "https://www.simmons.com" },
];

const Brands = () => {
  return (
    <div className="brands">
      <div className="brands--title__box">
        <h1 className="brands--title">All Of Your Favorite Brands</h1>
      </div>
      <div className="brands--wrapper">
        {brands.map((brand) => (
          <a
            className="brands--link"
            href={brand.url}
            target="_blank"
            key={brand.name}
            rel="noopener noreferrer"
          >
            <img className="brands--image" src={brand.src} alt={brand.name} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Brands;
