import React from "react";

export default function FoodItem({ item }) {
  return (
    <div className="menu-item">
      <img src={item.location} alt={item.name} width={150} />
      <h4 className="menu-heading">{item.name}</h4>
      <small className="menu-small">{item.rating}</small>
    </div>
  );
}
