import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="product-box" id={product.id}>
      <div className="product-card">
        <div className="badge">{product.company}</div>
        <div className="product-tumb">
          <img src={product.image} alt="" />
        </div>
        <div className="product-details">
          <span className="product-catagory">{product.category}</span>
          <h4>
            <Link to={`/product-details/${product.id}`}>{product.name}</Link>
          </h4>
          <p>{product.description.substring(0, 120)}</p>
          <div className="product-bottom-details">
            <div className="product-price">
              <small>$96.00</small>${product.price}
            </div>
            <div className="product-links">
              <a href="">
                <i className="fa fa-heart"></i>
              </a>
              <a href="">
                <i className="fa fa-shopping-cart"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
