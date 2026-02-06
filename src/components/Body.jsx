import React from "react";
import { restaurants } from "../utils/mockData";
import { RestroCard } from "./RestroCard";

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] =
        React.useState(restaurants);
    // const handleFilter = () => {
    //     const filteredList = listOfRestaurants.filter(
    //         (restaurant) => restaurant.info.avgRating >= 4.0,
    //     );
    //     setListOfRestaurants(filteredList);
    // };
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
            <button
                className="filter-btn"
                type="button"
                onClick={() => {
                    const filteredList = listOfRestaurants.filter(
                        (restaurant) => restaurant.info.avgRating >= 4.0,
                    );
                    setListOfRestaurants(filteredList);

                    // multiple other ways to filter the list and update the state
                    // setListOfRestaurants(
                    //     listOfRestaurants.filter(
                    //         (restaurant) => restaurant.info.avgRating >= 4.0,
                    //     ),
                    // );
                    // setListOfRestaurants((prevValue) => {
                    //     return prevValue.filter(
                    //         (restaurant) => restaurant.info.avgRating >= 4.0,
                    //     );
                    // });
                }}
            >
                {"⭐ Top Rated"}
            </button>
            <div className="restaurant-container">
                {listOfRestaurants.map((restaurant) => (
                    <RestroCard
                        restaurant={restaurant}
                        key={restaurant.info.id}
                    />
                ))}
            </div>
        </div>
    );
};
export default Body;
