import React, { useEffect, useMemo, useState } from "react";
import { movieSer } from "../../service/movieService";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearChar } from "../../redux/movieReducer/movieSlice";

const Multiplex = () => {
  const [data, setData] = useState([]);
  const [dataDetail, setDataDetail] = useState([]);
  const [dataSelected, setDataSelected] = useState("BHDStar");
  const [dataItemSelected, setDataItemSelected] = useState(null);

  const navigate = useNavigate();

  const getDataDetail = async () => {
    const res = await movieSer.layThongTinLichChieuHeThongRap(dataSelected);
    setDataDetail(res.data.content[0]);
  };
  useEffect(() => {
    const fetchData = async () => {
      const res = await movieSer.layThongTinHeThongRap();

      setData(res.data.content);
    };
    fetchData();
    return () => getDataDetail();
  }, []);

  useEffect(() => {
    getDataDetail();
  }, [dataSelected]);

  const movies = useMemo(() => {
    if (dataDetail?.lstCumRap?.length) {
      const rs = dataDetail.lstCumRap.find(
        (data) => data.maCumRap === dataItemSelected
      );
      if (rs) return rs.danhSachPhim;
    }
    return [];
  }, [dataItemSelected, dataDetail]);

  const dispatch = useDispatch();
  const handleChooseChar = (maLichChieu) => {
    dispatch(clearChar());
    navigate(`/screen-movie/${maLichChieu}`);
  };

  return (
    <div className="w-full">
      <div className="shadow mx-auto min-w-[800px] max-w-[1500px] h-auto grid grid-cols-12 border-blue-700 p-5 ">
        <div className="col-span-1 space-y-1 overflow-auto max-h-[800px]  border-r-2 pr-4">
          {data.map((item) => (
            <img
              src={item.logo}
              alt={item.biDanh}
              className={`w-[200px] h-200px object-cover cursor-pointer border-green-500 ${
                dataSelected === item.maHeThongRap && " border-l-2 pb-2"
              } `}
              key={item.biDanh}
              onClick={() => setDataSelected(item.maHeThongRap)}
            />
          ))}
        </div>
        <div className="col-span-4 overflow-auto border-r-2 max-h-[800px] ">
          {dataDetail?.lstCumRap?.map((item, i) => (
            <div key={`${item.maHeThongRap}` + i} className="p-2 border-b">
              <h1 className="font-semibold text-green-400 truncate uppercase">
                {item.tenCumRap}
              </h1>
              <p className="truncate">{item.diaChi}</p>
              <button
                className="text-orange-400 font-bold"
                onClick={() => setDataItemSelected(item.maCumRap)}
              >
                Xem chi tiết
              </button>
            </div>
          ))}
        </div>
        <div className="col-span-7 overflow-auto max-h-[800px] flex flex-col space-y-2 p-3">
          {movies.map((item, index) => (
            <div key={index} className="border-b flex flex-row gap-3  pb-3">
              <img
                src={item.hinhAnh}
                alt="tumblai"
                className="w-[100px] h-[150px] object-cover"
              />
              <div className="flex flex-col gap-3">
                <div>
                  <span className="bg-red-600 text-white px-2 rounded-xl">
                    {item.maPhim}
                  </span>
                  <span className="font-bold text-xl">{item.tenPhim}</span>
                </div>

                <div className="flex flex-row flex-wrap gap-2">
                  {item.lstLichChieuTheoPhim.map((item) => (
                    <div
                      key={item.maLichChieu}
                      className="border border-green-400 px-2 py-1 cursor-pointer"
                      onClick={() => handleChooseChar(item.maLichChieu)}
                    >
                      <span className="font-bold">
                        {moment(item.ngayChieuGioChieu).format("lll")}
                      </span>
                      <span className="font-semibold text-orange-500">
                        -{item.tenRap}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Multiplex;
