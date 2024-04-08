import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getListChairThunk } from "../../../redux/movieReducer/movieThunk";
import { addChairAction } from "../../../redux/movieReducer/movieSlice";

const ListChair = ({ maLichChieu }) => {
  //gọi api lấy danh sách ghế
  const { listChair, listBeingSelectedChair } = useSelector(
    (state) => state.movieSlice
  );
  useEffect(() => {
    dispatch(getListChairThunk(maLichChieu));
  }, []);

  const renderListChair = () => {
    return listChair.map((chair, i) => {
      let styleChair = "bg-blue-500";
      let styleBeingSelectedChair = "bg-red-500";
      let styleSelectedChair = "bg-gray-500";
      let isDisable = false;

      let style = styleChair;
      let index = listBeingSelectedChair.findIndex(
        (beingSelectedChair) => chair.maGhe == beingSelectedChair.maGhe
      );
      if (index != -1) {
        style = styleBeingSelectedChair;
      }
      if (chair.daDat) {
        style = styleSelectedChair;
        isDisable = true;
      }

      return (
        <button
          onClick={() => {
            dispatch(addChairAction(chair));
          }}
          className={`border rounded p-2 ${style} text-white ${
            isDisable ? "cursor-not-allowed" : ""
          }`}
          key={i}
        >
          {chair.tenGhe}
        </button>
      );
    });
  };

  const dispatch = useDispatch();
  return (
    <div className="w-3/5">
      <div className="grid grid-cols-10 gap-3">{renderListChair()}</div>;
    </div>
  );
};

export default ListChair;
