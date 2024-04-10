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
      let styleBeingSelectedChair = "bg-red-600";
      let styleSelectedChair = "bg-gray-300";
      let isDisable = false;

      let styleNormal = " bg-yellow-400";
      let styleVip = " bg-orange-400";

      let style = styleChair;
      switch (chair.loaiGhe) {
        case "Vip":
          style += styleVip;
          break;
        default:
          style += styleNormal;
          break;
      }
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
          className={`border rounded-t-3xl rounded-b-md p-2 ${style} text-white ${
            isDisable ? "cursor-not-allowed" : ""
          }`}
          key={i}
        >
          {chair.tenGhe}
          <hr />
        </button>
      );
    });
  };

  const dispatch = useDispatch();
  return (
    <div className="pt-4 px-20 pb-24 w-full ">
      <div className="grid grid-cols-10 gap-3">{renderListChair()}</div>
      <br />
      <hr />
      <div>
        <div className="flex px-6 align-middle text-center pt-3">
          <div className="w-1/4 mx-10 bg-yellow-400 rounded-t-3xl">x</div>
          <div className="w-1/4 mx-10 bg-orange-400 rounded-t-3xl">x</div>
          <div className="w-1/4 mx-10 bg-gray-300 rounded-t-3xl">x</div>
          <div className="w-1/4 mx-10 bg-red-600 rounded-t-3xl">x</div>
        </div>
        <div className="flex px-6 align-middle text-center pt-3">
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
