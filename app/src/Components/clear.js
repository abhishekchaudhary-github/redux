import React from "react";
import { connect } from "react-redux";
import Card from "./card";
import { clear_cart } from "./action";

function clear({ cart, dispatch }) {
  return (
    <>
      <br />
      {cart.map((el) => {
        return (
          <Card
            id={el.id}
            img={el.img}
            title={el.title}
            price={el.price}
            amount={el.amount}
          />
        );
      })}
      <hr />
      <h3>TOTAL = $0.00</h3>
      <br />

      <button
        type="button"
        className="btn btn-outline-danger"
        onClick={() => dispatch({ type: clear_cart })}
      >
        CLEAR THE CART
      </button>
    </>
  );
}

function mapStates(store) {
  return { cart: store.cart };
}

export default connect(mapStates)(clear);
