import React from "react";

const RestaurantCard = ({ restaurant }) => {
  return (
    <div className="restaurant-card">
      <img className="restaurant-logo" src={restaurant.image} alt="restaurant-logo" />
      <h2>{restaurant.resName}</h2>
      <h3>{restaurant.cuisine}</h3>
      <h4>Rating: {restaurant.rating}</h4>
      <p>Delivery: {restaurant.deliveryTime}</p>
    </div>
  );
}

export default RestaurantCard;