import React from "react";

const AddToCartReducer = (state, action) => {
  switch (action.type) {
    case "Add To Cart Items":
      const { amount, selectcolor, productsDetails } = action.payload;

      let existingCartItem = state.cart.find((curEle) => {
        return curEle.id === productsDetails.id + selectcolor;
      });
      if (existingCartItem) {
        let updateCartData = state.cart.map((curEle) => {
          if (curEle.id === productsDetails.id + selectcolor) {
            let newProductAmount = curEle.amount + amount;
            return {
              ...curEle,
              amount: newProductAmount,
            };
          } else {
            return {
              ...curEle,
            };
          }
        });
        return {
          ...state,
          cart: updateCartData,
        };
      } else {
        let cartProduct;
        cartProduct = {
          id: productsDetails.id + selectcolor,
          name: productsDetails.name,
          amount: amount,
          selectcolor: selectcolor,
          image: productsDetails.image[0].url,
          price: productsDetails.price,
          maxQty: productsDetails.stock,
        };
        console.log(cartProduct);
        return {
          ...state,
          cart: [...state.cart, cartProduct],
        };
      }

    case "Remove Cart Item":
      let UpdateCartItem = state.cart.filter((curEle) => {
        return curEle.id !== action.payload;
      });

      return {
        ...state,
        cart: UpdateCartItem,
      };

    case "Add To Wishlist":
      let WishListProduct = action.payload;

      return {
        ...state,
        wishlist: [...state.wishlist, WishListProduct],
      };

    case "Remove WishList Item":
      let UpdateWishListItem = state.wishlist.filter((curEle) => {
        return curEle.id !== action.payload;
      });

      return {
        ...state,
        wishlist: UpdateWishListItem,
      };

    case "Clear Cart":
      return {
        ...state,
        cart: [],
      };

    case "count cart items":
      let cartItemCount = state.cart.reduce((initialValue, curEle) => {
        let { amount } = curEle;
        initialValue = initialValue + amount;
        return initialValue;
      }, 0);
      return {
        ...state,
        totalCartItem: cartItemCount,
      };

    case "sub total price":
      let subTotalPrice = state.cart.reduce((initialValue, curEle) => {
        let { price, amount } = curEle;
        initialValue = initialValue + price * amount;
        return initialValue;
      }, 0);
      
      return {
        ...state,
        subtotal: subTotalPrice,
      };

    default:
      return {
        state,
      };
  }
};

export default AddToCartReducer;
