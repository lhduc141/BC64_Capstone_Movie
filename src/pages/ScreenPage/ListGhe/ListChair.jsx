import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getListChairThunk } from "../../../redux/movieReducer/movieThunk";
import { addChairAction } from "../../../redux/movieReducer/movieSlice";

const ListChair = ({ maLichChieu }) => {
  const dispatch = useDispatch();

  // Fetch list of chairs on component mount
  useEffect(() => {
    dispatch(getListChairThunk(maLichChieu));
  }, [dispatch, maLichChieu]); // Add maLichChieu as dependency

  // Get list of chairs and being selected chairs from Redux state
  const { listChair, listBeingSelectedChair } = useSelector(
    (state) => state.movieSlice
  );

  // Render individual chair buttons
  const renderChairButton = (chair) => {
    const isBeingSelected = listBeingSelectedChair.some(
      (selectedChair) => selectedChair.maGhe === chair.maGhe
    );

    let style = "bg-blue-500";
    switch (chair.loaiGhe) {
      case "Vip":
        style = " bg-orange-400";
        break;
      default:
        style = " bg-yellow-400";
        break;
    }

    if (isBeingSelected) {
      style = " bg-red-600";
    }

    if (chair.daDat === true) {
      style = " bg-gray-500";
    }

    return (
      <button
        key={chair.maGhe}
        className={`border rounded-t-3xl rounded-b-md py-2 text-sm text-white ${style}`}
        onClick={() => dispatch(addChairAction(chair))}
        disabled={chair.daDat}
      >
        {chair.maGhe}
      </button>
    );
  };

  return (
    <div className="pt-4 px-5 pb-24 w-full">
      <div className="grid grid-cols-10 gap-1">
        {listChair.map((chair) => renderChairButton(chair))}
      </div>
      <br />
      <hr />
      <div>
        <div className="flex align-middle text-center pt-3">
          <div className="w-1/4 mx-10 bg-yellow-400 rounded-t-3xl">x</div>
          <div className="w-1/4 mx-10 bg-orange-400 rounded-t-3xl">x</div>
          <div className="w-1/4 mx-10 bg-gray-300 rounded-t-3xl">x</div>
          <div className="w-1/4 mx-10 bg-red-600 rounded-t-3xl">x</div>
        </div>
        <div className="flex align-middle text-center pt-3">
          <div className="w-1/4 mx-10">Thường</div>
          <div className="w-1/4 mx-10">Vip</div>
          <div className="w-1/4 mx-10">Đã chọn</div>
          <div className="w-1/4 mx-10">Đang chọn</div>
        </div>
      </div>
    </div>
  );
};

export default ListChair;
