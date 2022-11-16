import "./App.css";
import Nav from "./Components/nav";
import data from "./Components/cartItems";
import Down from "./Components/downarraow";
import Up from "./Components/uparrow";
function App() {
  return (
    <div style={{ textAlign: "center" }}>
      <Nav />
      <div style={{ textAlign: "center", fontSize: "6rem" }}>Your Bag </div>
      {data.map((el) => {
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
      <button type="button" className="btn btn-outline-danger">
        CLEAR THE CART
      </button>
    </div>
  );
}

export default App;
