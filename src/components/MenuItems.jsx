import ItemCard from "./ItemCard";

const MenuItems = ({ restaurantMenu, showMenuItem, setMenuItemIndex }) => {
    const { title, itemCards } = restaurantMenu?.card?.card;

    return (
        <div className="mx-6">
            <div className="rounded-base border-gray-300 border-b-2 shadow-md bg-gray-200 my-2">
                <button
                    className="flex justify-between font-medium w-full mr-4 p-4"
                    type="button"
                    onClick={() => {
                        setMenuItemIndex();
                    }}
                >
                    <span>{`${title} (${itemCards.length})`}</span>
                    <span>{showMenuItem ? "∧" : "v"}</span>
                </button>
                {/* Develope a feature to make the other accordian collapsable if one is opened using React's lifting state up */}
                {/* Which means give control to show accordian items to this components's parent component use react dev tools to check */}
                {/* Once we implement this MenuCard.jsx component will be called as controlled component as its controlling this component's state & this becomes uncontrolled component */}
                {showMenuItem &&
                    itemCards?.map((items) => (
                        <ItemCard items={items} key={items.card.info.id} />
                    ))}
            </div>
        </div>
    );
};

export default MenuItems;
