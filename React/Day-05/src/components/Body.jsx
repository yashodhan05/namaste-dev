import React from "react";
import RestaurantCard from "./RestaurantCard";
import { restaurantsData } from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [restaurants, setRestaurants] = useState(restaurantsData);
  return (
    <div className="body">
      <div className="filter-container">
        <button
          className="filter-btn"
          onClick={() => {
            setRestaurants(restaurantsData.filter((res) => res.rating > 4.5));
          }}
        >
          Top Restaurants
        </button>
      </div>
      <div className="restaurant-container">
        {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
