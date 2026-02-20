import React from "react";
import { RESTRO_IMG_CDN_URL } from "../utils/config";

const ItemCard = ({ items }) => {
    const { name, price, description, imageId } = items?.card?.info || {};
    return (
        <div className="flex justify-between p-4 border-b-2 border-b-white shadow-md">
            <div className="h-30">
                <h2 className="font-medium">{name}</h2>
                <p>Price: {price / 100}</p>
                <p className="text-sm">{description}</p>
            </div>
            <div>
                <label className="absolute bg-white font-bold">ADD+</label>
                <img
                    src={`${RESTRO_IMG_CDN_URL}/${imageId}`}
                    alt={name}
                    className="w-40 h-30 rounded-xs"
                />
            </div>
        </div>
    );
};

export default ItemCard;
