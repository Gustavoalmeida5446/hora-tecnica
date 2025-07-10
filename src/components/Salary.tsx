import { useState, useEffect } from "react";
import { saveDesiredSalary } from "../Utils";

type Props = {
  desiredSalary: number;
  setDesiredSalary: React.Dispatch<React.SetStateAction<number>>;
};

export function Salary({ desiredSalary, setDesiredSalary }: Props) {
  const [showNotification, setShowNotification] = useState(false);

  const handleSalaryChange = (event: React.FormEvent) => {
    event.preventDefault();
    saveDesiredSalary(desiredSalary);
    localStorage.setItem("desiredSalary", JSON.stringify(desiredSalary));
    setShowNotification(true);
  };

  useEffect(() => {
    const stored = localStorage.getItem("desiredSalary");
    if (stored) {
      const parsed = JSON.parse(stored);
      setDesiredSalary(parsed || 0);
      setShowNotification(true);
    }
  }, []);

  return (
    <div className="section">
      <div className="container">
        <div className="columns">
          <div className="column is-half is-offset-one-quarter">
            <h3 className="title is-3 has-text-centered">Salário desejado</h3>
            <p className="mb-4">
              Informe quanto você deseja receber mensalmente como remuneração
              pelo seu trabalho. Esse valor será somado aos custos fixos para
              calcular o custo total mensal do seu trabalho. Este é o valor que
              você quer “tirar para você” no final do mês.
            </p>
            <form onSubmit={handleSalaryChange}>
              <div className="column">
                <label className="label">Salário desejado (R$)</label>
                <input
                  className="input"
                  type="number"
                  placeholder="Ex: 3000"
                  value={desiredSalary || ""}
                  onChange={(e) => setDesiredSalary(Number(e.target.value))}
                />
              </div>
              <div className="column">
                <button className="button is-link" type="submit">
                  Definir salário
                </button>
              </div>
            </form>
            {showNotification && (
              <div className="notification is-success mt-4">
                Você definiu um salário de <strong>{desiredSalary}</strong>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
