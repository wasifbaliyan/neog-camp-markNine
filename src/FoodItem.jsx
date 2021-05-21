import React, { Suspense } from "react";
const FoodItemImg = React.lazy(() => import("./FoodItemImg"));

export default function FoodItem({ item }) {
  return (
    <div className="menu-item">
      <Suspense
        fallback={
          <div
            style={{ width: "150px", height: "187px", background: "#eee" }}
          ></div>
        }
      >
        <FoodItemImg item={item} />
      </Suspense>
      <h4 className="menu-heading">{item.name}</h4>
      <small className="menu-small">{item.rating}</small>
    </div>
  );
}
