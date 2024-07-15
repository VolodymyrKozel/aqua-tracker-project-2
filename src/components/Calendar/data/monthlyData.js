export const generateMonthlyData = () => {const monthlyData = [];
  const year = 2024; // поточний рік
  const month = 6; // липень (місяці в JavaScript нумеруються з 0, тому липень = 6)
  
  for (let day = 1; day <= 31; day++) {
    const date = new Date(year, month, day);
    const value = `${Math.floor(Math.random() * 101)}%`;
    monthlyData.push({ day: date, value: value });
  }
return monthlyData;
};