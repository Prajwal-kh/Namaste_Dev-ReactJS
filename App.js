import React from "react";
import ReactDOM from "react-dom/client";

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

const RestroCard = (props) => {
    const { name, cuisines, ratings, time } = props; // Destructuring props
    return (
        <>
            <div className="restaurant-card">
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtr3m8ja5E320tKLeyGSJWUW6Hj4zOPTvmTs9Vs4S8wQ&s&ec=121528417"
                    alt="Restaurant 1"
                />
                <div className="restaurant-details">
                    <h3>{name}</h3>
                    <p>{`Cuisine: ${[...cuisines]}`}</p>
                    <p>{`Ratings: ${ratings}`}</p>
                    <p>{`Delivery time: ${time} mins`}</p>
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
                <RestroCard
                    name="Restaurant1"
                    cuisines={["Italian, Mexican"]}
                    ratings={"4.5"}
                    time={"40"}
                />
                <RestroCard
                    name="Restaurant2"
                    cuisines={["Chinese, Thai"]}
                    ratings={"4.2"}
                    time={"30"}
                />
                <RestroCard
                    name="Restaurant3"
                    cuisines={["Indian, Continental"]}
                    ratings={"4.8"}
                    time={"50"}
                />
                <RestroCard
                    name="Restaurant4"
                    cuisines={["Mediterranean, Greek"]}
                    ratings={"4.3"}
                    time={"35"}
                />
                <RestroCard
                    name="Restaurant5"
                    cuisines={["Japanese, Korean"]}
                    ratings={"4.6"}
                    time={"45"}
                />
                <RestroCard
                    name="Restaurant6"
                    cuisines={["French, Spanish"]}
                    ratings={"4.4"}
                    time={"55"}
                />
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
