import {
  XAxis,
  YAxis,
//   CartesianGrid,
//   Tooltip,
  AreaChart,
//   ReferenceLine,
  Area,
//   CartesianGrid,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts';


const WaterConsumptionChart = ({ data }) => {
    
  const formatYAxis = (tickItem) => {
    return `${tickItem} L`;
  };

  const formatTooltip = (value) => {
    return `${value} L`;
  };
  return (
    <div style={{ width: '100%', height: 400 }}>
      <ResponsiveContainer>
        <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="colorConsumption" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <XAxis dataKey="date" />
          <YAxis tickFormatter={formatYAxis}/>
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip formatter={formatTooltip}/>
          <Area type="monotone" dataKey="consumption" stroke="#82ca9d" fillOpacity={1} fill="url(#colorConsumption)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>

  );
};

export default WaterConsumptionChart;

