import { useEffect, useState } from "react";
import { FETCH_MENU } from "../constants";

const useRestaurantMenu = (restaurantID) => {
  const [restaurantInfo, setRestaurantInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(FETCH_MENU + restaurantID);
    const jsonResponse = await data.json();
    setRestaurantInfo(jsonResponse);
  };

  return restaurantInfo;
};

export default useRestaurantMenu;
