import { useState } from "react";
import "../Style.css";

export function Custos() {
  type CostItem = {
    description: string;
    cost: number;
    id: string;
  };

  const [costs, setCosts] = useState<CostItem[]>([]);
  const [description, setDescription] = useState("");
  const [cost, setCost] = useState<number>(0);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const newCost = {
      description,
      cost,
      id: Date.now().toString(),
    };

    setCosts((prevCosts) => [...prevCosts, newCost]);
    setDescription("");
    setCost(0);
  };

  const handleRemove = (id: string) => {
    setCosts((prevCosts) => prevCosts.filter((item) => item.id !== id));
  };

  const totalFixedCosts = costs.reduce((acc, item) => acc + item.cost, 0);

  return (
    <div className="container">
      <form className="field m-1" onSubmit={handleSubmit}>
        <label className="label mt-1">Descrição</label>
        <input
          id="description"
          type="text"
          placeholder="ex. Aluguel"
          className="input is-primary mb-4"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <label className="label mt-1">Valor</label>
        <input
          id="cost"
          type="number"
          placeholder="200"
          className="input is-primary mb-4"
          name="cost"
          value={cost || ""}
          width="10px"
          onChange={(e) => setCost(parseFloat(e.target.value))}
        />
        <button type="submit" className="button is-primary my-4">
          adicionar
        </button>
      </form>

      <div className="notification">
        <ul>
          {costs.map((item) => (
            <li key={item.id} className="my-4">
              {item.description}: R$ {item.cost}
              <button
                className="delete is-small ml-2"
                onClick={() => handleRemove(item.id)}
              />
            </li>
          ))}
        </ul>

        <h4 className="title is-6">total: R$ {totalFixedCosts}</h4>
      </div>
    </div>
  );
}
