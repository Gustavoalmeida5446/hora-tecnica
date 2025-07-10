import { useState, useEffect } from "react";
import {
  calculateTotalFixedCosts,
  calculateBaseHourCost,
  calculateHourRate,
} from "../Utils";

type Props = {
  fixedCosts: { cost: number }[];
  desiredSalary: number;
  monthlyWorkHours: number;
  desiredProfit: number;
  calculatedHourRate: number;
  setCalculatedHourRate: React.Dispatch<React.SetStateAction<number>>;
  storageCleared: boolean;
  setStorageCleared: React.Dispatch<React.SetStateAction<boolean>>;
};

export function HourCalculation({
  fixedCosts,
  desiredSalary,
  monthlyWorkHours,
  desiredProfit,
  calculatedHourRate,
  setCalculatedHourRate,
  storageCleared,
  setStorageCleared,
}: Props) {
  const [calculatedCost, setCalculatedCost] = useState(0);
  const [showNotification, setShowNotification] = useState(false);

  const handleCalculate = () => {
    const totalFixed = calculateTotalFixedCosts(fixedCosts);
    const cost = calculateBaseHourCost(
      totalFixed,
      desiredSalary,
      monthlyWorkHours
    );
    setCalculatedCost(cost);
    const hourRate = calculateHourRate(
      totalFixed,
      desiredSalary,
      monthlyWorkHours,
      desiredProfit
    );
    setCalculatedHourRate(hourRate);
    setShowNotification(true);
    localStorage.setItem("calculatedHourRate", hourRate.toFixed(2).toString());
    localStorage.setItem("calculatedCost", cost.toFixed(2).toString());
  };
  useEffect(() => {
    if (storageCleared) {
      setCalculatedHourRate(0);
      setCalculatedCost(0);
      setShowNotification(false);
      setStorageCleared(false);
    } else {
      const storedHourRate = localStorage.getItem("calculatedHourRate");
      const storedCost = localStorage.getItem("calculatedCost");
      if (storedHourRate && storedCost) {
        setCalculatedHourRate(Number(storedHourRate));
        setCalculatedCost(Number(storedCost));
        setShowNotification(true);
      }
    }
  }, [storageCleared]);

  return (
    <div className="section">
      <div className="container">
        <div className="columns">
          <div className="column is-half is-offset-one-quarter">
            <h3 className="title is-3 has-text-centered">
              Resultado do cálculo
            </h3>
            <p className="mb-4">
              Após adicionar todas as informações e custos, clique em Calcular
              hora técnica. A calculadora vai mostrar o valor ideal da sua hora
              de trabalho, assim você saberá quanto cobrar para cobrir seus
              gastos e garantir o lucro desejado.
            </p>
            <div className="column">
              <button
                onClick={handleCalculate}
                className="button is-primary is-large mt-5 is-fullwidth"
              >
                Calcular hora técnica
              </button>
            </div>
            {showNotification && (
              <div className="notification is-success mt-5">
                <p className="title is-4 has-text-centered has-text-weight-normal	">
                  Sua hora técnica é:{" "}
                  <strong className="has-text-weight-bold">
                    R${calculatedHourRate.toFixed(2)}
                  </strong>
                </p>
                <p>
                  Seu custo por hora é{" "}
                  <strong>R${calculatedCost?.toFixed(2)}</strong>. Isso é o que
                  você gasta pra trabalhar, incluindo seus custos fixos e o
                  salário que quer receber. Com a margem de lucro aplicada, o
                  valor ideal a ser cobrado é R${calculatedHourRate.toFixed(2)}.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
