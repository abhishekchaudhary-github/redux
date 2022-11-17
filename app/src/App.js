import "./App.css";
import Nav from "./Components/nav";
import reducer from "./Components/reducer";
import { Provider } from "react-redux";
import { createStore } from "redux";
import cart from "./Components/cartItems";
import Clear from "./Components/clear";

function App() {
  const initialState = {
    count: 0,
    totalPrice: 0,
    cart: cart,
  };
  const store = createStore(reducer, initialState);
  return (
    <Provider store={store}>
      <div style={{ textAlign: "center" }}>
        <Nav />
        <div style={{ textAlign: "center", fontSize: "6rem" }}>Your Bag </div>
        <Clear />
      </div>
    </Provider>
  );
}

export default App;
