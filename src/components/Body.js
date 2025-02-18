import { useContext, useEffect, useState } from "react";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { FETCH_RESTAURANT } from "../utils/constants";
import useOnlineStatus from "../utils/hooks/useOnlineStatus";
import UserContext from "../utils/contextAPI/UserContext";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRestList, setFilteredRestList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
  const { loggedInUser, setUserName } = useContext(UserContext);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(FETCH_RESTAURANT);
    const json = await data.json();
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

  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  };

  //If you move this section up, then React will not call all the hooks
  //and throw an error. https://dev.to/collegewap/fix-rendered-fewer-hooks-than-expected-in-react-3757
  const onlineStatus = useOnlineStatus();
  if (!onlineStatus) {
    return <h1>Please check your internet connection!!!</h1>;
  }

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
        <div className="set-username">
          <input
            type="text"
            value={loggedInUser}
            onChange={handleUserNameChange}
          />
        </div>
      </div>
      <div className="res-container">
        {filteredRestList.map((restaurant) => (
          <Link
            className="link"
            key={restaurant?.info?.id}
            to={"/restaurant/" + restaurant?.info?.id}
          >
            {restaurant?.info?.promoted ? (
              <RestaurantCardPromoted resData={restaurant?.info} />
            ) : (
              <RestaurantCard resData={restaurant?.info} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
