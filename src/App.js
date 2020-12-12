import { useState } from "react";
import "./App.css";

const foods = [
  {
    id: "01",
    type: "burger",
    rating: "7.5/10",
    location: "/images/burger-1.png",
    name: "Veggie Burger",
  },
  {
    id: "02",
    type: "burger",
    rating: "6/10",
    location: "/images/burger-2.png",
    name: "Black Bean Burger",
  },
  {
    id: "03",
    type: "burger",
    rating: "9.5/10",
    location: "/images/burger-3.png",
    name: "Wild Salmon Burger",
  },
  {
    id: "04",
    type: "burger",
    rating: "8/10",
    location: "/images/burger-4.png",
    name: "Cheese Burger",
  },
  {
    id: "05",
    type: "burger",
    rating: "7.5/10",
    location: "/images/burger-5.png",
    name: "Turkey Burger",
  },
  {
    id: "06",
    type: "pizza",
    rating: "6/10",
    location: "/images/pizza-1.png",
    name: "Pepperoni Pizza",
  },
  {
    id: "07",
    type: "pizza",
    rating: "9.5/10",
    location: "/images/pizza-2.png",
    name: "Margherita Pizza",
  },
  {
    id: "08",
    type: "pizza",
    rating: "8/10",
    location: "/images/pizza-3.png",
    name: "BBQ Chicken Pizza",
  },
  {
    id: "09",
    type: "pizza",
    rating: "7.5/10",
    location: "/images/pizza-4.png",
    name: "Hawaiian Pizza",
  },
  {
    id: "10",
    type: "pizza",
    rating: "6/10",
    location: "/images/pizza-5.png",
    name: "Mexican Green Wave Pizza",
  },
  {
    id: "11",
    type: "salad",
    rating: "4.5/10",
    location: "/images/salad-1.png",
    name: "Waldorf salad Salad",
  },
  {
    id: "12",
    type: "salad",
    rating: "7/10",
    location: "/images/salad-2.png",
    name: "Dressed Herring Salad",
  },
  {
    id: "13",
    type: "salad",
    rating: "8.5/10",
    location: "/images/salad-3.png",
    name: "Nicoise Salad",
  },
  {
    id: "14",
    type: "salad",
    rating: "8.5/10",
    location: "/images/salad-4.png",
    name: "Israeli Salad",
  },
  {
    id: "15",
    type: "salad",
    rating: "9.5/10",
    location: "/images/salad-5.png",
    name: "Mexican Black Bean  Salad",
  },
];

function App() {
  const [food, setFood] = useState(foods);
  const handleChange = (e) => {
    const filtered = foods.filter((f) =>
      f.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFood(filtered);
  };
  const handleClick = (type) => {
    if (type === "all") {
      return setFood(foods);
    }
    const newFood = foods.filter((f) => f.type === type);
    setFood(newFood);
  };

  return (
    <div className="App">
      <h1>MyFood 🍔 Menu App</h1>
      <nav className="nav">
        <button className="btn" onClick={() => handleClick("all")}>
          All Foods
        </button>
        <button className="btn" onClick={() => handleClick("burger")}>
          Burgers
        </button>
        <button className="btn" onClick={() => handleClick("pizza")}>
          Pizzas
        </button>
        <button className="btn" onClick={() => handleClick("salad")}>
          Salads
        </button>
      </nav>
      <div className="input-section">
        <input
          className="input"
          onChange={handleChange}
          placeholder="Search by item name"
          type="search"
        />
      </div>
      <div className="menu">
        {food.map((f) => (
          <div className="menu-item" key={f.id}>
            <img src={f.location} alt={f.name} width={150} />
            <h4 className="menu-heading">{f.name}</h4>
            <small className="menu-small">{f.rating}</small>
          </div>
        ))}
      </div>
      <footer className="footer">
        <small>&copy; MyFood {new Date().getFullYear()}</small>
      </footer>
    </div>
  );
}

export default App;
