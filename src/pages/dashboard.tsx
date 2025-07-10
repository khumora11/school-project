import { useState, useEffect } from "react";
import {
  LineChart,
  Line,

  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import OrdersLineChart from "../components/orderListChart/orderList";
import ListDashboard from "../components/listDashboard/listDashboard";
import AdminCategory from "../components/adminCategory/adminCategory";

const Dashboard = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  const stats = [
    { title: "Users", value: "1,243" },
    { title: "Orders", value: "320" },
    { title: "Revenue", value: "$12,430" },
    { title: "Pending", value: "23" },
  ];

  const chartData = [
    { name: "Yanvar", orders: 120 },
    { name: "Fevral", orders: 200 },
    { name: "Mart", orders: 180 },
    { name: "Aprel", orders: 250 },
    { name: "May", orders: 300 },
  ];

 

  return (
    <>
      <div className="flex">
        <AdminCategory />
        <div className="min-h-screen w-full flex bg-muted text-foreground transition-colors ">
          <div className="flex-1 flex flex-col mt-28">
            <main className="p-6 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((item, i) => (
                <div
                  key={i}
                  className="p-6 rounded-xl shadow bg-card text-card-foreground hover:scale-105 transition"
                >
                  <h4 className="text-sm text-muted-foreground">
                    {item.title}
                  </h4>
                  <p className="text-2xl font-bold">{item.value}</p>
                  <div className="w-full mt-4 bg-muted rounded-full h-2.5">
                    <div
                      className="bg-primary h-2.5 rounded-full"
                      style={{ width: `${(i + 1) * 20}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </main>

            <div className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-card rounded-xl shadow p-6">
                <h3 className="text-lg font-semibold mb-4">Foydalanuvchilar</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" stroke="currentColor" />
                    <YAxis stroke="currentColor" />
                    <Tooltip />
                    <Line
                      type="monotone"
                      dataKey="orders"
                      stroke="#1b4571"
                      strokeWidth={2}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <OrdersLineChart />
            </div>
            <ListDashboard />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
