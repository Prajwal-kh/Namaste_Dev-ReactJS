import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
    },
    reducers: {
        addItem: (state, action) => {
            // mutating the state here directly because of RTK
            state.items.push(action.payload);
        },
        removeItem: (state, action) => {
            state.items.pop(action.payload);
        },
        clearCart: (state) => {
            console.log("current state: ", current(state));
            // state.items.length = 0;
            // state.items = [];
            return { items: [] };
        },
    },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
