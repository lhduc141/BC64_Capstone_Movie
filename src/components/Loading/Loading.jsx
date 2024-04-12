import Lottie from "lottie-react";
import React from "react";
import { useSelector } from "react-redux";
import waiting_animation from "../../assets/waiting_animation.json";

const Loading = () => {
  const { isLoading } = useSelector((state) => state.loadingReducer);
  return (
    <div
      className={`w-screen h-screen bg-black text-white fixed ${
        isLoading ? "" : "hidden"
      } top-0 left-0 z-50 `}
      style={{ backgroundColor: "#fdfcf0" }}
    >
      <div className="w-full h-full flex justify-center items-center ">
        <div className="w-1/4">
          <Lottie animationData={waiting_animation} />
        </div>
      </div>
    </div>
  );
};

export default Loading;
