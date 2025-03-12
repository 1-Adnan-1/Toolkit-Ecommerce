import { createSlice } from "@reduxjs/toolkit";

// Local storage'dan sepeti almak
const fetchFromLocalStoreage = () => {
  let cart = localStorage.getItem("cart");
  if (cart) {
    return JSON.parse(cart);
  } else {
    return [];
  }
};

// Local storage'a sepeti kaydetmek
const storeInLocalStoreage = (data) => {
  localStorage.setItem("cart", JSON.stringify(data));
};

const initialState = {
  carts: fetchFromLocalStoreage(),
  itemCount: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCard: (state, action) => {
      const isItemCart = state.carts.find(
        (item) => item.id === action.payload.id
      );

      if (isItemCart) {
        const tempCart = state.carts.map((item) => {
          if (item.id === action.payload.id) {
            // Miktarı arttır
            const tempQty = item.quantity + action.payload.quantity;
            const tempTotalPrice = tempQty * item.price; // Fiyat hesaplamasını düzeltiyoruz
            return {
              ...item,
              quantity: tempQty,
              totalPrice: tempTotalPrice,
            };
          } else {
            return item;
          }
        });
        state.carts = tempCart;
        storeInLocalStoreage(state.carts);
      } else {
        // İlk defa sepete eklenen ürün için
        state.carts.push(action.payload);
        storeInLocalStoreage(state.carts);
      }
    },

    // Sepetteki ürünün miktarını artırmak için
    increaseQuantity: (state, action) => {
      const itemIndex = state.carts.findIndex(
        (item) => item.id === action.payload
      );
      if (itemIndex !== -1) {
        const updatedCart = [...state.carts];
        const item = updatedCart[itemIndex];
        updatedCart[itemIndex] = {
          ...item,
          quantity: item.quantity + 1,
          totalPrice: (item.quantity + 1) * item.price,
        };
        state.carts = updatedCart;
        storeInLocalStoreage(state.carts);
      }
    },

    // Sepetteki ürünün miktarını azaltmak için yeni bir işlem
    decreaseQuantity: (state, action) => {
      const itemIndex = state.carts.findIndex(
        (item) => item.id === action.payload
      );
      if (itemIndex !== -1) {
        const updatedCart = [...state.carts];
        const item = updatedCart[itemIndex];
        if (item.quantity > 1) {
          // Eğer miktar 1'den büyükse, miktarı azalt
          updatedCart[itemIndex] = {
            ...item,
            quantity: item.quantity - 1,
            totalPrice: (item.quantity - 1) * item.price,
          };
        } else {
          // Eğer miktar 1 ise, ürünü sepetten çıkar
          updatedCart.splice(itemIndex, 1);
        }
        state.carts = updatedCart;
        storeInLocalStoreage(state.carts);
      }
    },

    removeFromCart: (state, action) => {
      const tempCart = state.carts.filter((item) => item.id !== action.payload);
      state.carts = tempCart;
      storeInLocalStoreage(state.carts);
    },

    clearCart: (state) => {
      state.carts = [];
      storeInLocalStoreage(state.carts);
    },

    getCartTotal: (state) => {
      state.totalAmount = state.carts.reduce((cartTotal, cartItem) => {
        return (cartTotal += cartItem.price * cartItem.quantity);
      }, 0);
      state.itemCount = state.carts.length;
    },
  },
});

export const {
  addToCard,
  removeFromCart,
  clearCart,
  getCartTotal,
  increaseQuantity,
  decreaseQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
