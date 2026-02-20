import { RESTRO_IMG_CDN_URL } from "../utils/config";

export const RestroCard = ({ restaurant }) => {
    const { name, cuisines, avgRating, sla, costForTwo, cloudinaryImageId } =
        restaurant?.info;
    const { deliveryTime } = sla;

    return (
        <>
            <div className="m-2 border border-gray-200 bg-gray-100 hover:bg-gray-200 rounded-lg">
                <img
                    src={`${RESTRO_IMG_CDN_URL}/${cloudinaryImageId}`}
                    alt={name}
                    className="m-2 w-80 h-60 rounded-lg"
                />
                <div className="m-2 w-80 h-60">
                    <h3 className="my-2 font-medium text-xl">{name}</h3>
                    <p>{`Cuisine: ${cuisines.join(", ")}`}</p>
                    <p>{`Ratings: ${avgRating ? avgRating : "Not available"}`}</p>
                    <p>{`Cost: ${costForTwo}`}</p>
                    <p>{`Delivery time: ${deliveryTime} mins`}</p>
                </div>
            </div>
        </>
    );
};

// Higher order component which takes a component as an parameter and returns a component:
export const withRestroCard = (RestroCard) => {
    return (props) => {
        return (
            <div>
                <label className="absolute p-1 m-4 font-bold text-white bg-red-500">
                    {
                        props?.restaurant?.info?.aggregatedDiscountInfoV3
                            ?.discountTag
                    }
                </label>
                <RestroCard {...props} />
            </div>
        );
    };
};
