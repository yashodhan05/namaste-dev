import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const RestaurantCard = ({ restaurant }) => {
  return (
    <div className="restaurant-card">
      <img className="restaurant-logo" src={IMG_CDN_URL + restaurant.info.cloudinaryImageId} alt="restaurant-logo" />
      <div className="restaurant-card-content">
        <h2>{restaurant.info.name}</h2>
        <h3>{restaurant.info.cuisines.join(', ')}</h3>
        <h4>Rating: {restaurant.info.avgRating}</h4>
        <h4>Cost for two: {restaurant.info.costForTwo}</h4>
        <p><strong>Delivery:</strong> {restaurant.info.sla.deliveryTime} minutes</p>
      </div>
    </div>
  );
}

export default RestaurantCard;