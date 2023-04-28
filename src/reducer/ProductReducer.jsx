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
      let featureProducts = action.payload.filter((curEle) => {
        return curEle.featured === true;
      })

      return {
        ...state,
        isLoading: false,
        isError: false,
        products: action.payload,
        featureProducts: featureProducts,
      };


    case "Api  Product details data":
      return {
        ...state,
        isLoading: false,
        isError: false,
        productsDetails: action.payload,
      };

    case "Related Produc data":
      console.log("Related Produc data");
      const { relatedProductData, category } = action.payload;
      console.log(relatedProductData, category)
      const relatedProduct = relatedProductData.filter((curEle) => {
        return curEle.category === category;
      })
      return {
        ...state,
        relatedProduct: relatedProduct
      };

    default:
      return state;
  }
};

export default ProductReducer;
