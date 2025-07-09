// type CostItem = {
//   description: string;
//   cost: number;
//   id: string;
// };

export function calculateMonthlyWorkload(  workHoursPerDay: number,
  workDaysPerWeek: number
): number {
  const weeksPerMonth = 4.3;
  return Math.floor(workHoursPerDay * workDaysPerWeek * weeksPerMonth);
}