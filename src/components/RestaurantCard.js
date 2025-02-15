import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { name, cloudinaryID, avgRating, costForTwo, cuisines } = props;

  return (
    <div className="res-card">
      <img className="res-card-img" src={CDN_URL + cloudinaryID} />
      <h3>{name}</h3>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{cuisines?.join(", ")}</h4>
    </div>
  );
};

export default RestaurantCard;
