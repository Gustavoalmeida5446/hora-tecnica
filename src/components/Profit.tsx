import { useState, useEffect } from "react";
import { saveDesiredProfit } from "../Utils";

type Props = {
  desiredProfit: number;
  setDesiredProfit: React.Dispatch<React.SetStateAction<number>>;
  storageCleared: boolean;
  setStorageCleared: React.Dispatch<React.SetStateAction<boolean>>;
};

export function Profit({
  desiredProfit,
  setDesiredProfit,
  storageCleared,
  setStorageCleared,
}: Props) {
  const [showNotification, setShowNotification] = useState(false);

  const handleProfitChange = (event: React.FormEvent) => {
    event.preventDefault();
    saveDesiredProfit(desiredProfit);
    localStorage.setItem("desiredProfit", JSON.stringify(desiredProfit));
    setShowNotification(true);
  };

  useEffect(() => {
    if (storageCleared) {
      setDesiredProfit(0);
      setShowNotification(false);
      setStorageCleared(false);
    } else {
      const stored = localStorage.getItem("desiredProfit");
      if (stored) {
        const parsed = JSON.parse(stored);
        setDesiredProfit(parsed || 0);
        setShowNotification(true);
      }
    }
  }, [storageCleared]);

  return (
    <div className="section">
      <div className="container">
        <div className="columns">
          <div className="column is-half is-offset-one-quarter">
            <h3 className="title is-3 has-text-centered">Margem de lucro</h3>
            <p className="mb-4">
              A margem de lucro é o valor que você adiciona sobre os seus custos
              para ter ganho real. Sem ela, você só cobre despesas. O ideal é
              aplicar entre 20% e 40%, sendo 30% um bom ponto de partida.
              Informe a porcentagem de lucro que deseja adicionar sobre seus
              custos. Com base nisso, a calculadora mostrará quanto você deve
              cobrar por hora para cobrir os custos e obter o lucro desejado.
            </p>
            <form onSubmit={handleProfitChange}>
              <div className="column">
                <label className="label">Margem de lucro (%)</label>
                <input
                  className="input"
                  type="number"
                  placeholder="Ex: 30"
                  value={desiredProfit || ""}
                  onChange={(e) => {
                    setDesiredProfit(Number(e.target.value));
                  }}
                />
              </div>
              <div className="column">
                <button className="button is-link" type="submit">
                  Definir margem de lucro
                </button>
              </div>
            </form>
            {showNotification && (
              <div className="notification is-success mt-4">
                Você definiu a margem de lucro em{" "}
                <strong>{desiredProfit}%</strong>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
