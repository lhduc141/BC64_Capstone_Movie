import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyTicketThunk } from "../../../redux/BuyTicketReducer/buyTicketThunk";
import { useNavigate } from "react-router-dom";

const BuyTicket = ({ maLichChieu }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { listBeingSelectedChair, filmInformation, listChair } = useSelector(
    (state) => state.movieSlice
  );

  const { infoUser } = useSelector((state) => state.userReducer);

  const acceptTicket = () => {
    const initialValue = {
      maLichChieu: parseInt(maLichChieu),
      danhSachVe: transferSelectToAccess(),
    };
    const authorization = `Bearer ` + localStorage.getItem("token");
    const navigateCus = () => navigate("/");
    dispatch(
      buyTicketThunk({
        payload: initialValue,
        authorization: authorization,
        navigateCus,
      })
    );
  };

  const transferSelectToAccess = () =>
    listChair
      ?.filter((chair) =>
        listBeingSelectedChair.some(
          (beingSelectedChair) => chair.maGhe === beingSelectedChair.maGhe
        )
      )
      .map(({ maGhe, giaVe }) => ({ maGhe, giaVe }));

  const fetchListBeingSelectedChair = () => {
    let listChair = "Chair: ";
    listBeingSelectedChair?.forEach((chair, i) => {
      if (i === 0) {
        listChair += `${chair.stt} (${chair.loaiGhe})`;
      } else {
        listChair += ` ; ${chair.stt} (${chair.loaiGhe})`;
      }
    });
    return listChair.length > 191
      ? listChair.substring(0, 190) + " ..."
      : listChair;
  };

  const sumOfMoney = () =>
    listBeingSelectedChair?.reduce((sum, chair) => sum + chair.giaVe, 0);

  return (
    <div
      className="mt-3 p-2 m-5 rounded-md max-w-[500px] mx-auto"
      style={{ backgroundColor: "#0a2029" }}
    >
      <div className="h-[80%] text-white">
        <div className="text-center text-[1.5rem]">Thông tin vé</div>
        <div className="pb-2 mb-2 h-[92%]">
          <div className="bg-white h-full text-black py-2 px-8 rounded-t-lg">
            <p className="text-[1.2rem] font-bold">
              Phim: {filmInformation.tenPhim}
            </p>
            <div className="pt-4">
              <p className=" font-bold">
                <i className="fa-solid fa-clock"></i> Thời gian
              </p>
              <p>
                {filmInformation.gioChieu} ~ {filmInformation.ngayChieu}
              </p>
            </div>
            <div className="pt-4">
              <p className=" font-bold">
                <i className="fa-solid fa-video"></i> Rạp
              </p>
              <p>{filmInformation.tenRap}</p>
            </div>
            <div className="pt-4">
              <p className=" font-bold">
                <i className="fa-solid fa-video"></i> Địa chỉ
              </p>
              <p>{filmInformation.diaChi}</p>
            </div>
            <div className="pt-4">
              <p className=" font-bold">
                <i className="fa-solid fa-couch"></i> Số ghế đã chọn
              </p>
              <p>{fetchListBeingSelectedChair()}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[20%] rounded-b-lg bg-white py-2">
        <div className="grid grid-cols-6 gap-4">
          <div className="px-8 w-70 col-span-4">
            <div className="text-[1.2rem] font-bold">Tên: {infoUser.hoTen}</div>
            <div className="text-[1.5rem] font-bold text-orange-500">
              Tổng cộng:{" "}
            </div>
            <div className="font-bold">{sumOfMoney()} vnd</div>
          </div>
          <div className="py-4">
            <button
              onClick={acceptTicket}
              className={`py-2 px-8 border rounded-2xl bg-red-500 font-bold text-[1.2rem] transition ease-in-out text-white hover:bg-red-700 ${
                listBeingSelectedChair.length ? "" : "cursor-not-allowed"
              }`}
              disabled={!listBeingSelectedChair.length}
            >
              Đặt
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyTicket;
