import { useState } from "react";
import { FixedCosts } from "./components/FixedCosts";
import { HourCalculation } from "./components/HourCalculation";
import { Profit } from "./components/Profit";
import { ProjectValue } from "./components/ProjectValue";
import { Salary } from "./components/Salary";
import { Workload } from "./components/Workload";
import { Hero } from "./components/Hero";
import "./Style.css";
import { Footer } from "./components/Footer";

type Cost = {
  id: number;
  description: string;
  cost: number;
};

function App() {
  const [desiredSalary, setDesiredSalary] = useState(0);
  const [desiredProfit, setDesiredProfit] = useState(0);
  const [projectDays, setProjectDays] = useState(0);
  const [monthlyWorkHours, setMonthlyWorkHours] = useState<number | null>(null);
  const [costs, setCosts] = useState<Cost[]>([]);
  const [variableCosts, setVariableCosts] = useState<Cost[]>([]);
  const [calculatedHourRate, setCalculatedHourRate] = useState(0);
  const [workHoursPerDay, setWorkHoursPerDay] = useState(0);
  const [workDaysPerWeek, setWorkDaysPerWeek] = useState(0);

  return (
    <>
      <Hero />

      <FixedCosts costs={costs} setCosts={setCosts} />

      <Salary
        desiredSalary={desiredSalary}
        setDesiredSalary={setDesiredSalary}
      />

      <Workload
        monthlyWorkHours={monthlyWorkHours}
        setMonthlyWorkHours={setMonthlyWorkHours}
        workHoursPerDay={workHoursPerDay}
        setWorkHoursPerDay={setWorkHoursPerDay}
        workDaysPerWeek={workDaysPerWeek}
        setWorkDaysPerWeek={setWorkDaysPerWeek}
      />

      <Profit
        desiredProfit={desiredProfit}
        setDesiredProfit={setDesiredProfit}
      />

      <HourCalculation
        fixedCosts={costs}
        desiredSalary={desiredSalary}
        desiredProfit={desiredProfit}
        monthlyWorkHours={monthlyWorkHours ?? 0}
        setCalculatedHourRate={setCalculatedHourRate}
        calculatedHourRate={calculatedHourRate}
      />

      <ProjectValue
        variableCosts={variableCosts}
        setVariableCosts={setVariableCosts}
        projectDays={projectDays}
        setProjectDays={setProjectDays}
        calculatedHourRate={calculatedHourRate}
        workHoursPerDay={workHoursPerDay}
      />

      <Footer />
    </>
  );
}

export default App;
