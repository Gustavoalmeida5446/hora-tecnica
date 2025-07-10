import { useState, useEffect } from "react";
import { calculateTotalFixedCosts } from "../Utils";

type Cost = {
  id: number;
  description: string;
  cost: number;
};

type Props = {
  costs: Cost[];
  setCosts: React.Dispatch<React.SetStateAction<Cost[]>>;
  storageCleared: boolean;
  setStorageCleared: React.Dispatch<React.SetStateAction<boolean>>;
};

export function FixedCosts({
  costs,
  setCosts,
  storageCleared,
  setStorageCleared,
}: Props) {
  const [showNotification, setShowNotification] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const id = Date.now();
    const description = form.fixedCostDescription.value;
    const cost = parseFloat(form.fixedCostValue.value);
    setCosts((prev) => [...prev, { id, description, cost }]);

    calculateTotalFixedCosts(costs);
    localStorage.setItem(
      "fixedCosts",
      JSON.stringify([...costs, { id, description, cost }])
    );
    form.fixedCostDescription.value = "";
    form.fixedCostValue.value = "";

    form.reset();

    setShowNotification(true);
  };

  const handleRemove = (id: number) => {
    setCosts((prev) => prev.filter((item) => item.id !== id));
    const updatedCosts = costs.filter((item) => item.id !== id);
    localStorage.setItem("fixedCosts", JSON.stringify(updatedCosts));
  };

  useEffect(() => {
    if (storageCleared) {
      setCosts([]);
      setShowNotification(false);
      setStorageCleared(false);
    } else {
      const stored = localStorage.getItem("fixedCosts");
      if (stored) {
        const parsed = JSON.parse(stored);
        setCosts(parsed || []);
        setShowNotification(true);
      }
    }
  }, [storageCleared]);

  return (
    <div className="section">
      <div className="container">
        <div className="columns">
          <div className="column is-half is-offset-one-quarter">
            <h3 className="title is-3 has-text-centered">Custos fixos</h3>
            <p className="mb-4">
              Adicione aqui os seus custos fixos mensais. Custos fixos são
              despesas que você tem todo mês, independentemente da quantidade de
              trabalho ou projetos realizados. Eles não variam com a sua
              produção. Exemplos comuns de custos fixos incluem: aluguel do
              escritório ou da casa, conta de internet, energia elétrica,
              assinaturas de softwares como Adobe ou Figma, e serviços como
              contador ou MEI.
            </p>
            <form onSubmit={handleSubmit}>
              <div className="columns is-vcentered is-multiline">
                <div className="column is-half">
                  <label className="label">Descrição do custo</label>
                  <input
                    className="input"
                    type="text"
                    placeholder="Ex: Aluguel"
                    name="fixedCostDescription"
                    required
                  />
                </div>
                <div className="column is-half">
                  <label className="label">Valor mensal (R$)</label>
                  <input
                    className="input"
                    type="number"
                    placeholder="Ex: 1200"
                    name="fixedCostValue"
                    required
                    step="1"
                    min="0"
                  />
                </div>
                <div className="column">
                  <button className="button is-link ">
                    Adicionar custo fixo
                  </button>
                </div>
              </div>
            </form>
            <div className="box mt-4">
              <h4 className="title is-6">Custos fixos mensais</h4>
              <ul>
                {costs.map((cost) => (
                  <li className="tag is-medium m-2" key={cost.id}>
                    {cost.description}: R$ {cost.cost.toFixed(2)}
                    <button
                      className="delete is-small ml-2"
                      onClick={() => handleRemove(cost.id)}
                    ></button>
                  </li>
                ))}
              </ul>
            </div>
            {showNotification && (
              <div className="notification is-success">
                Total de custos fixos:{" "}
                <strong>R${calculateTotalFixedCosts(costs).toFixed(2)}</strong>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
