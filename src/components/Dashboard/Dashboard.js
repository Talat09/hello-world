import React from "react";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <h1 className="font-bold text-4xl text-center text-primary mt-6">
        Hello World!
      </h1>
      <Outlet></Outlet>
    </div>
  );
};

export default Dashboard;
