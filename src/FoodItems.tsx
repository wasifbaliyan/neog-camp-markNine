import * as React from "react";
import { Food } from "./App";

const FoodItem = React.lazy(() => import("./FoodItem"));

export default function FoodItems(props:{food: Food[]}) {
  return (
    <div className="menu">
      {props.food.map((f) => (
        <React.Suspense
          key={f.id}
          fallback={
            <div
              style={{
                color: "#777",
                height: "268px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              className="menu-item"
            >
              Loading...
            </div>
          }
        >
          <FoodItem key={f.id} item={f} />
        </React.Suspense>
      ))}
    </div>
  );
}
