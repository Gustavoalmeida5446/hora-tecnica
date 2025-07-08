type WorkloadProps = {
  workHoursPerDay: number;
  setWorkHoursPerDay: (value: number) => void;
  workDaysPerWeek: number;
  setWorkDaysPerWeek: (value: number) => void;
};

export function Workload({
  workHoursPerDay,
  setWorkHoursPerDay,
  workDaysPerWeek,
  setWorkDaysPerWeek,
}: WorkloadProps) {
  const monthlyWorkHours = Math.floor(workHoursPerDay * workDaysPerWeek * 4.3);

  const handleSave = () => {
    localStorage.setItem("workHoursPerDay", workHoursPerDay.toString());
    localStorage.setItem("workDaysPerWeek", workDaysPerWeek.toString());
  };

  return (
    <div className="container">
      <input
        type="number"
        value={workHoursPerDay}
        onChange={(e) => setWorkHoursPerDay(Number(e.target.value))}
        name="workHoursPerDay"
        className="input is-primary mb-4"
      />
      <input
        type="number"
        value={workDaysPerWeek}
        onChange={(e) => setWorkDaysPerWeek(Number(e.target.value))}
        name="workDaysPerWeek"
        className="input is-primary mb-4"
      />
      <button className="button is-primary my-4" onClick={handleSave}>
        Salvar
      </button>

      <h4>Horas por mês: {monthlyWorkHours}</h4>
    </div>
  );
}
