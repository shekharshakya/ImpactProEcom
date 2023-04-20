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
              curEle,
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

    case "Clear Cart":
      return {
        ...state,
        cart: [],
      };

    default:
      return {
        state,
      };
  }
};

export default AddToCartReducer;
