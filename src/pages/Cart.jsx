import React from "react";
import { NavLink } from "react-router-dom";
import CartItem from "../components/CartItem";
import { GlobalProductCartContextHook } from "../context/AddTocartContext";

const Cart = () => {
  const { cart, ClearCart } = GlobalProductCartContextHook();
  console.log(cart)

  if (cart.length === 0) {
    return <h2 className="text-center my-5">No Items In Cart</h2>;
  }

  return (
    <>
      <section className="shopping-cart-section">
        <div className="container">
          <div className="col-12">
            <div className="shopping-cart ">
              <h3>
                <span>My Shopping Cart</span>
              </h3>
              <NavLink
                to="/product"
                className="btn btn-primary font-weight-bolder font-size-sm"
              >
                Continue Shopping
              </NavLink>
            </div>

            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th>Product</th>
                    <th className="text-center">Qty</th>
                    <th className="text-right">Price</th>
                    <th className="text-right">Sub Price</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {cart &&
                    cart.map((curEle, index) => {
                      return <CartItem key={index} {...curEle} />;
                    })}
                </tbody>
              </table>
            </div>
          </div>
          <div className="clear-cart mb-4">
            <button
              type="button"
              className="btn btn-danger"
              onClick={ClearCart}
            >
              Clear Cart
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
