import React, { useRef, useState, useCallback } from "react";
import Webcam from "react-webcam";
import { useLocation, useNavigate } from "react-router-dom";
import PhotoResult from "./PhotoResult";

const Details = () => {
  const [img, setImg] = useState(null);
  const { state } = useLocation();
  const data = localStorage.setItem(1, state);
  const webcamRef = useRef(null);
  const navigate = useNavigate();
  const videoConstraints = {
    width: 200,
    height: 100,
    facingMode: "user",
  };

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImg(imageSrc);
    navigate("/photo", { state: imageSrc, data: state });
  }, [webcamRef]);

  return (
    <>
      <div className="h-screen bg-pink-300">
        <div className="flex justify-center items-center pt-32">
          {img === null ? (
            <>
              <Webcam
                audio={false}
                mirrored={true}
                height={400}
                width={400}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                videoConstraints={videoConstraints}
              />
            </>
          ) : (
            <>
              <img src={img} alt="screenshot" />
            </>
          )}
        </div>

        <div className="flex justify-center items-center pt-8 gap-4">
          <button
            onClick={capture}
            className="bg-orange-400  rounded-2xl p-2 w-35 hover:bg-black text-white"
          >
            Capture photo
          </button>
          <button
            onClick={() => setImg(null)}
            className="bg-black text-white rounded-2xl p-2 w-35 hover:bg-orange-500 "
          >
            Retake
          </button>
        </div>
        <div className="flex justify-center items-center pt-8 gap-4">
          {state.map((employeData, index) => (
            <ul key={index}>
              <li>{employeData}</li>
            </ul>
          ))}
        </div>
      </div>
    </>
  );
};

export default Details;
