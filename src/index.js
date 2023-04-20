import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CartProvider } from "./context/AddTocartContext";
import { ProductContextProvider } from "./context/ProductContext";
import { FilterContextProvide } from "./context/ProductFilterContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ProductContextProvider>
    <FilterContextProvide>
      <CartProvider>
        <App />
      </CartProvider>
    </FilterContextProvide>
  </ProductContextProvider>
);
