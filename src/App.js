import Costs from "./components/Costs/Costs";
import NewCost from "./components/Costs/NewCost/NewCost";
import React, { useState } from "react";

const INITIAL_COSTS = [
  {
    id: "c1",
    date: new Date(2023, 2, 12),
    description: "Холодильник",
    price: 999.99,
  },
  {
    id: "c2",
    date: new Date(2023, 5, 1),
    description: "Кросовки",
    price: 73.51,
  },
  {
    id: "c3",
    date: new Date(2023, 0, 13),
    description: "Ноутбук",
    price: 2032.21,
  },
];
const App = () => {
  const [costs, setCosts] = useState(INITIAL_COSTS);

  const addCostHandler = (cost) => {
    setCosts((prevCosts) => {
      return [cost, ...prevCosts];
    });
  };
  return (
    <div>
      <NewCost onAddCost={addCostHandler} />
      <Costs costs={costs}></Costs>
    </div>
  );
};

export default App;
