import { useState } from "react";

type ProfitProps = {
  totalFixedCosts: number;
  monthlyWorkHours: number; // tirou o ?
};

export function Profit({ totalFixedCosts, monthlyWorkHours }: ProfitProps) {
  const hourCost = totalFixedCosts / monthlyWorkHours;

  const [profitPercentage, setProfitPercentage] = useState<number>(0);
  const [finalHourValue, setFinalHourValue] = useState<number | null>(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const hourValue = hourCost * (1 + profitPercentage / 100);
    setFinalHourValue(hourValue);
  };

  return (
    <>
      <input
        type="number"
        placeholder="ex. 20"
        name="profitPercentage"
        onChange={(e) => setProfitPercentage(parseFloat(e.target.value))}
      />
      <button className="button" onClick={handleSubmit}>
        calcular
      </button>

      <p>Custo/hora base: R$ {hourCost.toFixed(2)}</p>
      {finalHourValue !== null && (
        <p>Hora com lucro: R$ {finalHourValue.toFixed(2)}</p>
      )}
    </>
  );
}
