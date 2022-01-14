import React from "react";
import { connect } from "react-redux";
import {
  clearItemFromCart,
  addItemToCart,
  removeItem,
} from "../../redux/cart/cart.action";

import "./checkout-item.styles.scss";

function CheckoutItem({
  cartItem,
  clearItemFromCart,
  removeItem,
  addItemToCart,
}) {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => removeItem(cartItem)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItemToCart(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div
        className="remove-button"
        onClick={() => clearItemFromCart(cartItem)}
      >
        &#10006;
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  clearItemFromCart: (item) => dispatch(clearItemFromCart(item)),
  addItemToCart: (item) => dispatch(addItemToCart(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
