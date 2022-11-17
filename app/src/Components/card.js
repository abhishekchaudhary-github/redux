import React from "react";
import { connect } from "react-redux";
import Down from "./downarraow";
import Up from "./uparrow";
import { remove } from "./action";

function card({ id, img, title, price, amount, remove }) {
  return (
    <>
      <div
        key={id}
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
            <img src={img} style={{ height: "5rem", width: "5rem" }} />
            <h5>{title}</h5>
            <p>{price}</p>
            <button
              onClick={() => {
                remove();
              }}
            >
              REMOVE
            </button>
          </p>
          <div style={{ padding: "2rem", cursor: "pointer" }}>
            <Up />
            <p>{amount}</p>
            <Down />
          </div>
        </div>
      </div>
      <div style={{ height: "4rem" }}></div>
    </>
  );
}

function mapProps(dispatch, ownProps) {
  const { id } = ownProps;
  return {
    remove: () => {
      dispatch({ type: remove, payload: { id } });
    },
  };
}

export default connect(null, mapProps)(card);
