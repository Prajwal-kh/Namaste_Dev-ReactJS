import React from "react";
import { RESTRO_IMG_CDN_URL } from "../utils/config";

const CartItem = ({ items }) => {
    const { name, price, imageId } = items?.card?.info || {};

    return (
        <>
            {/* Restaurant Info */}
            <div className="flex gap-3 items-center">
                <img
                    src={`${RESTRO_IMG_CDN_URL}/${imageId}`}
                    alt={name}
                    className="w-14 h-14 rounded-md object-cover"
                />
                <div>
                    <h2 className="font-semibold text-lg">Pizza Hut</h2>
                    <p className="text-sm text-gray-500">RT Nagar</p>
                    <div className="w-10 h-[2px] bg-black mt-1"></div>
                </div>
            </div>

            {/* Item Row */}
            <div className="flex justify-between items-center">
                <div>
                    <p className="font-medium">{name}</p>
                </div>

                <div className="flex items-center gap-4">
                    <div className="flex items-center border rounded px-2 py-1">
                        <button className="px-2 text-gray-600">-</button>
                        <span className="px-2 font-medium">1</span>
                        <button className="px-2 text-green-600 font-bold">
                            +
                        </button>
                    </div>
                    <span className="font-medium">{price / 100}</span>
                </div>
            </div>
        </>
    );
};

export default CartItem;
