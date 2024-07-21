import { useEffect } from 'react';
import css from './WaterConsumptionChart.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  XAxis,
  YAxis,
  AreaChart,
  Area,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import {getWaterDataMonthly } from '../../redux/water/operations';
import { selectMonthlyWater } from '../../redux/water/selectors';

const WaterConsumptionChart = () => {
  const dispatch = useDispatch();
  const monthlyWaterData = useSelector(selectMonthlyWater);

  useEffect(() => {
    const currentDate = new Date();
    const month = currentDate.getMonth() + 1; // Месяц (от 1 до 12)
    const year = currentDate.getFullYear(); // Год
    dispatch(getWaterDataMonthly({ month, year, dailyNorma: 2000 })); // Примерный dailyNorma
  }, [dispatch]);

  const convertedData = (monthlyWaterData || []).map(item => ({
    date: new Date(item.date).getDate(), // Получаем день месяца
    totalConsumption: (item.arrDailyWater || []).reduce((sum, entry) => sum + entry.volume, 0) / 1000, // Суммируем объем за день и преобразуем в литры
  }));

  const CustomTooltip = ({ payload = [] }) => {
    if (payload && payload.length) {
      const totalVolume = payload[0].payload.totalConsumption * 1000; // Преобразуем обратно в миллилитры для отображения
      return (
        <div className={css.tooltip}>
          <p className="intro">{`${totalVolume} ml`}</p>
        </div>
      );
    }
    return null;
  };

  const maxY = Math.ceil(Math.max(...convertedData.map(item => item.totalConsumption)) / 0.5) * 0.5;

  const generateYAxisTicks = () => {
    const ticks = [];
    for (let i = 0; i <= maxY; i += 0.5) {
      ticks.push(i);
    }
    return ticks;
  };

  const formatYAxisTick = (tickItem) => {
    if (tickItem === 0) {
      return '0%';
    }
    return `${tickItem} L`;
  };

  return (
    <div style={{ width: '100%', height: '300px' }}>
      <ResponsiveContainer>
        <AreaChart
          data={convertedData}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorConsumption" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis
            dataKey="date"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12 }}
          />
          <YAxis
            ticks={generateYAxisTicks()}
            tickFormatter={formatYAxisTick}
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, dx: -10 }}
            domain={[0, maxY]}
          />
          <Tooltip content={<CustomTooltip />} />
          <Area
            type="monotone"
            dataKey="totalConsumption"
            stroke="#82ca9d"
            fillOpacity={1}
            fill="url(#colorConsumption)"
            dot={{
              stroke: '#82ca9d',
              strokeWidth: 1,
              fill: 'white',
              r: 10,
            }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default WaterConsumptionChart;

