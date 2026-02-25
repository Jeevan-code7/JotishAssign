import React, { useEffect, useState } from "react";
import { getEmployes } from "../services/api";
import { useNavigate } from "react-router-dom";

const List = () => {
  const [employeData, setEmployeData] = useState([]);

  const navigate = useNavigate();
  const EmployeHeading =
    "py-3 px-6 text-center border border-pink-300 dark:border-gray-600 bg-black text-white";
  useEffect(() => {
    getEmployes().then(setEmployeData);
  }, []);
  return (
    <>
      <div className="p-6">
        <div className="flex justify-between mb-4">
          <h1 className="text-2xl font-bold text-indigo-900">Employe List</h1>
          <div className="space-x-3">
            <button
              onClick={() => navigate("/chart")}
              className="bg-green-500 text-white px-4 py-2 rounded transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-orange-500 "
            >
              View Chart
            </button>
            <button
              onClick={() => navigate("/map")}
              className="bg-purple-500 text-white px-4 py-2 rounded transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 "
            >
              Employer city
            </button>
          </div>
        </div>
        <div className="bg-gray-100 p-8">
          <table className="table-auto min-w-full border-separate border-spacing-2 border border-gray-400 dark:border-gray-500">
            <thead>
              <tr className={EmployeHeading}>
                <th className={EmployeHeading}>Name</th>
                <th className={EmployeHeading}>Position</th>
                <th className={EmployeHeading}>Office</th>
                <th className={EmployeHeading}>Extn</th>
                <th className={EmployeHeading}>Start_Date</th>
                <th className={EmployeHeading}>Salary</th>
              </tr>
            </thead>
            <tbody>
              {employeData.map((emp, index) => (
                <tr
                  key={emp}
                  className="rounded shadow cursor-pointer hover:scale-105 transition bg-amber-200"
                  onClick={() => navigate(`/details`, { state: emp })}
                >
                  <td className="border border-gray-300 dark:border-gray-600 bg">
                    {emp[0]}
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600">
                    {emp[1]}
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600">
                    {emp[2]}
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600">
                    {emp[3]}
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600">
                    {emp[4]}
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600">
                    {emp[5]}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default List;
