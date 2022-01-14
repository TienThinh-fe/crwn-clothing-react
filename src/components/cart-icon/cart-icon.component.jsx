import React from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { connect } from "react-redux";

import { toggleCartHidden } from "../../redux/cart/cart.action";
import { createStructuredSelector } from "reselect";
import { selectCartItemsCount } from "../../redux/cart/cart.selector";

import "./cart-icon.styles.scss";

function CartIcon(props) {
  return (
    <div className="cart-icon" onClick={props.toggleCartHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">
        {props.itemCount ? props.itemCount : 0}
      </span>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
