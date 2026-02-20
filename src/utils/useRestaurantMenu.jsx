import { useState, useEffect } from "react";
import { MENU_API } from "./config";

export const useRestaurantMenu = (resId) => {
    const [restaurantMenu, setRestaurantMenu] = useState(null);
    useEffect(() => {
        console.log("fetchOneRestro");
        fetchRestaurantMenu(resId);
    }, []);

    const fetchRestaurantMenu = async (resId) => {
        try {
            const response = await fetch(MENU_API + resId);
            const json = await response.json();
            console.log("json", json);
            setRestaurantMenu(
                json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards,
            );
            console.log(
                json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards,
            );
        } catch (error) {
            console.error("Error fetching restaurant menu:", error);
        }
    };

    return restaurantMenu;
};
