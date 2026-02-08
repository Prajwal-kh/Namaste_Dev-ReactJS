import { RESTRO_IMG_CDN_URL } from "../utils/config";

const MenuCard = ({ menuItem }) => {
    const { name, price, description, imageId } = menuItem?.card?.info || {};
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

export default MenuCard;
