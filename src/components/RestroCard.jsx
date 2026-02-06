import { RESTRO_IMG_CDN_URL } from "../utils/config";

export const RestroCard = ({ restaurant }) => {
    const { name, cuisines, avgRating, sla, costForTwo, cloudinaryImageId } =
        restaurant?.info;
    const { deliveryTime } = sla;
    return (
        <>
            <div className="restaurant-card">
                <img
                    src={`${RESTRO_IMG_CDN_URL}/${cloudinaryImageId}`}
                    alt={name}
                    width={150}
                    height={300}
                />
                <div className="restaurant-details">
                    <h3>{name}</h3>
                    <p>{`Cuisine: ${cuisines.join(", ")}`}</p>
                    <p>{`Ratings: ${avgRating ? avgRating : "Not available"}`}</p>
                    <p>{`Cost: ${costForTwo}`}</p>
                    <p>{`Delivery time: ${deliveryTime} mins`}</p>
                </div>
            </div>
        </>
    );
};
