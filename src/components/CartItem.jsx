import React from "react";
import { GlobalProductCartContextHook } from "../context/AddTocartContext";

const CartItem = ({ id, name, amount, image, price, maxQty }) => {
  const { RemoveCartItem } = GlobalProductCartContextHook();

  const qtyIncrease = () => {
    // amount < maxQty ? setamount(amount + 1) : setamount(maxQty);
  };

  const qtyDecrease = () => {
    // amount > 1 ? setamount(amount - 1) : setamount(1);
  };
  return (
    <tr>
      <td className="d-flex align-items-center font-weight-bolder">
        <div className="product-img">
          <img src={image} alt="" />
        </div>
        <a href="#" className="text-dark text-hover-primary">
          {name}
        </a>
      </td>
      <td className="text-center align-middle">
        <a
          href="javascript:;"
          className="btn btn-xs btn-light-success btn-icon mr-2"
          onClick={qtyDecrease}
        >
          <i className="fa-solid fa-minus"></i>
        </a>
        <span className="mr-2 font-weight-bolder">{amount}</span>
        <a
          href="javascript:;"
          className="btn btn-xs btn-light-success btn-icon"
          onClick={qtyIncrease}
        >
          <i className="fa-solid fa-plus"></i>
        </a>
      </td>
      <td className="text-right align-middle font-weight-bolder font-size-h5">
        ${price}
      </td>
      <td className="text-right align-middle font-weight-bolder font-size-h5">
        ${price * amount}
      </td>
      <td className="text-end align-middle">
        <a
          href="#"
          className="btn btn-danger font-weight-bolder font-size-sm text-end"
          onClick={() => {
            RemoveCartItem(id);
          }}
        >
          Remove
        </a>
      </td>
    </tr>
  );
};

export default CartItem;
