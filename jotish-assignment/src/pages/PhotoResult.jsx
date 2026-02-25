import React from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const PhotoResult = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const getData = localStorage.getItem(1);
  if (navigate == "/details") {
    localStorage.removeItem(1);
  }

  return (
    <>
      <h1 className="text-4xl flex justify-center bg-amber-500">
        Employe Image and Details
      </h1>
      <div className="flex justify-center items-center pt-25">
        <div className="max-w-sm rounded shadow-lg">
          <img
            src={state}
            alt="preview"
            className="flex justify-center items-center"
          />
          <p className="flex justify-center items-center">{getData}</p>
        </div>
      </div>
    </>
  );
};

export default PhotoResult;
