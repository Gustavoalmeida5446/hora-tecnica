export function calculateMonthlyWorkload(  workHoursPerDay: number,
  workDaysPerWeek: number
): number {
  const weeksPerMonth = 4.3;
  return Math.floor(workHoursPerDay * workDaysPerWeek * weeksPerMonth);
}

export function saveDesiredSalary(desiredSalary: number): number {
return desiredSalary
;}

export function saveDesiredProfit(desiredProfit: number): number {
return desiredProfit
;}

export function calculateTotalFixedCosts(costs: { cost: number }[]): number {
  return costs.reduce((acc, item) => acc + item.cost, 0);
}

export function calculateTotalVariableCosts(costs: { cost: number }[]): number {
  return costs.reduce((acc, item) => acc + item.cost, 0);
}


export function calculateBaseHourCost(
  totalFixedCosts: number,
  desiredSalary: number,
  monthlyWorkHours: number
): number {
  return (totalFixedCosts + desiredSalary) / monthlyWorkHours;
} 

export function calculateHourRate(
  totalFixedCosts: number,
  desiredSalary: number,
  monthlyWorkHours: number,
  desiredProfit: number
): number {
  const base = totalFixedCosts + desiredSalary;
  const profitMargin = 1 + desiredProfit / 100;
    return (base * profitMargin) / monthlyWorkHours;
  }

export function saveProjectDays(projectDays: number): number {
  return projectDays
;}

export function calculateProjectValue(
  hourRate: number,
  projectDays: number,
  workHoursPerDay: number,
  variableCosts: { cost: number }[]
): number {
  const totalHours = projectDays * workHoursPerDay;
  const totalVariableCosts = calculateTotalVariableCosts(variableCosts);
  return (hourRate * totalHours) + totalVariableCosts;
}
