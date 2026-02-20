import { useParams } from "react-router";
import Shimmer from "./Shimmer";
import MenuItems from "./MenuItems";
import { useRestaurantMenu } from "../utils/useRestaurantMenu";

const MenuCard = () => {
    const { id } = useParams();
    console.log("params", id);

    const restaurantMenu = useRestaurantMenu(id);
    console.log(restaurantMenu);
    const categoriesMenu = restaurantMenu?.filter(
        (category) =>
            category?.card?.card?.["@type"] ===
            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
    );
    console.log("categgoriesMenu", categoriesMenu);

    return categoriesMenu ? (
        <div className="mt-6">
            {categoriesMenu.map((menu) => (
                <MenuItems
                    key={menu?.card?.card?.title}
                    restaurantMenu={menu}
                />
            ))}
        </div>
    ) : (
        <Shimmer />
    );
};

export default MenuCard;
