import ReactDOM from "react-dom/client";
import React from "react";

/*
Header
  - Logo
  - Navigation
Main
  - Search
  - RestaurantContainer
  - RestaurantCard
Footer
  - Copyright
  - Links
  - Contact Info
  - Social Media Icons
*/

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="header-logo" src="https://cdn-icons-png.flaticon.com/512/3075/3075977.png" alt="header-logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
}

const restaurantsData = [
  {
    id: 1,
    resName: "Asian Kitchen",
    cuisine: "Asian",
    rating: "4.5",
    deliveryTime: "30-45 mins",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400"
  },
  {
    id: 2,
    resName: "Tasty Bites",
    cuisine: "American",
    rating: "4.2",
    deliveryTime: "25-35 mins",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400"
  },
  {
    id: 3,
    resName: "Delicious Dishes",
    cuisine: "Italian",
    rating: "4.7",
    deliveryTime: "40-50 mins",
    image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400"
  },
  {
    id: 4,
    resName: "Flavorful Meals",
    cuisine: "Mexican",
    rating: "4.3",
    deliveryTime: "35-45 mins",
    image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400"
  },
  {
    id: 5,
    resName: "Yummy Yum",
    cuisine: "Chinese",
    rating: "4.6",
    deliveryTime: "20-30 mins",
    image: "https://cdn-icons-png.flaticon.com/512/3075/3075977.png"
  },
  {
    id: 6,
    resName: "Taste of India",
    cuisine: "Indian",
    rating: "4.8",
    deliveryTime: "30-40 mins",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&q=80"
  },
  {
    id: 7,
    resName: "Spice Garden",
    cuisine: "Indian",
    rating: "4.4",
    deliveryTime: "30-40 mins",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400"
  },
  {
    id: 8,
    resName: "Biryani Delight",
    cuisine: "Indian",
    rating: "4.5",
    deliveryTime: "30-40 mins",
    image: "https://cdn-icons-png.flaticon.com/512/3075/3075977.png"
  }
];

const Body = () => {
  return (
    <div className="body">
     <div className="search">Search</div>
     <div className="restaurant-container">
      {restaurantsData.map((restaurant) => (
        <RestaurantCard
          key={restaurant.id}
          restaurant={restaurant}
        />
      ))}
     </div>
    </div>
  );
}

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


const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body/>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);