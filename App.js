import React from "react";
import ReactDOM from "react-dom/client";
import { restaurants } from "./rawData";

// Create a Food Delivery App
// Design App using Wireframe & plan -> Header, Body, Footer components
// Header -> Logo, Nav Items, Cart
// Body -> Search Bar, Restaurant Container which will have Restaurant Cards
// Restaurant Card -> Image, Name, Cusine, Ratings, Delivery Time
// Footer -> Copyright, Links, Address, Contact

const HeaderComponet = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img
                    src="https://thumbs.dreamstime.com/b/food-delivery-logo-design-template-134749604.jpg"
                    alt="Food Delivery App logo"
                    className="logo"
                />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};

const RestroCard = ({ restaurant }) => {
    const { name, cuisines, avgRating, sla, costForTwo, cloudinaryImageId } =
        restaurant?.info;
    const { deliveryTime } = sla;
    return (
        <>
            <div className="restaurant-card">
                <img
                    src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${cloudinaryImageId}`}
                    alt={name}
                    width={150}
                    height={300}
                />
                <div className="restaurant-details">
                    <h3>{name}</h3>
                    <p>{`Cuisine: ${cuisines.join(", ")}`}</p>
                    <p>{`Ratings: ${avgRating ? avgRating : "Not available"}`}</p>
                    <p>{`Cost: ${costForTwo}`}</p>
                    <p>{`Delivery time: ${deliveryTime} mins`}</p>
                </div>
            </div>
        </>
    );
};

const BodyComponent = () => {
    return (
        <div className="body">
            <div className="search-bar">
                <input
                    name="restaurantName"
                    type="text"
                    placeholder="Search for restaurants or cuisines"
                    className="search-input"
                />
                <button type="button" className="search-button">
                    Search
                </button>
            </div>
            <div className="restaurant-container">
                {restaurants.map((restaurant) => (
                    <RestroCard
                        restaurant={restaurant}
                        key={restaurant.info.id}
                    />
                ))}
            </div>
        </div>
    );
};
const FooterComponent = () => {
    return (
        <div className="footer">
            <h1>Footer Component</h1>
        </div>
    );
};

const AppLayout = () => {
    return (
        <div className="app">
            <HeaderComponet />
            <BodyComponent />
            <FooterComponent />
        </div>
    );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
