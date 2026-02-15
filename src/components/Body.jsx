import React, { useEffect } from "react";
import { RestroCard } from "./RestroCard";
import MenuCard from "./MenuCard";
import Shimmer from "./Shimmer";
import { useNavigate } from "react-router";

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = React.useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = React.useState([]);
    const [restaurantName, setRestaurantName] = React.useState("");
    const [selectedRestaurant, setSelectedRestaurant] = React.useState(null);
    const redirect = useNavigate();
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
    const fetchOneRestaurant = async (id) => {
        try {
            const response = await fetch(
                "https://corsproxy.io/?url=https://namastedev.com/api/v1/listRestaurantMenu/" +
                    id,
            );
            const json = await response.json();
            setSelectedRestaurant(
                json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR
                    ?.cards[1]?.card?.card?.itemCards,
            );
            redirect("/restaurant/" + id);
        } catch (error) {
            console.error("Error fetching restaurant menu:", error);
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
                {selectedRestaurant ? (
                    <>
                        <button
                            className="back-btn"
                            onClick={() => {
                                setSelectedRestaurant(null);
                                redirect("/");
                            }}
                        >
                            ← Back to Restaurants
                        </button>
                        {selectedRestaurant.map((menu) => (
                            <MenuCard menuItem={menu} key={menu.card.info.id} />
                        ))}
                    </>
                ) : (
                    filteredRestaurants?.map((restaurant) => (
                        <RestroCard
                            restaurant={restaurant}
                            key={restaurant.info.id}
                            onCardClick={fetchOneRestaurant}
                        />
                    ))
                )}
            </div>
        </div>
    );
};
export default Body;
