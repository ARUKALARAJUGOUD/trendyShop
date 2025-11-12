import { createSlice } from "@reduxjs/toolkit";

// ✅ Load initial state from localStorage
const loadWishlistFromStorage = () => {
  try {
    const data = localStorage.getItem("wishlist");
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error("Failed to load wishlist:", error);
    return [];
  }
};

// ✅ Save to localStorage whenever updated
const saveWishlistToStorage = (wishlist) => {
  try {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  } catch (error) {
    console.error("Failed to save wishlist:", error);
  }
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: loadWishlistFromStorage(),
  reducers: {
    addToWishlist: (state, action) => {
      const exists = state.find((item) => item.id === action.payload.id);
      if (!exists) {
        state.push(action.payload);
        saveWishlistToStorage(state);
      }
    },
    removeFromWishlist: (state, action) => {
      const updated = state.filter((item) => item.id !== action.payload);
      saveWishlistToStorage(updated);
      return updated;
    },
    clearWishlist: (state) => {
      saveWishlistToStorage([]);
      return [];
    },
  },
});

export const { addToWishlist, removeFromWishlist, clearWishlist } =
  wishlistSlice.actions;
export default wishlistSlice.reducer;
