import React from "react";
import { BarChart, Bar } from "recharts";
import {
  ComposedChart,
  Line,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Scatter,
} from "recharts";

const Dashboard = () => {
  const data = [
    {
      name: "Mercedes-Benz",
      uv: 590,
      pv: 800,
      amt: 1400,
      cnt: 490,
    },
    {
      name: "Porsche",
      uv: 868,
      pv: 967,
      amt: 1506,
      cnt: 590,
    },
    {
      name: "Land Rover",
      uv: 1397,
      pv: 1098,
      amt: 989,
      cnt: 350,
    },
  ];
  return (
    <div className=" mt-16 sm:text-white md:text-black">
      <h2 className="text-center  text-3xl">
        Welcome to <span className="font-bold text-red-500">carBazar</span>{" "}
        Dashboard
      </h2>
      <div className=" md:flex md:justify-evenly items-center mt-10 text-center">
        <div className="mt-10">
          <ComposedChart
            width={500}
            height={400}
            data={data}
            margin={{
              top: 20,
              right: 20,
              bottom: 20,
              left: 20,
            }}
          >
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Area
              type="monotone"
              dataKey="amt"
              fill="#8884d8"
              stroke="#8884d8"
            />
            <Bar dataKey="pv" barSize={20} fill="#413ea0" />
            <Line type="monotone" dataKey="uv" stroke="#ff7300" />
            <Scatter dataKey="cnt" fill="red" />
          </ComposedChart>
          <h2 className=" font-semibold">
            Car Sealing Details By ALL Categories
          </h2>
        </div>
        <div>
          <div
            className="radial-progress text-red-500 mt-16"
            style={{
              "--value": "70",
              "--size": "12rem",
              "--thickness": "2rem",
            }}
          >
            70%
          </div>
          <h2 className=" font-semibold mt-24">Sealing Successfully</h2>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
