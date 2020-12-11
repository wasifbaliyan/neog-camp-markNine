import { useState } from "react";
import "./App.css";

const foods = [
  {
    id: "01",
    type: "burger",
    rating: "9/10",
    location: "/images/burger-1.png",
    name: "Meat Burger",
  },
  {
    id: "02",
    type: "burger",
    rating: "9/10",
    location: "/images/burger-2.png",
    name: "Meat Burger",
  },
  {
    id: "03",
    type: "burger",
    rating: "9/10",
    location: "/images/burger-3.png",
    name: "Meat Burger",
  },
  {
    id: "04",
    type: "burger",
    rating: "9/10",
    location: "/images/burger-4.png",
    name: "Meat Burger",
  },
  {
    id: "05",
    type: "burger",
    rating: "9/10",
    location: "/images/burger-5.png",
    name: "Meat Burger",
  },
  {
    id: "06",
    type: "pizza",
    rating: "9/10",
    location: "/images/pizza-1.png",
    name: "Meat Pizza",
  },
  {
    id: "07",
    type: "pizza",
    rating: "9/10",
    location: "/images/pizza-2.png",
    name: "Meat Pizza",
  },
  {
    id: "08",
    type: "pizza",
    rating: "9/10",
    location: "/images/pizza-3.png",
    name: "Meat Pizza",
  },
  {
    id: "09",
    type: "pizza",
    rating: "9/10",
    location: "/images/pizza-4.png",
    name: "Meat Pizza",
  },
  {
    id: "10",
    type: "pizza",
    rating: "9/10",
    location: "/images/pizza-5.png",
    name: "Meat Pizza",
  },
  {
    id: "11",
    type: "salad",
    rating: "9/10",
    location: "/images/salad-1.png",
    name: "Meat Salad",
  },
  {
    id: "12",
    type: "salad",
    rating: "9/10",
    location: "/images/salad-2.png",
    name: "Meat Salad",
  },
  {
    id: "13",
    type: "salad",
    rating: "9/10",
    location: "/images/salad-3.png",
    name: "Meat Salad",
  },
  {
    id: "14",
    type: "salad",
    rating: "9/10",
    location: "/images/salad-4.png",
    name: "Meat Salad",
  },
  {
    id: "15",
    type: "salad",
    rating: "9/10",
    location: "/images/salad-5.png",
    name: "Meat Salad",
  },
];

function App() {
  const [food, setFood] = useState(foods);

  const handleClick = (type) => {
    if (type === "all") {
      return setFood(foods);
    }
    const newFood = foods.filter((f) => f.type === type);
    setFood(newFood);
  };

  return (
    <div className="App">
      <h1>FOOD Listing App</h1>
      <nav style={{ marginBottom: "1rem" }}>
        <button
          onClick={() => handleClick("all")}
          style={{
            padding: "10px 20px",
            margin: "0 0.5rem",
            color: "yellow",
            border: "1px solid yellow",
            background: "transparent",
            cursor: "pointer",
          }}
        >
          All Foods
        </button>
        <button
          onClick={() => handleClick("burger")}
          style={{
            padding: "10px 20px",
            margin: "0 0.5rem",
            color: "yellow",
            border: "1px solid yellow",
            background: "transparent",
            cursor: "pointer",
          }}
        >
          Burger
        </button>
        <button
          onClick={() => handleClick("pizza")}
          style={{
            padding: "10px 20px",
            margin: "0 0.5rem",
            color: "yellow",
            border: "1px solid yellow",
            background: "transparent",
            cursor: "pointer",
          }}
        >
          Pizza
        </button>
        <button
          onClick={() => handleClick("salad")}
          style={{
            padding: "10px 20px",
            margin: "0 0.5rem",
            color: "yellow",
            border: "1px solid yellow",
            background: "transparent",
            cursor: "pointer",
          }}
        >
          Salad
        </button>
      </nav>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          maxWidth: "60vw",
          margin: "0 auto",
        }}
      >
        {food.map((f) => (
          <div
            style={{
              width: "150px",
              border: "1px solid #777",
              background: "yellow",
              margin: "5px",
              paddingBottom: "5px",
            }}
            key={f.id}
          >
            <img src={f.location} alt={f.name} width={150} />
            <h4 style={{ color: "#555", margin: "0", paddingTop: "5px" }}>
              {f.name}
            </h4>
            <small style={{ color: "#777", margin: "0" }}>{f.rating}</small>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
