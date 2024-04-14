import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userUpdateThunk } from "../../redux/userReducer/userThunk";
import { userService } from "../../service/userService";
import moment from "moment";

const Profile = () => {
  const user = useSelector((state) => state.userReducer.infoUser);
  const [isEdit, setIsEdit] = useState(true);
  const [data, setData] = useState(user);
  const [dataTicket, setDataTicket] = useState([]);

  useEffect(() => {
    const fetchAccountInfo = async () => {
      const res = await userService.getAccountInfo();
      setDataTicket(res.data.content.thongTinDatVe);
    };
    fetchAccountInfo();
  }, []);

  const dispatch = useDispatch();
  if (!user) return (window.location.href = "/auth/login");

  const handleUpdate = () => {
    dispatch(userUpdateThunk(data));
    setIsEdit(false);
  };

  console.log(dataTicket);

  return (
    <div className="h-auto flex flex-col space-y-3">
      <div className="shadow-md m-5 p-10 flex flex-col gap-3 max-w-[500px] justify-center mx-auto">
        <h1 className="text-center font-bold text-3xl mb-5">
          Thông tin tài khoản
        </h1>
        <div className="flex flex-row gap-1 items-center justify-between">
          <h1 className="font-semibold w-[150px]">Họ tên:</h1>
          <input
            disabled={isEdit}
            defaultValue={user.hoTen}
            className="font-bold text-gray-500 border-b"
            onChange={(e) =>
              setData((prev) => ({
                ...prev,
                hoTen: e.target.value,
              }))
            }
          />
        </div>
        <div className="flex flex-row gap-1 items-center justify-between">
          <h1 className="font-semibold w-[150px]">Tài khoản:</h1>
          <input
            disabled={isEdit}
            defaultValue={user.taiKhoan}
            className="font-bold text-gray-500 border-b"
            onChange={(e) =>
              setData((prev) => ({
                ...prev,
                taiKhoan: e.target.value,
              }))
            }
          />
        </div>
        <div className="flex flex-row gap-1 items-center justify-between">
          <h1 className="font-semibold w-[150px]">Email:</h1>
          <input
            disabled={isEdit}
            defaultValue={user.email}
            className="font-bold text-gray-500 border-b"
            onChange={(e) =>
              setData((prev) => ({
                ...prev,
                email: e.target.value,
              }))
            }
          />
        </div>
        <div className="flex flex-row gap-1 items-center justify-between">
          <h1 className="font-semibold w-[150px]">Số điện thoại:</h1>
          <input
            disabled={isEdit}
            defaultValue={user.soDT}
            className="font-bold text-gray-500 border-b"
            onChange={(e) =>
              setData((prev) => ({
                ...prev,
                soDT: e.target.value,
              }))
            }
          />
        </div>
        <div className="flex flex-row gap-1 items-center justify-between">
          <h1 className="font-semibold w-[150px]">Loại người dùng:</h1>
          <input
            disabled={isEdit}
            defaultValue={user.maLoaiNguoiDung}
            className="font-bold text-gray-500 border-b"
            onChange={(e) =>
              setData((prev) => ({
                ...prev,
                maLoaiNguoiDung: e.target.value,
              }))
            }
          />
        </div>
        <div className="flex flex-row gap-1 items-center justify-between">
          <h1 className="font-semibold w-[150px]">Mã nhóm:</h1>
          <input
            disabled={isEdit}
            defaultValue={user.maNhom}
            className="font-bold text-gray-500 border-b"
            onChange={(e) =>
              setData((prev) => ({
                ...prev,
                maNhom: e.target.value,
              }))
            }
          />
        </div>

        {isEdit ? (
          <button
            onClick={() => setIsEdit(!isEdit)}
            className="w-full mt-5 bg-blue-400 text-white font-bold py-3 rounded-sm"
          >
            Chỉnh sửa thông tin
          </button>
        ) : (
          <button
            onClick={handleUpdate}
            className="w-full mt-5 bg-green-400 text-white font-bold py-3 rounded-sm"
          >
            Cập nhật
          </button>
        )}
      </div>

      <div className="text-center text-2xl font-bold italic pt-10">
        Danh sách vé
      </div>

      <div className="flex ">
        <div className="grid grid-cols-12 gap-5 mt-5 mx-auto">
          {dataTicket.map((data) => (
            <div
              key={data.maVe}
              className="bg-white border relative bottom-1 border-gray-600 shadow-sm rounded-lg p-5 col-span-6 md:col-span-4 xl:col-span-3"
            >
              <span className="text-sm text-center mx-auto">
                {data.danhSachGhe[0].tenHeThongRap}
              </span>
              <div className="text-center text-xl italic text-gray-600">
                {moment(data.ngayDat).format("lll")}
              </div>
              <div className="absolute bg-yellow-300 px-2 rounded-lg italic right-0 font-semibold ">
                {data.thoiLuongPhim}'
              </div>
              <img
                src={data.hinhAnh}
                alt={data.tenPhim}
                className="w-[250px] h-[350px] object-cover mx-auto"
              />
              <div className="text-center font-semibold text-gray-700 text-3xl">
                {data.tenPhim}
              </div>
              <div className="text-center font-bold text-2xl italic text-orange-300">
                {data.giaVe * data.danhSachGhe.length} vnd
              </div>

              <div className="mx-auto">
                <span className="font-semibold">
                  {data.danhSachGhe[0].tenCumRap}
                </span>
                -
                <span className="text-cyan-600 font-bold">
                  Ghế: {data.danhSachGhe.map((item) => item.tenGhe + " ")}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
