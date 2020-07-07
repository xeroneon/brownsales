import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon as FAIcon } from "@fortawesome/react-fontawesome";
import { ClipLoader as Loading } from "react-spinners";
import ItemCard from "../components/ItemCards";

const Items = ({formOpen, contentfulAPI}) => {
  const headerRef = useRef(null);
  const itemRef = useRef(null);
  const [items, setItems] = useState();
  const [category, setCategory] = useState();
  const [showImg, setShowImg] = useState(6);
  const [skipItems, setSkipItems] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const location = useLocation();
  const pathname = location.pathname.split("/");

  useEffect(() => {
    setCategory(pathname[2] ? pathname[2].split("-").join(" ") : "all");
  }, [pathname, category]);

  useEffect(() => {
    // Get items from contentful based on the path
    if (totalItems < 0) {
      setTotalItems(0);
    }

    contentfulAPI
      .getEntries({
        content_type:
        'specialBuy',
        "fields.category": pathname[2] ? pathname[2].split("-").join(" ") : "",
        skip: skipItems,
      })
      .then(entries => {
        setTotalItems(entries.total !== 0 ? entries.total : -1);
        setShowImg(entries.total > 0 && entries.total > 3 ? 6 : 3);
        setItems((prevItems) => {
          if (entries.total === 0) return null;
          return prevItems && prevItems[0].fields.category === pathname[2]
            ? [...prevItems, ...entries.items]
            : entries.items;
        });
      });
  }, [skipItems, location.pathname]);

  return (
    <div className="showcase">
      <h2 className="showcase--title" ref={headerRef} >All Of Our Items</h2>

      <div
        className={`showcase--grid`}
        // style={{ height: `${showImg * 200}px` }}
        ref={itemRef}
      >
        {items
          ? items
              // .filter(item => item.fields.quantity > 0)
              .map((item, ind) => {
                if (ind >= showImg) return null;

                return (
                  <ItemCard
                    key={ind}
                    formOpen={formOpen}
                    price={item.fields.price}
                    name={item.fields.name}
                    description={item.fields.description}
                    imageLink={item.fields.imageLink}
                  />
                );
              })
        : totalItems === 0 && 
            <div className='loading'>
                <Loading loading={true} size={80} />
            </div>
        }

        {totalItems === -1 && (
          <p className={`special-buy-out`}>
            All {category === 'all' ? '' : category.substr(0,1).toUpperCase() + category.substr(1)} Special Buy items currently sold out!
          </p>
        )}

      </div>
        {items && items.length - showImg > 0 && (
          <span
            className={`special-buy-load showcase--grid__load`}
            onClick={() => {
              setSkipItems((prevSkip) =>
                prevSkip < totalItems &&
                items.length - 6 <= showImg &&
                totalItems > 100
                  ? prevSkip + 100
                  : prevSkip
              );
              setShowImg((prevShown) =>
                items.length - prevShown < 4 ? prevShown + 3 : prevShown + 6
              );
            }}
          >
            <span>Load More</span>
            <FAIcon icon={faAngleDown} />
          </span>
        )}
    </div>
  );
};

export default Items;
