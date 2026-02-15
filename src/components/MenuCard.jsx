import { useState, useEffect } from "react";
import { useParams } from "react-router";
import Shimmer from "./Shimmer";
import MenuItems from "./MenuItems";

const MenuCard = () => {
    const [selectedRestaurant, setSelectedRestaurant] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        fetchOneRestaurant(id);
    }, []);

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
        } catch (error) {
            console.error("Error fetching restaurant menu:", error);
        }
    };
    return selectedRestaurant ? (
        <div className="restaurant-container">
            {selectedRestaurant.map((restaurantMenu) => (
                <MenuItems
                    key={restaurantMenu?.card?.info?.id}
                    restaurantMenu={restaurantMenu}
                />
            ))}
        </div>
    ) : (
        <Shimmer />
    );
};

export default MenuCard;
