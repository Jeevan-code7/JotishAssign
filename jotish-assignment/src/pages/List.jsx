import React, { useEffect, useState } from "react";
import { getEmployes } from "../services/api";
import { useNavigate } from "react-router-dom";
const List = () => {
  const [employeData, setEmployeData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    getEmployes().then(setEmployeData);
  }, []);
  return (
    <>
      <div className="p-6">
        <div className="flex justify-between mb-4">
          <h1 className="text-2xl font-bold">Employee List</h1>
          <div className="space-x-3">
            <button
              onClick={() => navigate("/chart")}
              className="bg-green-500 text-white px-4 py-2 rounded"
            >
              View Chart
            </button>
            <button
              onClick={() => navigate("/map")}
              className="bg-purple-500 text-white px-4 py-2 rounded"
            >
              New MapVi
            </button>
          </div>
        </div>
        <div className="bg-gray-100 p-8">
          <table className="table-auto min-w-full border-separate border-spacing-2 border border-gray-400 dark:border-gray-500">
            <thead>
              <tr className="bg-gray-50 text-gray-600 uppercase text-sm leading-normal">
                <th className="py-3 px-6 text-left border border-gray-300 dark:border-gray-600">
                  Name
                </th>
                <th className="py-3 px-6 text-left border border-gray-300 dark:border-gray-600">
                  Position
                </th>
                <th className="py-3 px-6 text-left border border-gray-300 dark:border-gray-600">
                  Office
                </th>
                <th className="py-3 px-6 text-left border border-gray-300 dark:border-gray-600">
                  Extn
                </th>
                <th className="py-3 px-6 text-left border border-gray-300 dark:border-gray-600">
                  Start_Date
                </th>
                <th className="py-3 px-6 text-left border border-gray-300 dark:border-gray-600">
                  Salary
                </th>
              </tr>
            </thead>
            <tbody>
              {employeData.map((emp, index) => (
                <tr
                  key={emp}
                  className="rounded shadow cursor-pointer hover:scale-105 transition"
                  onClick={() => navigate(`/details`)}
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

        {/* <div className="grid md:grid-cols-6 gap-4">
          {employeData.map((emp, index) => (
            <div
              key={emp[index]}
              onClick={() => navigate(`/details/${emp[index]}`, { state: emp })}
              className="bg-white p-4 rounded shadow cursor-pointer hover:scale-105 transition"
            >
              <h2 className="font-bold" key={emp[index]}>
                Name :{emp[0]}
              </h2>
              <p key={emp[index]}>Position: {emp[1]}</p>
              <p>Office: {emp[2]}</p>
              <p>Extn: {emp[3]}</p>
              <p>Start Date: {emp[4]}</p>
              <p>Salary: {emp[5]}</p>
            </div>
          ))} */}
        {/* </div> */}
      </div>
    </>
  );
};

export default List;
