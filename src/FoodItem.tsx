import * as React from "react";
import { Food } from "./App";
const FoodItemImg = React.lazy(() => import("./FoodItemImg"));

export default function FoodItem({ item }:{item: Food}) {
  return (
    <div className="menu-item">
      <React.Suspense
        fallback={
          <div
            style={{ width: "150px", height: "187px", background: "#eee" }}
          ></div>
        }
      >
        <FoodItemImg item={item} />
      </React.Suspense>
      <h4 className="menu-heading">{item.name}</h4>
      <small className="menu-small">{item.rating}</small>
    </div>
  );
}
