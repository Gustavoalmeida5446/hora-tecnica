import { useState, useEffect } from "react";
import { calculateMonthlyWorkload } from "../Utils";

type Props = {
  monthlyWorkHours: number | null;
  setMonthlyWorkHours: React.Dispatch<React.SetStateAction<number | null>>;
  workHoursPerDay: number;
  setWorkHoursPerDay: React.Dispatch<React.SetStateAction<number>>;
  workDaysPerWeek: number;
  setWorkDaysPerWeek: React.Dispatch<React.SetStateAction<number>>;
};

export function Workload({
  monthlyWorkHours,
  setMonthlyWorkHours,
  workHoursPerDay,
  setWorkHoursPerDay,
  workDaysPerWeek,
  setWorkDaysPerWeek,
}: Props) {
  const [showNotification, setShowNotification] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const totalHours = calculateMonthlyWorkload(
      workHoursPerDay,
      workDaysPerWeek
    );
    setMonthlyWorkHours(totalHours);

    localStorage.setItem(
      "workload",
      JSON.stringify({
        hoursPerDay: workHoursPerDay,
        daysPerWeek: workDaysPerWeek,
        monthlyWorkload: totalHours,
      })
    );
    setShowNotification(true);
  };

  useEffect(() => {
    const stored = localStorage.getItem("workload");
    if (stored) {
      const parsed = JSON.parse(stored);
      setWorkHoursPerDay(parsed.hoursPerDay);
      setWorkDaysPerWeek(parsed.daysPerWeek);
      setMonthlyWorkHours(parsed.monthlyWorkload);
      setShowNotification(true);
    }
  }, []);

  return (
    <div className="section">
      <div className="container">
        <div className="columns">
          <div className="column is-half is-offset-one-quarter">
            <h3 className="title is-3 has-text-centered">
              Carga horária disponível
            </h3>
            <p className="mb-4">
              Informe quantas horas você trabalha por dia e quantos dias por
              semana costuma trabalhar. A calculadora usará esses dados para
              estimar sua carga horária mensal, considerando uma média de 4,3
              semanas por mês (valor aproximado da divisão das 52 semanas do ano
              pelos 12 meses.)
            </p>
            <form onSubmit={handleSubmit}>
              <div className="columns is-vcentered is-multiline">
                <div className="column is-half">
                  <label className="label">Horas por dia</label>
                  <input
                    className="input"
                    type="number"
                    placeholder="Ex: 8"
                    min="1"
                    max="24"
                    value={workHoursPerDay || ""}
                    onChange={(e) =>
                      setWorkHoursPerDay(Math.min(Number(e.target.value), 24))
                    }
                  />
                </div>
                <div className="column is-half">
                  <label className="label">Dias por semana</label>
                  <input
                    className="input"
                    type="number"
                    placeholder="Ex: 5"
                    min="1"
                    max="7"
                    step="1"
                    size={1}
                    value={workDaysPerWeek || ""}
                    onChange={(e) =>
                      setWorkDaysPerWeek(Math.min(Number(e.target.value), 7))
                    }
                  />
                </div>
                <div className="column">
                  <button className="button is-link">
                    Definir carga horária
                  </button>
                </div>
              </div>
            </form>
            {showNotification && (
              <div className="notification is-success mt-4">
                Você definiu uma jornada de <strong>{workHoursPerDay}</strong>{" "}
                horas por dia, <strong>{workDaysPerWeek}</strong> dias por
                semana. <br />
                Total mensal: <strong>{monthlyWorkHours} horas</strong>.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
