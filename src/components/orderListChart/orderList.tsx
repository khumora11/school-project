import {
  ResponsiveContainer,
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const chartData = [
  { name: "Yanvar", orders: 120 },
  { name: "Fevral", orders: 200 },
  { name: "Mart", orders: 180 },
  { name: "Aprel", orders: 250 },
  { name: "May", orders: 300 },
];

const OrderListChart = () => {
  return (
    <div className="bg-card rounded-xl shadow p-6">
      <h3 className="text-lg font-semibold mb-4">
        📈 Oylik Foydalanuvchilar (Area)
      </h3>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={chartData}>
          <defs>
            <linearGradient id="colorOrders" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#1b4571" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#1b4571" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" stroke="currentColor" />
          <YAxis stroke="currentColor" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="orders"
            stroke="#1b4571"
            fillOpacity={1}
            fill="url(#colorOrders)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default OrderListChart;
