import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/hooks/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const restMenu = useRestaurantMenu(resId);

  if (restMenu === null) return <Shimmer />;

  const name = restMenu?.data?.cards[0]?.card?.card?.text;

  const menu =
    restMenu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card?.itemCards;

  return (
    <div>
      <h1>{name}</h1>
      {menu?.map((item) => (
        <h4 key={item?.card?.info?.id}>
          {item?.card?.info?.name} - Rs.{" "}
          {(item?.card?.info?.price || item?.card?.info?.defaultPrice) / 100}
        </h4>
      ))}
    </div>
  );
};

export default RestaurantMenu;
