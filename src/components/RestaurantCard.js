import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const { name, cloudinaryImageId, avgRating, costForTwo, cuisines } = resData;

  return (
    <div className="res-card">
      <img className="res-card-img" src={CDN_URL + cloudinaryImageId} />
      <h3>{name}</h3>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{cuisines?.join(", ")}</h4>
    </div>
  );
};

/**
 * This function is a HOC
 * It accepts a component and returns another component
 * @returns a modified component
 */
export const withPromotedLabel = () => {
  return (props) => {
    return (
      <div>
        <label>Promoted</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
