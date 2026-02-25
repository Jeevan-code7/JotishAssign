import React, { useEffect, useState } from "react";
import { getEmployes } from "../services/api";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const ChartPage = () => {
  const [salary, setSalary] = useState([]);

  const data = [
    {
      name: "Garrett Winters",
      uv: 320800,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Ashton Cox",
      uv: 86000,
      pv: 4567,
      amt: 2400,
    },
    {
      name: "Cedric Kelly",
      uv: 433060,
      pv: 1398,
      amt: 2400,
    },
    {
      name: "Herrod Chandle",
      uv: 162700,
      pv: 9800,
      amt: 2400,
    },
    {
      name: "Colleen Hurst",
      uv: 372000,
      pv: 3908,
      amt: 2400,
    },
    {
      name: "Sonya Frost",
      uv: 103600,
      pv: 4800,
      amt: 2400,
    },
    {
      name: "Jena Gaines",
      uv: 90560,
      pv: 4800,
      amt: 2400,
    },
    {
      name: "Sonya Frost",
      uv: 103600,
      pv: 4800,
      amt: 2400,
    },
    {
      name: "Quinn Flynn",
      uv: 342000,
      pv: 4800,
      amt: 2400,
    },
    {
      name: "Charde Marshall",
      uv: 470600,
      pv: 4800,
      amt: 2400,
    },
    {
      name: "Haley Kennedy",
      uv: 313500,
      pv: 4800,
      amt: 2400,
    },
  ];

  const margin = {
    top: 20,
    right: 30,
    left: 20,
    bottom: 5,
  };
  useEffect(() => {
    getEmployes().then(setSalary);
  }, []);
  return (
    <>
      <h1 className="text-5xl bg-pink-400 text-gray-50 flex justify-center">
        Salaries of Employees
      </h1>
      <div className="h-screen flex justify-center items-center">
        <BarChart width={800} height={500} data={data} margin={margin}>
          <XAxis dataKey="name" stroke="#8884d8" />
          <YAxis
            domain={[0, 500000]}
            tickFormatter={(value) => `$${value.toLocaleString()}`}
          />
          <Tooltip wrapperStyle={{ width: 100, backgroundColor: "#ccc" }} />
          <Legend
            width={100}
            wrapperStyle={{
              top: 40,
              right: 20,
              backgroundColor: "#f5f5f5",
              border: "1px solid #d5d5d5",
              borderRadius: 3,
              lineHeight: "40px",
            }}
          />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <Bar dataKey="uv" fill="#8884d8" barSize={30} />
        </BarChart>
      </div>
    </>
  );
};

export default ChartPage;
