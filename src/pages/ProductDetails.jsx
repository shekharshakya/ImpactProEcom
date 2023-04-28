import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import ReactImageMagnify from 'react-image-magnify';
import { GlobalProductCartContextHook } from "../context/AddTocartContext";
import { GlobalProductContextHook } from "../context/ProductContext";
import Star from "../components/Star";
import RelatedItems from "../components/RelatedItems";

const ProductDetails = () => {
  const { productsDetails, ProductDetailsData, isLoading, RelatedProduct, relatedProduct } =
    GlobalProductContextHook();

    
  const category = productsDetails.category;

  const { AddToCart, ShareProduct } = GlobalProductCartContextHook();

  const colors = productsDetails.colors;
  const productImage = productsDetails.image;
  const fromDb = productImage?.[0];
  let mainProductImg = fromDb || [];
  const productQty = productsDetails.stock;

  const [amount, setamount] = useState(1);
  const [selectcolor, setSelectedColor] = useState();

  const { id } = useParams();

  const Api = "https://api.pujakaitem.com/api/products";

  const qtyIncrease = () => {
    amount < productQty ? setamount(amount + 1) : setamount(productQty);
  };

  const qtyDecrease = () => {
    amount > 1 ? setamount(amount - 1) : setamount(1);
  };

  const selectColor = (selectedColor) => {
    setSelectedColor(selectedColor);
  };

  useEffect(() => {
    ProductDetailsData(`${Api}?id=${id}`);
    RelatedProduct("mobile");
  }, []);


  useEffect(()=>{
    console.log(category)
  },[])





  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <section className="product-details-section section">
        <div className="container">
          <div className="row details-snippet1">
            <div className="col-md-7">
              <div className="row">
                <div className="col-md-2 mini-preview">
                  {productImage &&
                    productImage.map((curEle, index) => {
                      return (
                        <img
                          className="img-fluid"
                          src={curEle.url} key={index}
                          alt="Preview"
                        />
                      );
                    })}
                </div>
                <div className="col-md-10">
                  <div className="product-image">
                    {/* <img
                    src={mainProductImg.url}
                    className="w-100"
                    alt={mainProductImg.filename}
                  /> */}
                    <ReactImageMagnify {...{
                      smallImage: {
                        alt: 'Wristwatch by Ted Baker London',
                        isFluidWidth: true,
                        src: mainProductImg.url,

                      },
                      largeImage: {
                        src: mainProductImg.url,
                        width: 2000,
                        height: 1000,

                      },

                    }} />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <div className="title">
                {productsDetails.name}
                <span
                  className="shareProduct"
                  onClick={() => ShareProduct(productsDetails.id)}
                >
                  <i className="fa-solid fa-share"></i>
                </span>
              </div>

              <div className="ratings my-2">
                <div className="stars">
                  <div className="theme-text mr-2">Product Ratings: </div>

                  <div className="ml-2">
                    <Star star={productsDetails.stars} />(
                    {productsDetails.reviews} Reviews)
                  </div>
                </div>
              </div>
              <div className="price my-2">
                ${productsDetails.price}
                <strike className="original-price">
                  ${productsDetails.price * 2}
                </strike>
              </div>

              <div className="theme-text subtitle">Brief Description:</div>
              <div className="brief-description">
                {productsDetails.description}
              </div>
              <div className="category">
                <span className="theme-text">Category: </span>
                {productsDetails.category}
              </div>
              <div className="category">
                <span className="theme-text">Campany: </span>
                {productsDetails.company}
              </div>
              <div className="colors d-flex align-items-center gap-3">
                <div className="subtitle theme-text">Colors:</div>
                <ul className="colour-list m-0 ps-0">
                  {colors &&
                    colors.map((curEle, index) => {
                      return (
                        <li
                          style={{ backgroundColor: curEle }}
                          key={index}
                          onClick={() => {
                            selectColor(curEle);
                          }}
                        ></li>
                      );
                    })}
                </ul>
                <hr />
              </div>
              <div className="product-qty">
                <button type="button" onClick={qtyDecrease}>
                  -
                </button>
                <div className="qty">{amount}</div>
                <button type="button" onClick={qtyIncrease}>
                  +
                </button>
              </div>

              <div className="add-to-cart mt-3">
                <NavLink
                  to="/cart"
                  className="btn btn-warning"
                  onClick={() => {
                    AddToCart(amount, selectcolor, productsDetails);
                  }}
                >
                  Add To Cart
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      <RelatedItems />

    </>
  );
};

export default ProductDetails;
