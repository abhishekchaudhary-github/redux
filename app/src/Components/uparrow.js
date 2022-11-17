import React from "react";
import { connect } from "react-redux";
import { increase } from "./action";

function uparrow({ count, dispatch }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="w-6 h-6"
      style={{ height: "1rem", width: "1rem" }}
      onClick={() => {
        dispatch({ type: increase });
      }}
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18"
      />
    </svg>
  );
}

function mapProps(store) {
  return { count: store.count };
}
export default connect(mapProps)(uparrow);
