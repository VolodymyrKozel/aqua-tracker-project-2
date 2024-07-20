import css from './WaterConsumptionChart.module.css'
import {
  XAxis,
  YAxis,
  AreaChart,
  Area,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const WaterConsumptionChart = ({ data }) => {
  // Преобразуем данные для отображения на графике (литры)
  const convertedData = data.map(item => ({
    ...item,
    consumption: item.consumption / 1000 // Преобразование из мл в литры
  }));

  const CustomTooltip = ({ payload }) => {
    if (payload && payload.length) {
      // Получаем исходное значение в миллилитрах
      const valueInMilliliters = data.find(item => item.date === payload[0].payload.date).consumption;
      return (
        <div className={css.tooltip}>
          <p className="intro">{`${valueInMilliliters} ml`}</p> {/* Отображение в миллилитрах */}
        </div>
      );
    }
    return null;
  };
  
  const maxY = Math.ceil(Math.max(...convertedData.map(item => item.consumption)) / 0.5) * 0.5;

  const generateYAxisTicks = () => {
    const ticks = [];
    for (let i = 0; i <= maxY; i += 0.5) {
      ticks.push(i);
    }
    return ticks;
  };

  return (
    <div style={{ width: '100%', height: 400 }}>
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
          <XAxis dataKey="date" axisLine={false} tickLine={false} />
          <YAxis
            ticks={generateYAxisTicks()}
            tickFormatter={tickItem => `${tickItem} L`}
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, dx: -10 }}
            domain={[0, maxY]}
          />
          <Tooltip content={<CustomTooltip />} />
          <Area
            type="monotone"
            dataKey="consumption"
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
