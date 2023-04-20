const ProductReducer = (state, action) => {
  switch (action.type) {
    case "Api is loading":
      return {
        ...state,
        isLoading: true,
      };

    case "Api error":
      return {
        ...state,
        isError: true,
      };

    case "Api Produc data":
      return {
        ...state,
        isLoading: false,
        isError: false,
        products: action.payload,
      };

    case "Api  Product details data":
      return {
        ...state,
        isLoading: false,
        isError: false,
        productsDetails: action.payload,
      };
    default:
      return state;
  }
};

export default ProductReducer;
