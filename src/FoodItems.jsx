import React, { Suspense } from "react";
const FoodItem = React.lazy(() => import("./FoodItem"));

export default function FoodItems({ food }) {
  return (
    <div className="menu">
      {food.map((f) => (
        <Suspense
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
        </Suspense>
      ))}
    </div>
  );
}
