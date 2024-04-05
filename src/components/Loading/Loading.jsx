import React from "react";
import { useSelector } from "react-redux";

const Loading = () => {
  const { isLoading } = useSelector((state) => state.loadingReducer);
  return (
    <div
      className={`w-full h-screen bg-black text-white top-0 left-0 z-50 ${
        isLoading ? "fixed" : "hiden"
      }`}
    >
      <div className="w-full h-full flex justify-center items-center ">
        <span className="">Loading</span>
      </div>
    </div>
  );
};

export default Loading;
