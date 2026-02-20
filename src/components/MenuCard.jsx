import { useParams } from "react-router";
import Shimmer from "./Shimmer";
import MenuItems from "./MenuItems";
import { useRestaurantMenu } from "../utils/useRestaurantMenu";

const MenuCard = () => {
    const { id } = useParams();

    const restaurantMenu = useRestaurantMenu(id);
    console.log(restaurantMenu);

    return restaurantMenu ? (
        <div className="restaurant-container">
            {restaurantMenu.map((menu) => (
                <MenuItems key={menu?.card?.info?.id} restaurantMenu={menu} />
            ))}
        </div>
    ) : (
        <Shimmer />
    );
};

export default MenuCard;
