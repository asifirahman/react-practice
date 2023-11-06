import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { FETCH_MENU } from "../utils/constants";

const RestaurantMenu = () => {
  const [restMenu, setRestMenu] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(FETCH_MENU + resId);
    const json = await data.json();
    setRestMenu(json);
    console.log("Fetch menu", json);
  };

  if (restMenu === null) return <Shimmer />;

  const { name, avgRatingString, costForTwoMessage } =
    restMenu?.data?.cards[0]?.card?.card?.info;

  const menu =
    restMenu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card
      ?.card?.itemCards;

  return (
    <div>
      <h1>{name}</h1>
      <h3>{avgRatingString}</h3>
      <h3>{costForTwoMessage}</h3>
      {menu.map((item) => (
        <h4 key={item?.card?.info?.id}>
          {item?.card?.info?.name} - Rs.{" "}
          {(item?.card?.info?.price || item?.card?.info?.defaultPrice) / 100}
        </h4>
      ))}
    </div>
  );
};

export default RestaurantMenu;
