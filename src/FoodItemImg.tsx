import * as React from "react";
import { Food } from "./App";

export default function FoodItemImg({ item }: {item: Food}) {
  return <img src={item.location} alt={item.name} width={150} />;
}
