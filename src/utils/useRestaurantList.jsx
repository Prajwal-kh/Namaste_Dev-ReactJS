import { useState, useEffect } from "react";
import { RESTAURANT_LIST_API_URL } from "./config";

export const useRestaurantList = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [restaurantName, setRestaurantName] = useState("");

    useEffect(() => {
        // API call to fetch the list of restaurants and update the state
        fetchRestaurants();
    }, []);

    const fetchRestaurants = async () => {
        try {
            const response = await fetch(RESTAURANT_LIST_API_URL);
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
    const getFilteredRestaurants = () => {
        const filteredList = listOfRestaurants?.filter((restaurant) =>
            restaurant.info.name
                .toLowerCase()
                .includes(restaurantName.toLowerCase()),
        );
        setFilteredRestaurants(filteredList);
    };
    const getTopRatedRestaurants = () => {
        const filteredList = listOfRestaurants?.filter(
            (restaurant) => restaurant.info.avgRating >= 4.5,
        );
        setFilteredRestaurants(filteredList);
    };
    const setRestaurantNameFunc = (name) => {
        setRestaurantName(name);
    };

    return {
        listOfRestaurants,
        filteredRestaurants,
        restaurantName,
        setRestaurantNameFunc,
        fetchRestaurants,
        getFilteredRestaurants,
        getTopRatedRestaurants,
    };
};
