import React, { useRef } from "react";
import webcam from "react-webcam";
import { useLocation, useNavigate } from "react-router-dom";
const Details = () => {
  const { state } = useLocation();
  const webcamRef = useRef(null);
  const navigate = useNavigate();
  const capture = () => {
    const imgsrc = webcamRef.current.getScreenshot();
    navigate("/photo", { state: imgsrc });
  };
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">{{ state }}</h1>
      <p>Salary: {}</p>
      <p>Age: {}</p>

      <webcam ref={webcamRef} screenshotFormat="image/jpeg" className="my-4" />
      <button
        onClick={capture}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Capture Photo
      </button>
    </div>
  );
};

export default Details;
