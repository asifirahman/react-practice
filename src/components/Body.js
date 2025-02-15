import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { FETCH_RESTAURANT } from "../utils/constants";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRestList, setFilteredRestList] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(FETCH_RESTAURANT);
    const json = await data.json();
    console.log(json)
    setRestaurantList(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
    setFilteredRestList(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  const setTopRate = () => {
    const filteredList = restaurantList.filter(
      (restaurant) => restaurant?.info?.avgRating > 4.2
    );
    setFilteredRestList(filteredList);
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
          <Link
            className="link"
            key={restaurant?.info?.id}
            to={"/restaurant/" + restaurant?.info?.id}
          >
            <RestaurantCard
              name={restaurant?.info?.name}
              cloudinaryID={restaurant?.info?.cloudinaryImageId}
              avgRating={restaurant?.info?.avgRating}
              costForTwo={restaurant?.info?.costForTwo}
              cuisines={restaurant?.info?.cuisines}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
