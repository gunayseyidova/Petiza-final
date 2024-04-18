import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [],
    likeItems:[],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
    cartTotalLike:0,
};


const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {

        addToLike(state, action) {
            const itemId = action.payload.id;
            const item = state.likeItems.find(item => item.id === itemId);
        
            if (item && !item.isLiked) {
                state.cartTotalLike++;
                item.isLiked = true;
            } else if (item && item.isLiked) {
                state.cartTotalLike--;
                item.isLiked = false;
            } else {
                state.likeItems.push({ id: itemId, isLiked: true });
                state.cartTotalLike++;
            }
        
        },
        addToCart(state, action) {
            const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id)
            if (itemIndex >= 0) {
                state.cartItems[itemIndex].cartQuantity += 1
            } else {
                const tempProduct = { ...action.payload, cartQuantity: 1 }
                state.cartItems.push(tempProduct)
            }
            state.cartTotalQuantity = state.cartTotalQuantity + 1
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
        },

        removeFromCart(state, action) {
            const nextCartItems = state.cartItems.filter((cartItem) =>
                cartItem.id !== action.payload.id
            );

            state.cartItems = nextCartItems;
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
        },

        decreaseCart(state, action) {
            const itemIndex = state.cartItems.findIndex((cartItem) => cartItem.id === action.payload.id)

            if (state.cartItems[itemIndex].cartQuantity > 1) {
                state.cartItems[itemIndex].cartQuantity -= 1

            } else if (state.cartItems[itemIndex].cartQuantity === 1) {
                state.cartItems[itemIndex].cartQuantity = 1
               
            }
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
        },


        clearCart(state, action) {
            state.cartItems = [];
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
        },

        getTotals(state, action) {
            let { total, quantity } = state.cartItems.reduce((cartTotal, cartItem) => {
                const { price, cartQuantity } = cartItem;
                const itemTotal = price * cartQuantity;

                cartTotal.total += itemTotal
                cartTotal.quantity += cartQuantity

                return cartTotal;

            }, {
                total: 0,
                quantity: 0,
            });

            state.cartTotalQuantity = quantity;
            state.cartTotalAmount = total;
        }


    }

})

export const { addToCart, removeFromCart, decreaseCart, clearCart, getTotals,addToLike } = cartSlice.actions;

export default cartSlice.reducer;