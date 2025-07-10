import React, { useState, useEffect } from "react";
import {
  calculateTotalVariableCosts,
  saveProjectDays,
  calculateProjectValue,
} from "../Utils";

type VariableCost = {
  id: number;
  description: string;
  cost: number;
};

export function ProjectValue({
  variableCosts,
  setVariableCosts,
  projectDays,
  setProjectDays,
  calculatedHourRate,
  workHoursPerDay,
}: {
  variableCosts: VariableCost[];
  setVariableCosts: React.Dispatch<React.SetStateAction<VariableCost[]>>;
  projectDays: number;
  setProjectDays: React.Dispatch<React.SetStateAction<number>>;
  calculatedHourRate: number;
  workHoursPerDay: number;
}) {
  const [showNotification, setShowNotification] = useState(false);
  const [finalProjectValue, setFinalProjectValue] = useState(0);
  const [showProjectValueNotification, setShowProjectValueNotification] =
    useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const id = Date.now();
    const description = form.variableCostDescription.value;
    const cost = parseFloat(form.variableCostValue.value);

    const newCost = { id, description, cost };
    const updatedCosts = [...variableCosts, newCost];

    setVariableCosts(updatedCosts);
    localStorage.setItem("variableCosts", JSON.stringify(updatedCosts));

    form.reset();
  };

  const handleRemove = (id: number) => {
    const updatedCosts = variableCosts.filter((item) => item.id !== id);
    setVariableCosts(updatedCosts);
    localStorage.setItem("variableCosts", JSON.stringify(updatedCosts));
  };

  useEffect(() => {
    const storedVariableCosts = localStorage.getItem("variableCosts");
    const storedProjectDays = localStorage.getItem("projectDays");
    const storedFinalProjectValue = localStorage.getItem("finalProjectValue");
    if (storedVariableCosts && storedProjectDays) {
      const parsed = JSON.parse(storedVariableCosts);
      setVariableCosts(parsed || []);
      setProjectDays(Number(storedProjectDays));
      setFinalProjectValue(Number(storedFinalProjectValue));
      setShowNotification(true);
      setShowProjectValueNotification(true);
    }
  }, []);

  const handleProjectDays = (event: React.FormEvent) => {
    event.preventDefault();
    saveProjectDays(projectDays);
    localStorage.setItem("projectDays", JSON.stringify(projectDays));
    setShowNotification(true);
  };

  const handleCalculate = () => {
    const value = calculateProjectValue(
      calculatedHourRate,
      projectDays,
      workHoursPerDay,
      variableCosts
    );
    setFinalProjectValue(value);
    setShowProjectValueNotification(true);
    localStorage.setItem("finalProjectValue", value.toFixed(2));
  };

  return (
    <div className="section">
      <div className="container">
        <div className="columns">
          <div className="column is-half is-offset-one-quarter">
            <h3 className="title is-3 has-text-centered">
              Ajuste para projeto específico
            </h3>
            <p className="mb-4">
              Agora que você já sabe o valor da sua hora técnica, informe os
              custos variáveis do projeto, como materiais, deslocamento ou
              outras despesas, e também o prazo total. A calculadora usará esses
              dados para mostrar o preço final a ser cobrado.
            </p>

            <form onSubmit={handleProjectDays}>
              <div className="column">
                <label className="label">Prazo do projeto (em dias)</label>
                <input
                  className="input"
                  type="number"
                  placeholder="Ex: 15"
                  value={projectDays || ""}
                  onChange={(e) => setProjectDays(Number(e.target.value))}
                />
              </div>
              <div className="column">
                <button className="button is-link mb-4">
                  Definir prazo do projeto
                </button>
              </div>
            </form>

            <form onSubmit={handleSubmit}>
              <div className="columns is-vcentered is-multiline">
                <div className="column is-half">
                  <label className="label">Descrição do custo</label>
                  <input
                    className="input"
                    type="text"
                    placeholder="Ex: Transporte"
                    name="variableCostDescription"
                    required
                  />
                </div>
                <div className="column is-half">
                  <label className="label">Valor (R$)</label>
                  <input
                    className="input"
                    type="number"
                    placeholder="Ex: 300"
                    name="variableCostValue"
                    required
                    step="1"
                    min="0"
                  />
                </div>
                <div className="column">
                  <button className="button is-link">
                    Adicionar custo variável
                  </button>
                </div>
              </div>
            </form>

            <div className="box mt-4">
              <h4 className="title is-6">Custos variáveis</h4>
              <ul>
                {variableCosts.map((cost) => (
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
                <p>você definiu o prazo do projeto em {projectDays} dias</p>
                Total de custos variáveis:{" "}
                <strong>
                  R${calculateTotalVariableCosts(variableCosts).toFixed(2)}
                </strong>
              </div>
            )}
          </div>
          <div className="column">
            <button
              onClick={handleCalculate}
              className="button is-primary is-large mt-5 is-fullwidth"
            >
              Calcular valor do projeto
            </button>
          </div>

          {showProjectValueNotification && (
            <div className="notification is-primary mt-4">
              Valor final do projeto: R$ {finalProjectValue.toFixed(2)}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
