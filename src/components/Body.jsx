import { useState } from "react";
import { RestroCard } from "./RestroCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import { useRestaurantList } from "../utils/useRestaurantList";
import useUserStatus from "../utils/useUserStatus";

const Body = () => {
    const {
        listOfRestaurants,
        filteredRestaurants,
        restaurantName,
        setRestaurantNameFunc,
        fetchRestaurants,
        getFilteredRestaurants,
        getTopRatedRestaurants,
    } = useRestaurantList();
    const userStatus = useUserStatus();
    console.log("listOfRest", listOfRestaurants); // initially empty, then gets populated with API data in useEffect
    console.log("filteredRest", filteredRestaurants); // initially empty, then gets populated with API data in useEffect & then gets updated based on search/filter

    const handleOnSearch = () => {
        if (!restaurantName) {
            fetchRestaurants();
            return;
        }
        getFilteredRestaurants();
    };

    if (!userStatus) {
        return (
            <div className="offline-status">
                <h1>You are currently offline.</h1>
                <p>Please check your internet connection and try again.</p>
            </div>
        );
    }

    return listOfRestaurants?.length === 0 ? (
        <Shimmer />
    ) : (
        <div className="p-2">
            <div className="m-4 flex">
                <input
                    name="restaurantName"
                    type="text"
                    placeholder="Search for restaurants or cuisines"
                    className="p-2 border focus:outline-amber-600 rounded-sm cursor-text w-full"
                    value={restaurantName}
                    onChange={(e) => {
                        setRestaurantNameFunc(e.target.value);
                    }}
                />
                <button
                    type="button"
                    className="p-2 ml-2 bg-amber-600 rounded-sm cursor-pointer"
                    onClick={handleOnSearch}
                >
                    Search
                </button>
            </div>
            <button
                className="bg-green-600 p-2 m-4 cursor-pointer rounded-sm hover:animate-pulse"
                type="button"
                onClick={getTopRatedRestaurants}
            >
                {"⭐ Top Rated"}
            </button>
            <div className="flex flex-wrap">
                {filteredRestaurants?.map((restaurant) => (
                    <Link
                        to={"/restaurant/" + restaurant.info.id}
                        key={restaurant.info.id}
                    >
                        <RestroCard
                            restaurant={restaurant}
                            key={restaurant.info.id}
                        />
                    </Link>
                ))}
            </div>
        </div>
    );
};
export default Body;
