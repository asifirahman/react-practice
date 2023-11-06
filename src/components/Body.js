import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRestList, setFilteredRestList] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.5359604&lng=88.3714217&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    console.log(
      json.data.cards[5].card.card.gridElements.infoWithStyle.restaurants
    );
    setRestaurantList(
      json.data.cards[5].card.card.gridElements.infoWithStyle.restaurants
    );
    setFilteredRestList(
      json.data.cards[5].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  const setTopRate = () => {
    console.log("HJKHDkshfjkdhkjfhdhfhjkdf");
    const filteredList = restaurantList.filter(
      (restaurant) => restaurant?.info?.avgRating > 4.2
    );
    setRestaurantList(filteredList);
  };

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleSubmit = () => {
    const filteredResult = restaurantList.filter((restaurant) =>
      restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestList(filteredResult);
  };

  return restaurantList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input type="text" value={searchText} onChange={handleChange} />
          <button onClick={handleSubmit}>Search</button>
        </div>
        <button onClick={setTopRate}>Top Rated Restaurant</button>
      </div>
      <div className="res-container">
        {filteredRestList.map((restaurant) => (
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
