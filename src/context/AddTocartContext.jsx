import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/AddToCartReducer";

const CartContext = createContext();

const getLocalecartData = () => {
  // render data from localStorage
  let updateCartData = localStorage.getItem("cartData");
  if (updateCartData === []) {
    return [];
  } else {
    return JSON.parse(updateCartData);
  }
};

const getLocalewishlistData = () => {
  // render data from localStorage
  let updatewishlistData = localStorage.getItem("wishlistData");
  if (updatewishlistData === []) {
    return [];
  } else {
    return JSON.parse(updatewishlistData);
  }
};

const initialstate = {
  // cart: [],
  cart: getLocalecartData(),
  // wishlist: [],
  wishlist: getLocalewishlistData(),
  shippingPrice: 50000,
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialstate);

  // Add to cart
  const AddToCart = (amount, selectcolor, productsDetails) => {
    dispatch({
      type: "Add To Cart Items",
      payload: { amount, selectcolor, productsDetails },
    });
  };

  // remove cart item
  const RemoveCartItem = (id) => {
    dispatch({ type: "Remove Cart Item", payload: id });
  };

  const RemoveWishListProduct = (id) => {
    dispatch({ type: "Remove WishList Item", payload: id });
  }

  // clear cart item
  const ClearCart = () => {
    dispatch({ type: "Clear Cart" });
  };

  // share product
  const ShareProduct = (productid) => {
    if (navigator.share) {
      try {
        navigator.share({
          title: "MDN",
          text: "Learn web development on MDN!",
          url: `https://api.pujakaitem.com/api/products/${productid}`,
        });
        alert("MDN shared successfully");
      } catch (err) {
        alert(`Error: ${err}`);
      }
    }
  };

  const AddToWishList = (wishlistProduct) => {
    dispatch({ type: "Add To Wishlist", payload: wishlistProduct })
  }

  useEffect(() => {
    // add data in localStorage
    localStorage.setItem("cartData", JSON.stringify(state.cart));
    localStorage.setItem("wishlistData", JSON.stringify(state.wishlist))
  }, [state.cart][state.wishlist]);

  return (
    <CartContext.Provider
      value={{ ...state, AddToCart, RemoveCartItem, ClearCart, ShareProduct, RemoveWishListProduct, AddToWishList }}
    >
      {children}
    </CartContext.Provider>
  );
};

const GlobalProductCartContextHook = () => {
  return useContext(CartContext);
};

export { CartContext, CartProvider, GlobalProductCartContextHook };
