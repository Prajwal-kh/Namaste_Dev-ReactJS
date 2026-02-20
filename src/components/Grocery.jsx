import { useState, useEffect } from "react";
import { RestroCard, withRestroCard } from "./RestroCard";
import Shimmer from "./Shimmer";
import { SWIGGY_GET_API } from "../utils/config";

const Grocery = () => {
    const [listOfGroceries, setListOfGroceries] = useState([]);
    const [filteredGroceries, setFilteredGroceries] = useState([]);
    const [groceryName, setGroceryName] = useState("");
    const RestaurantCardWithLabel = withRestroCard(RestroCard);

    const fetchGroceries = async () => {
        try {
            const response = await fetch(SWIGGY_GET_API);
            const json = await response.json();
            setListOfGroceries(
                json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
                    ?.restaurants,
            );
            setFilteredGroceries(
                json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
                    ?.restaurants,
            );
        } catch (error) {
            console.error("Error fetching restaurants:", error);
        }
    };

    useEffect(() => {
        fetchGroceries();
    }, []);

    const handleOnSearch = () => {
        if (!groceryName) {
            fetchGroceries();
            return;
        }
        const filteredList = listOfGroceries?.filter((grocery) =>
            grocery.info.name.toLowerCase().includes(groceryName.toLowerCase()),
        );
        setFilteredGroceries(filteredList);
    };

    return listOfGroceries.length === 0 ? (
        <Shimmer />
    ) : (
        <div className="body">
            <div className="search-bar">
                <input
                    name="groceryName"
                    type="text"
                    placeholder="Search for groceries"
                    className="search-input"
                    value={groceryName}
                    onChange={(e) => {
                        setGroceryName(e.target.value);
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
            <div className="flex flex-wrap">
                {filteredGroceries?.map((grocery) => {
                    return grocery?.info?.aggregatedDiscountInfoV3
                        ?.discountTag !== undefined ? (
                        <RestaurantCardWithLabel
                            restaurant={grocery}
                            key={grocery.info.id}
                        />
                    ) : (
                        <RestroCard
                            restaurant={grocery}
                            key={grocery.info.id}
                        />
                    );
                })}
            </div>
        </div>
    );
};
export default Grocery;
