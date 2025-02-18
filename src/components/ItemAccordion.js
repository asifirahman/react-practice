import React from "react";

const ItemAccordion = ({ items }) => {
  return (
    <ul>
      {items.map((item) => (
        <li>
          {item?.card?.info?.name} - Rs.{" "}
          {(item?.card?.info?.price || item?.card?.info?.defaultPrice) / 100}
        </li>
      ))}
    </ul>
  );
};

export default ItemAccordion;
