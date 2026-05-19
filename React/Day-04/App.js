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

const Body = () => {
  return (
    <div className="body">
     <div className="search">Search</div>
     <div className="restaurant-container">
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
     </div>
    </div>
  );
}

const RestaurantCard = () => {
  return (
    <div className="restaurant-card">
      <img className="restaurant-logo" src="https://cdn-icons-png.flaticon.com/512/3075/3075977.png" alt="restaurant-logo" />
      <h2>Asian Kitchen</h2>
      <h3>North Indian, Chinese, Vietnamese</h3>
      <h4>Rating: 4.5</h4>
      <p>Delivery: 30-45 mins</p>
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