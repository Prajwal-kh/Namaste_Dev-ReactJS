import React from "react";
import { RESTRO_IMG_CDN_URL } from "../utils/config";

const MenuItems = ({ restaurantMenu }) => {
    const { name, price, description, imageId } =
        restaurantMenu?.card?.info || {};
    return (
        <div className="restaurant-card">
            <div className="restaurant-details">
                <img
                    src={`${RESTRO_IMG_CDN_URL}/${imageId}`}
                    alt={name}
                    width={150}
                    height={300}
                />
                <h2>{name}</h2>
                <p>Price: {price / 100}</p>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default MenuItems;
