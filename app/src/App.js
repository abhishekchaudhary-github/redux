import "./App.css";
import Nav from "./Components/nav";
import data from "./Components/cartItems";
function App() {
  return (
    <>
      <Nav />
      <div style={{ textAlign: "center", fontSize: "6rem" }}>Your Bag </div>
      {data.map((el) => {
        return (
          <div key={el.id} style={{ textAlign: "center" }}>
            <img src={el.img} style={{ height: "5rem", width: "5rem" }} />
            <h3>{el.title}</h3>
            <p>{el.price}</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
              style={{ height: "1rem", width: "1rem" }}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18"
              />
            </svg>
            <p>{el.amount}</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
              style={{ height: "1rem", width: "1rem" }}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75"
              />
            </svg>
          </div>
        );
      })}
    </>
  );
}

export default App;
