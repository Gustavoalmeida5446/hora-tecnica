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
import { ClearLocalStorage } from "./components/ClearLocalStorage";

type Cost = {
  id: number;
  description: string;
  cost: number;
};

function App() {
  const [storageCleared, setStorageCleared] = useState(false);
  const [desiredSalary, setDesiredSalary] = useState(0);
  const [desiredProfit, setDesiredProfit] = useState(0);
  const [projectDays, setProjectDays] = useState(0);
  const [monthlyWorkHours, setMonthlyWorkHours] = useState(0);
  const [costs, setCosts] = useState<Cost[]>([]);
  const [variableCosts, setVariableCosts] = useState<Cost[]>([]);
  const [calculatedHourRate, setCalculatedHourRate] = useState(0);
  const [workHoursPerDay, setWorkHoursPerDay] = useState(0);
  const [workDaysPerWeek, setWorkDaysPerWeek] = useState(0);

  return (
    <>
      <Hero />

      <ClearLocalStorage setStorageCleared={setStorageCleared} />

      <FixedCosts
        costs={costs}
        setCosts={setCosts}
        storageCleared={storageCleared}
        setStorageCleared={setStorageCleared}
      />

      <Salary
        desiredSalary={desiredSalary}
        setDesiredSalary={setDesiredSalary}
        storageCleared={storageCleared}
        setStorageCleared={setStorageCleared}
      />

      <Workload
        monthlyWorkHours={monthlyWorkHours}
        setMonthlyWorkHours={setMonthlyWorkHours}
        workHoursPerDay={workHoursPerDay}
        setWorkHoursPerDay={setWorkHoursPerDay}
        workDaysPerWeek={workDaysPerWeek}
        setWorkDaysPerWeek={setWorkDaysPerWeek}
        storageCleared={storageCleared}
        setStorageCleared={setStorageCleared}
      />

      <Profit
        desiredProfit={desiredProfit}
        setDesiredProfit={setDesiredProfit}
        storageCleared={storageCleared}
        setStorageCleared={setStorageCleared}
      />

      <HourCalculation
        fixedCosts={costs}
        desiredSalary={desiredSalary}
        desiredProfit={desiredProfit}
        monthlyWorkHours={monthlyWorkHours ?? 0}
        setCalculatedHourRate={setCalculatedHourRate}
        calculatedHourRate={calculatedHourRate}
        storageCleared={storageCleared}
        setStorageCleared={setStorageCleared}
      />

      <ProjectValue
        variableCosts={variableCosts}
        setVariableCosts={setVariableCosts}
        projectDays={projectDays}
        setProjectDays={setProjectDays}
        calculatedHourRate={calculatedHourRate}
        workHoursPerDay={workHoursPerDay}
        storageCleared={storageCleared}
        setStorageCleared={setStorageCleared}
      />

      <Footer />
    </>
  );
}

export default App;
