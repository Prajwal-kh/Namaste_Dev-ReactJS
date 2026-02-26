import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import ItemCard from "./ItemCard";
import { clearCart } from "../utils/cartSlice";

const CartPage = () => {
    // To get the cart items we need to Subscribe to the store using selector
    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();
    const [showNewCartPage, setShowNewCartPage] = useState(false);
    // We can decommission our old view once we are ok with new cart page changes

    const handlePageSwitch = () => {
        setShowNewCartPage(!showNewCartPage);
    };
    const handleClearCart = () => {
        dispatch(clearCart());
    };

    return (
        <>
            <div className="flex justify-between">
                <button
                    className="p-2 ml-2 border-2 rounded-lg hover:cursor-pointer text-white font-bold bg-amber-400"
                    onClick={handlePageSwitch}
                >
                    {showNewCartPage
                        ? "Switch to old cart page"
                        : "Switch to new cart page"}
                </button>
                <button
                    className="p-2 mr-2 border-2 rounded-lg hover:cursor-pointer text-white font-bold bg-red-500"
                    onClick={handleClearCart}
                    disabled={cartItems?.length === 0}
                >
                    Clear cart
                </button>
            </div>
            {showNewCartPage === false
                ? cartItems?.length > 0 && (
                      <div className="flex justify-center">
                          <div className="w-150 p-4 m-4">
                              {/* Reused the component */}
                              {/* As this component is reused we have to maintain the unique keys */}
                              {cartItems.map((items, index) => (
                                  <ItemCard
                                      items={items}
                                      key={items.card.info.id + index}
                                  />
                              ))}
                          </div>
                      </div>
                  )
                : cartItems?.length > 0 && (
                      <div className="bg-gray-100 min-h-screen py-6 px-4 flex justify-center">
                          <div className="w-full max-w-md space-y-6">
                              <div className="bg-white rounded-lg shadow p-4 space-y-4">
                                  {cartItems.map((items, index) => {
                                      return (
                                          <CartItem
                                              items={items}
                                              key={items.card.info.id + index}
                                          />
                                      );
                                  })}

                                  {/* Bill Details */}

                                  <div className="space-y-2 text-sm">
                                      <h3 className="font-semibold">
                                          Bill Details
                                      </h3>

                                      <div className="flex justify-between">
                                          <span>Item Total</span>
                                          <span>₹169</span>
                                      </div>

                                      <div className="flex justify-between">
                                          <span>Delivery Fee | 4.0 kms</span>
                                          <span>₹43</span>
                                      </div>

                                      <div className="flex justify-between">
                                          <span>GST & Other Charges</span>
                                          <span>₹57.43</span>
                                      </div>

                                      <div className="border-t pt-2 flex justify-between font-semibold text-base">
                                          <span>TO PAY</span>
                                          <span>₹269</span>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  )}
            {cartItems?.length === 0 && (
                <div className="text-center m-50 font-bold">
                    <h2>Cart is empty.</h2>
                    <h2>Add some items to the Cart.</h2>
                </div>
            )}
        </>
    );
};

export default CartPage;
