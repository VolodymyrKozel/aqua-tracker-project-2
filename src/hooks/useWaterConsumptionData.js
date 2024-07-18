import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectWeeklyWaterConsumption } from '../redux/water/waterSelectors.js';

const useWaterConsumptionData = () => {
  const [data, setData] = useState([]);
  const weeklyData = useSelector(selectWeeklyWaterConsumption);

  useEffect(() => {
    if (weeklyData) {
      const formattedData = weeklyData.map(item => ({
        date: item.date,
        consumption: item.consumption,
      }));
      setData(formattedData);
    }
  }, [weeklyData]);

  return data;
};

export default useWaterConsumptionData;
