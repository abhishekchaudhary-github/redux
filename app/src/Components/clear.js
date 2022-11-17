import React from "react";
import { connect } from "react-redux";
import Down from "./downarraow";
import Up from "./uparrow";
import { clear_cart } from "./action";

function clear({ cart, dispatch }) {
  return (
    <>
      {cart.map((el) => {
        return (
          <>
            <div
              key={el.id}
              style={{
                textAlign: "center",
                marginLeft: "10px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  margin: "auto",
                  justifyContent: "center",
                }}
              >
                <p style={{ alignContent: "center", marginRight: "3rem" }}>
                  <img src={el.img} style={{ height: "5rem", width: "5rem" }} />
                  <h5>{el.title}</h5>
                  <p>{el.price}</p>
                  {/* <button onClick={()=>{dispatch(remove)}}>REMOVE</button> */}
                </p>
                <div style={{ padding: "2rem", cursor: "pointer" }}>
                  <Up />
                  <p>{el.amount}</p>
                  <Down />
                </div>
              </div>
            </div>
            <div style={{ height: "4rem" }}></div>
          </>
        );
      })}
      <br />
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
