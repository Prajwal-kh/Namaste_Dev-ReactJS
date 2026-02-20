import React, { useState } from "react";
import ItemCard from "./ItemCard";

const MenuItems = ({ restaurantMenu }) => {
    const { title, itemCards } = restaurantMenu?.card?.card;
    const [itemsVisible, setItemsVisible] = useState(false);

    return (
        <div className="mx-6">
            <div className="rounded-base border-gray-300 border-b-2 shadow-md bg-gray-200 my-2">
                <button
                    className="flex justify-between font-medium w-full mr-4 p-4"
                    type="button"
                    onClick={() => {
                        setItemsVisible(!itemsVisible);
                    }}
                >
                    <span>{`${title} (${itemCards.length})`}</span>
                    <span>{itemsVisible ? "∧" : "v"}</span>
                </button>
                {itemsVisible &&
                    itemCards?.map((items) => (
                        <ItemCard items={items} key={items.card.info.id} />
                    ))}
            </div>
        </div>
    );
};

export default MenuItems;
