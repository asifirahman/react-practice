import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);

  useEffect(async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.5359604&lng=88.3714217&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(
      json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants
    );
    setRestaurantList(
      json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants
    );
  }, []);

  const setTopRate = () => {
    console.log("HJKHDkshfjkdhkjfhdhfhjkdf");
    const filteredList = restaurantList.filter(
      (restaurant) => restaurant?.info?.avgRating > 4.2
    );
    setRestaurantList(filteredList);
  };

  return restaurantList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <button onClick={setTopRate}>Top Rated Restaurant</button>
      </div>
      <div className="res-container">
        {restaurantList.map((restaurant) => (
          <RestaurantCard
            name={restaurant?.info?.name}
            cloudinaryID={restaurant?.info?.cloudinaryImageId}
            avgRating={restaurant?.info?.avgRating}
            costForTwo={restaurant?.info?.costForTwo}
            cuisines={restaurant?.info?.cuisines}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
