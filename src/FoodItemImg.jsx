import React from "react";

export default function FoodItemImg({ item }) {
  return <img src={item.location} alt={item.name} width={150} />;
}
