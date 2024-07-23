import { useEffect, useState } from 'react';
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
import { getWaterDataMonthly } from '../../redux/water/operations';
import { selectMonthlyWater } from '../../redux/water/selectors';
import { selectDailyNorma } from '../../redux/users/selectors';
import Loader from '../shared/Loader/Loader';

const WaterConsumptionChart = () => {
  const dispatch = useDispatch();
  const monthlyWaterData = useSelector(selectMonthlyWater);
  const dailyNorma = useSelector(selectDailyNorma); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const currentDate = new Date();
        const month = currentDate.getMonth() + 1;
        const year = currentDate.getFullYear();
        await dispatch(getWaterDataMonthly({ month, year, dailyNorma }));
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [dispatch, dailyNorma]);

  const dataForChart = (monthlyWaterData || [])
    .map(item => ({
      date: item.dayOfMonth,
      totalConsumption: (item.percentage / 100) * dailyNorma / 1000, 
    }))
    .filter(item => item.totalConsumption > 0);

    const CustomTooltip = ({ payload = [] }) => {
      if (payload && payload.length) {
        const totalVolume = Math.round(payload[0].payload.totalConsumption * 1000); 
        return (
          <div className={css.tooltip}>
            <p className="intro">{`${totalVolume} ml`}</p>
          </div>
        );
      }
      return null;
    };
  const maxY = Math.max(...dataForChart.map(item => item.totalConsumption), 0);

  const generateYAxisTicks = () => {
    const ticks = [];
    for (let i = 0; i <= maxY; i += 0.5) {
      ticks.push(i);
    }
    return ticks;
  };

  const formatYAxisTick = (tickItem) => {
    if (tickItem === 0) {
      return '0 L';
    }
    return `${tickItem} L`;
  };

  return (
    <div style={{ width: '100%', height: '300px' }}>
      {loading ? (
        <Loader variant="center" />
      ) : error ? (
        <p>Error loading data: {error.message}</p>
      ) : (
        <ResponsiveContainer>
  
          <AreaChart
            data={dataForChart}
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
      )}
    </div>
  );
};

export default WaterConsumptionChart;
