import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/ProductReducer";

const ProductContext = createContext();

const initialstate = {
  isLoading: false,
  isError: false,
  products: [],
  featureProducts:[],
  relatedProduct:[],
  productsDetails: {},
};

const Api = "https://api.pujakaitem.com/api/products";

const ProductContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialstate);

  const ProductApiData = async (url) => {
    dispatch({ type: "Api is loading" });
    try {
      const res = await axios.get(url);
      const productsData = await res.data;
      dispatch({ type: "Api Produc data", payload: productsData });
    } catch (error) {
      dispatch({ type: "Api error" });
    }
  };

  const ProductDetailsData = async (url) => {
    dispatch({ type: "Api is loading" });
    try {
      const res = await axios.get(url);
      const productsDetails = await res.data;
      dispatch({ type: "Api  Product details data", payload: productsDetails });
    } catch (error) {
      dispatch({ type: "Api error" });
    }
  };

  const RelatedProduct =  async (category) => {
    dispatch({ type: "Api is loading" });
    try {
      const res = await axios.get(Api);
      const relatedProductData = await res.data;
      dispatch({ type: "Related Produc data", payload: {relatedProductData,category} });
      console.log(relatedProductData,category)
    } catch (error) {
      dispatch({ type: "Api error" });
    }
  
  };

  useEffect(() => {
    ProductApiData(Api);
  }, []);

  return (
    <ProductContext.Provider value={{ ...state, ProductDetailsData,RelatedProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

const GlobalProductContextHook = () => {
  return useContext(ProductContext);
};

export { ProductContext, ProductContextProvider, GlobalProductContextHook };
