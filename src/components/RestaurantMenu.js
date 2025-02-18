import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/hooks/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const restMenu = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(0);

  if (restMenu === null) return <Shimmer />;

  const name = restMenu?.data?.cards[0]?.card?.card?.text;

  const menu =
    restMenu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card?.itemCards;

  const categories =
    restMenu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (item) =>
        item.card.card["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div>
      <h1>{name}</h1>
      {menu?.map((item) => (
        <h4 key={item?.card?.info?.id}>
          {item?.card?.info?.name} - Rs.{" "}
          {(item?.card?.info?.price || item?.card?.info?.defaultPrice) / 100}
        </h4>
      ))}
      {categories?.map((category, index) => (
        <RestaurantCategory
          key={category?.card?.card?.categoryId}
          categoryData={category?.card?.card}
          show={index === showIndex}
          setShowIndex={() =>
            showIndex === index ? setShowIndex(null) : setShowIndex(index)
          } //very tricky logic - read below
        />
      ))}
    </div>
  );
};
/* So for every child we are passing a callback function
such that if the showIndex state matches the index of the child,
then we need to close the Accordian hence we are setting the 
showIndex to null, otherwise set it to value of child's index
 */
export default RestaurantMenu;
