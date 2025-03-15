import React from "react";
import { CDN_URL } from "../utils/constants";

const ItemAccordion = ({ items }) => {
  return (
    <ul>
      {items.map((item) => (
        <li className="item-acc-li" key={item?.card?.info?.id}>
          <div style={{ fontWeight: "bold" }}>
            {item?.card?.info?.name}
            <br />
            <br />
            Rs.{" "}
            {(item?.card?.info?.price || item?.card?.info?.defaultPrice) / 100}
          </div>
          <div className="item-acc-img">
            <img
              className="item-acc-img"
              src={CDN_URL + item?.card?.info?.imageId}
            />
            <button className="item-acc-button">ADD</button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ItemAccordion;
