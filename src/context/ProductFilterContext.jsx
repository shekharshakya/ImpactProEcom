import { createContext, useContext, useEffect, useReducer } from "react";
import { GlobalProductContextHook } from "./ProductContext";
import reducer from "../reducer/ProductFilterReducer";

const FilterContext = createContext();

const initialstate = {
  filterData: [],
  all_filterData: [],
  sortingValue: "lower",
  filter: {
    category: "all",
    company: "all",
    color: "all",
    max: 0,
    price: 0,
    min: 0,
  },
};

const FilterContextProvide = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialstate);
  const { products } = GlobalProductContextHook();

  const Sorting = () => {
    dispatch({ type: "select sorting product" });
  };

  const filterEmployeedata = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    dispatch({ type: "Get Filter Value", payload: { name, value } });
  };

  // reset all Filter
  const Resetfilter = () =>{
dispatch({type:"Reset All Filter"})
  }

  useEffect(() => {
    // dispatch({ type: "Get Filter product Data" });
    dispatch({ type: "Sorting product Data", payload: products });
  }, [products, state.sortingValue]);

  useEffect(() => {
    dispatch({ type: "Get Filter product Data" });
  }, [products, state.filter]);

  useEffect(() => {
    dispatch({ type: "load Filter Data", payload: products });
  }, [products]);

  return (
    <FilterContext.Provider value={{ ...state, Sorting, filterEmployeedata,Resetfilter }}>
      {children}
    </FilterContext.Provider>
  );
};

const GlobalFilterContextHook = () => {
  return useContext(FilterContext);
};

export { FilterContext, FilterContextProvide, GlobalFilterContextHook };
