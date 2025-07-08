import { useState } from "react";

export function Workload() {
  const [workHoursPerDay, setWorkHoursPerDay] = useState(8);
  const [workDaysPerWeek, setWorkDaysPerWeek] = useState(5);

  const weeklyWorkHours = workHoursPerDay * workDaysPerWeek;
  const monthlyWorkHours = Math.floor(weeklyWorkHours * 4.3);

  const handleClick = () => {
    const workHoursInput = document.querySelector(
      "input[name='workHoursPerDay']"
    ) as HTMLInputElement;
    const workDaysInput = document.querySelector(
      "input[name='workDaysPerWeek']"
    ) as HTMLInputElement;

    setWorkHoursPerDay(workHoursInput.valueAsNumber);
    setWorkDaysPerWeek(workDaysInput.valueAsNumber);

    workHoursInput.value = "";
    workDaysInput.value = "";
  };

  return (
    <div className="container">
      <form className="field m-1" onSubmit={(e) => e.preventDefault()}>
        <label className="label mt-1">Horas por dia</label>
        <input
          type="number"
          placeholder="ex. 8"
          className="input is-primary mb-4"
          name="workHoursPerDay"
        />
        <label className="label mt-1">dias por semana</label>
        <input
          type="number"
          placeholder="ex. 5"
          className="input is-primary mb-4"
          name="workDaysPerWeek"
        />
        <button className="button is-primary my-4" onClick={handleClick}>
          calcular
        </button>
      </form>
      <div className="notification">
        <p>
          ({workHoursPerDay}*{workDaysPerWeek})*4,3
        </p>
        <h4 className="title is-6">Horas por mês: {monthlyWorkHours}</h4>
      </div>
    </div>
  );
}
