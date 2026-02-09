import React, { useEffect } from "react";
import { RestroCard } from "./RestroCard";
import MenuCard from "./MenuCard";
import Shimmer from "./Shimmer";

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = React.useState([]);
    const [restaurantName, setRestaurantName] = React.useState("");
    const [selectedRestaurant, setSelectedRestaurant] = React.useState(null);

    const fetchRestaurants = async () => {
        try {
            const response = await fetch(
                "https://corsproxy.io/?url=https://namastedev.com/api/v1/listRestaurants",
            );
            const data = await response.json();
            setListOfRestaurants(
                data.data.data.cards[1].card.card.gridElements.infoWithStyle
                    .restaurants,
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
            const data = await response.json();
            setSelectedRestaurant(
                data.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1]
                    .card.card.itemCards,
            );
        } catch (error) {
            console.error("Error fetching restaurant menu:", error);
        }
    };

    useEffect(() => {
        // API call to fetch the list of restaurants and update the state
        fetchRestaurants();
    }, []);

    useEffect(() => {
        const filteredList = listOfRestaurants?.filter((restaurant) =>
            restaurant.info.name
                .toLowerCase()
                .includes(restaurantName.toLowerCase()),
        );
        setListOfRestaurants(filteredList);
    }, [restaurantName, setRestaurantName]);

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
                <button type="button" className="search-button">
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
                            onClick={() => setSelectedRestaurant(null)}
                        >
                            ← Back to Restaurants
                        </button>
                        {selectedRestaurant.map((menu) => (
                            <MenuCard menuItem={menu} key={menu.card.info.id} />
                        ))}
                    </>
                ) : (
                    listOfRestaurants?.map((restaurant) => (
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
