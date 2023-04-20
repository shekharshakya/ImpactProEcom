import React, { useState } from "react";
import ProductCard from "../components/ProductCard";
import { GlobalProductContextHook } from "../context/ProductContext";
import { GlobalFilterContextHook } from "../context/ProductFilterContext";

const Products = () => {
  const { isLoading, featureProducts } = GlobalProductContextHook();

  const {
    filterData,
    Sorting,
    all_filterData,
    filterEmployeedata,
    filter: { category, company, color, max, price, min },
  } = GlobalFilterContextHook();

  const [searchvalue, setSearchHeadler] = useState("");

  const getUniqueData = (data, property) => {
    let newValue = data.map((curEle) => {
      return curEle[property];
    });
    // return (newValue = ["All", ...new Set(newValue)]);
    if (property === "colors") {
      return (newValue = ["All", ...new Set([].concat(...newValue))]);
    } else {
      return (newValue = ["All", ...new Set(newValue)]);
    }
  };

  const categoryOnlyData = getUniqueData(all_filterData, "category");
  const companyOnlyData = getUniqueData(all_filterData, "company");
  const colorOnlyData = getUniqueData(all_filterData, "colors");

  if (isLoading) {
    return <div>Is Loading</div>;
  }
  return (
    <section className="product-section section">
      <div className="container-fluid">
        <h2 className="section-title">Our Products</h2>
        <div className="row mt-5">
          <div className="col-lg-2">
            <div className="serch-bar mb-2">
              <div className="search-bar">
                <input
                  type="text"
                  className="form-control"
                  name=""
                  id=""
                  value={searchvalue}
                  placeholder="Search Product"
                  onChange={(e) => setSearchHeadler(e.target.value)}
                />
              </div>
            </div>
            <div className="filter-box">
              <h4>Category</h4>
              <ul>
                {categoryOnlyData &&
                  categoryOnlyData.map((curEle, index) => {
                    return (
                      <button
                        key={index}
                        type="button"
                        name="category"
                        value={curEle}
                        className="filter-btn"
                        onClick={filterEmployeedata}
                      >
                        {curEle}
                      </button>
                    );
                  })}
              </ul>
              <h4>Company</h4>
              <ul>
                {companyOnlyData &&
                  companyOnlyData.map((curEle, index) => {
                    return (
                      <button
                        type="button"
                        key={index}
                        name="company"
                        value={curEle}
                        className="filter-btn"
                        onClick={filterEmployeedata}
                      >
                        {curEle}
                      </button>
                    );
                  })}
              </ul>
              <h4>Colour</h4>
              <ul className="colors-list">
                {colorOnlyData &&
                  colorOnlyData.map((curEle, index) => {
                    return (
                      <li>
                        <button
                          name="color"
                          value={curEle}
                          style={{ backgroundColor: curEle }}
                          key={index}
                          onClick={filterEmployeedata}
                        ></button>
                      </li>
                    );
                  })}
              </ul>
              <h4>Price</h4>
              <div className="price-filter mb-2">
                <p className="mb-0">${price}</p>
                <form>
                  <input
                    type="range"
                    name="price"
                    className="w-100"
                    id="price-filter"
                    max={max}
                    min={min}
                    value={price}
                    onChange={filterEmployeedata}
                  />
                </form>
              </div>

              <div className="reset-btn">
                <button className="btn btn-danger w-100">Reset</button>
              </div>
            </div>
          </div>
          <div className="col-lg-10">
            <div className="row">
              <div className="col-lg-12">
                <div className="row">
                  <div className="col-9"></div>
                  <div className="col-3">
                    <form>
                      <select
                        className="form-select mb-2"
                        id="sortproduct"
                        onChange={Sorting}
                      >
                        <option value="lower">Lower</option>
                        <option value="Highest">Higthest</option>
                        <option value="a-z">Sort (A-Z)</option>
                        <option value="z-a">Sort (Z-A)</option>
                      </select>
                    </form>
                  </div>
                </div>
              </div>
              {filterData
                .filter((curEle) => {
                  return searchvalue === ""
                    ? curEle
                    : curEle.name.toLowerCase().includes(searchvalue);
                })
                .map((curEle, index) => {
                  return (
                    <div className="col-lg-3">
                      <ProductCard key={index} product={curEle} />
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
