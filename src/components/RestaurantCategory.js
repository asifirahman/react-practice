import React from "react";
import ItemAccordion from "./ItemAccordion";

const RestaurantCategory = ({ categoryData, show, setShowIndex }) => {
  const { title, itemCards } = categoryData;
  const buttonText = show ? " - " : " + ";

  return (
    <div>
      <span>{title}</span>
      <button onClick={setShowIndex}>{buttonText}</button>
      {show && <ItemAccordion items={itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
