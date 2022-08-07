import * as React from "react";
import "./App.css";
const FoodItems = React.lazy(() => import("./FoodItems"));


export type Food = {
  id: string,
  type: string,rating: string,
  location: string,
  name: string
}

const foods:Food[] = [
  {
    id: "01",
    type: "burger",
    rating: "7.5/10",
    location: "/images/burger-1.jpg",
    name: "Veggie Burger",
  },
  {
    id: "02",
    type: "burger",
    rating: "6/10",
    location: "/images/burger-2.jpg",
    name: "Black Bean Burger",
  },
  {
    id: "03",
    type: "burger",
    rating: "9.5/10",
    location: "/images/burger-3.jpg",
    name: "Wild Salmon Burger",
  },
  {
    id: "04",
    type: "burger",
    rating: "8/10",
    location: "/images/burger-4.jpg",
    name: "Cheese Burger",
  },
  {
    id: "05",
    type: "burger",
    rating: "7.5/10",
    location: "/images/burger-5.jpg",
    name: "Turkey Burger",
  },
  {
    id: "06",
    type: "pizza",
    rating: "6/10",
    location: "/images/pizza-1.jpg",
    name: "Pepperoni Pizza",
  },
  {
    id: "07",
    type: "pizza",
    rating: "9.5/10",
    location: "/images/pizza-2.jpg",
    name: "Margherita Pizza",
  },
  {
    id: "08",
    type: "pizza",
    rating: "8/10",
    location: "/images/pizza-3.jpg",
    name: "BBQ Chicken Pizza",
  },
  {
    id: "09",
    type: "pizza",
    rating: "7.5/10",
    location: "/images/pizza-4.jpg",
    name: "Hawaiian Pizza",
  },
  {
    id: "10",
    type: "pizza",
    rating: "6/10",
    location: "/images/pizza-5.jpg",
    name: "Mexican Green Wave Pizza",
  },
  {
    id: "11",
    type: "salad",
    rating: "4.5/10",
    location: "/images/salad-1.jpg",
    name: "Waldorf salad Salad",
  },
  {
    id: "12",
    type: "salad",
    rating: "7/10",
    location: "/images/salad-2.jpg",
    name: "Dressed Herring Salad",
  },
  {
    id: "13",
    type: "salad",
    rating: "8.5/10",
    location: "/images/salad-3.jpg",
    name: "Nicoise Salad",
  },
  {
    id: "14",
    type: "salad",
    rating: "8.5/10",
    location: "/images/salad-4.jpg",
    name: "Israeli Salad",
  },
  {
    id: "15",
    type: "salad",
    rating: "9.5/10",
    location: "/images/salad-5.jpg",
    name: "Mexican Black Bean  Salad",
  },
];

function App() {
  const [food, setFood] = React.useState(foods);
  const handleChange = (query:string) => {
    const filtered = foods.filter((f) =>
      f.name.toLowerCase().includes(query.toLowerCase())
    );
    setFood(filtered);
  };
  const handleClick = (type:string) => {
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
          onChange={(e) => handleChange(e.target.value)}
          placeholder="Search by item name"
          type="search"
        />
      </div>
      <React.Suspense fallback={<div style={{ color: "#fff" }}>Loading...</div>}>
        <FoodItems food={food} />
      </React.Suspense>
      <footer className="footer">
        <small>&copy; MyFood {new Date().getFullYear()}</small>
      </footer>
    </div>
  );
}

export default App;
