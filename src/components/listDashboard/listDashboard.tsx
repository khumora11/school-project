import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { motion, AnimatePresence } from "framer-motion";
const ListDashboard = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  const chartData = [
    { name: "Yanvar", orders: 120 },
    { name: "Fevral", orders: 200 },
    { name: "Mart", orders: 180 },
    { name: "Aprel", orders: 250 },
    { name: "May", orders: 300 },
  ];

  return (
    <div>
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-green-100 dark:bg-green-900"
          >
            <div className="text-center p-8 rounded-xl shadow-xl bg-white dark:bg-gray-800">
              <h1 className="text-3xl font-bold text-green-700 dark:text-green-300 mb-2">
                Xush kelibsiz, Admin!
              </h1>
              
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="p-6">
        <div className="bg-card rounded-xl shadow p-6">
          <h3 className="text-lg font-semibold mb-4">
            Oylik Foydalanuvchilar
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" stroke="currentColor" />
              <YAxis stroke="currentColor" />
              <Tooltip />
              <Bar dataKey="orders" fill="#1b4571" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default ListDashboard;
