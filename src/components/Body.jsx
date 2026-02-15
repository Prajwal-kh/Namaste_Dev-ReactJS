import { useState, useEffect } from "react";
import { RestroCard } from "./RestroCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router";

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [restaurantName, setRestaurantName] = useState("");

    console.log("listOfRest", listOfRestaurants); // initially empty, then gets populated with API data in useEffect
    console.log("filteredRest", filteredRestaurants); // initially empty, then gets populated with API data in useEffect & then gets updated based on search/filter

    const fetchRestaurants = async () => {
        try {
            const response = await fetch(
                "https://corsproxy.io/?url=https://namastedev.com/api/v1/listRestaurants",
            );
            const json = await response.json();
            setListOfRestaurants(
                json?.data?.data?.cards[1]?.card?.card?.gridElements
                    ?.infoWithStyle?.restaurants,
            );
            setFilteredRestaurants(
                json?.data?.data?.cards[1]?.card?.card?.gridElements
                    ?.infoWithStyle?.restaurants,
            );
        } catch (error) {
            console.error("Error fetching restaurants:", error);
        }
    };

    useEffect(() => {
        // API call to fetch the list of restaurants and update the state
        fetchRestaurants();
    }, []);

    const handleOnSearch = () => {
        if (!restaurantName) {
            fetchRestaurants();
            return;
        }
        const filteredList = listOfRestaurants?.filter((restaurant) =>
            restaurant.info.name
                .toLowerCase()
                .includes(restaurantName.toLowerCase()),
        );
        setFilteredRestaurants(filteredList);
    };

    return listOfRestaurants?.length === 0 ? (
        <Shimmer />
    ) : (
        <div className="body">
            <div className="search-bar">
                <input
                    name="restaurantName"
                    type="text"
                    placeholder="Search for restaurants or cuisines"
                    className="search-input"
                    value={restaurantName}
                    onChange={(e) => {
                        setRestaurantName(e.target.value);
                    }}
                />
                <button
                    type="button"
                    className="search-button"
                    onClick={handleOnSearch}
                >
                    Search
                </button>
            </div>
            <button
                className="filter-btn"
                type="button"
                onClick={() => {
                    const filteredList = listOfRestaurants?.filter(
                        (restaurant) => restaurant.info.avgRating >= 4.5,
                    );
                    setListOfRestaurants(filteredList);
                }}
            >
                {"⭐ Top Rated"}
            </button>
            <div className="restaurant-container">
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
