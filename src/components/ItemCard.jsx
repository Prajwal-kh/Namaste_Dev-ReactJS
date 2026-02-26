import React from "react";
import { RESTRO_IMG_CDN_URL } from "../utils/config";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemCard = ({ items }) => {
    const { name, price, description, imageId } = items?.card?.info || {};
    const dispatch = useDispatch();

    const handleAddItem = (item) => {
        // Dispatch addItem action
        dispatch(addItem(item));
    };
    return (
        <div className="flex justify-between p-4 border-b-2 border-b-white shadow-md">
            <div>
                <h2 className="font-medium">{name}</h2>
                <p>Price: {price / 100}</p>
                <p className="text-sm">{description}</p>
            </div>
            <div>
                <button
                    className="absolute bg-white font-bold hover:cursor-pointer"
                    onClick={() => handleAddItem(items)}
                >
                    ADD+
                </button>
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
