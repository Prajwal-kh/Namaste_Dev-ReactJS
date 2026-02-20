import { useParams } from "react-router";
import Shimmer from "./Shimmer";
import MenuItems from "./MenuItems";
import { useRestaurantMenu } from "../utils/useRestaurantMenu";
import { useState } from "react";

const MenuCard = () => {
    const { id } = useParams();

    const restaurantMenu = useRestaurantMenu(id);
    const [menuItemIndex, setMenuItemIndex] = useState(0);

    const categoriesMenu = restaurantMenu?.filter(
        (category) =>
            category?.card?.card?.["@type"] ===
            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
    );
    console.log("categgoriesMenu", categoriesMenu);

    return categoriesMenu ? (
        <div className="mt-6">
            {categoriesMenu.map((menu, index) => (
                <MenuItems
                    key={menu?.card?.card?.title}
                    restaurantMenu={menu}
                    showMenuItem={index === menuItemIndex ? true : false}
                    setMenuItemIndex={() => setMenuItemIndex(index)}
                />
            ))}
        </div>
    ) : (
        <Shimmer />
    );
};

export default MenuCard;
