import React from "react";
import ItemAccordion from "./ItemAccordion";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const RestaurantCategory = ({ categoryData, show, setShowIndex }) => {
  const { title, itemCards } = categoryData;
  const buttonText = show ? <FaChevronUp /> : <FaChevronDown />;

  return (
    <div className="res-category">
      <span className="res-category-title">{title}</span>
      <button className="res-category-button" onClick={setShowIndex}>
        {buttonText}
      </button>
      {show && <ItemAccordion items={itemCards} />}
      <hr className="acc-line-break" />
    </div>
  );
};

export default RestaurantCategory;
