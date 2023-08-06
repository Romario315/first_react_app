import Costs from "./components/Costs/Costs";
import NewCost from "./components/Costs/NewCost/NewCost";

const App = () => {
  const costs = [
    {
      date: new Date(2023, 2, 12),
      description: "Холодильник",
      price: 999.99,
    },
    {
      date: new Date(2023, 5, 1),
      description: "Кросовки",
      price: 73.51,
    },
    {
      date: new Date(2023, 0, 13),
      description: "Ноутбук",
      price: 2032.21,
    },
  ];
  return (
    <div>
      <NewCost></NewCost>
      <Costs costs={costs}></Costs>
    </div>
  );
};

export default App;
