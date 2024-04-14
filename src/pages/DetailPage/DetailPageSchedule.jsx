import { Tabs } from "antd";
import React, { useEffect, useState } from "react";
import { movieSer } from "../../service/movieService";
import { NavLink, useNavigate } from "react-router-dom";
import moment from "moment";
import { useDispatch } from "react-redux";
import { clearChar } from "../../redux/movieReducer/movieSlice";

const DetailPageSchedule = ({ idMovie }) => {
  //   React redux
  const [dataHeThongRap, setDataHeThongRap] = useState([]);
  useEffect(() => {
    fetchSchedule();
  }, []);

  const fetchSchedule = async () => {
    try {
      let data = await movieSer.getScheduleMovie(idMovie);
      let dataSchedule = data.data.content.heThongRapChieu;
      setDataHeThongRap(dataSchedule);
    } catch (err) {}
  };
  const renderHeThongRap = () => {
    return dataHeThongRap.map((data, i) => {
      return {
        key: i,
        label: (
          <div>
            <img src={data.logo} alt="" className="h-10" />
          </div>
        ),
        children: renderCumRapChieu(data.cumRapChieu),
      };
    });
  };
  const renderCumRapChieu = (dataCumRapChieu) => {
    return dataCumRapChieu?.map((data, index) => {
      return (
        <div className="p-5 border my-5 " key={index}>
          <p className="text-xl mb-5 text-green-600 font-bold">
            {data.tenCumRap}
          </p>
          <div>{renderLichChieuPhim(data.lichChieuPhim)}</div>
        </div>
      );
    });
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleChooseChar = (maLichChieu) => {
    dispatch(clearChar());
    navigate(`/screen-movie/${maLichChieu}`);
  };

  const renderLichChieuPhim = (dataLcp) => {
    return (
      <div className="flex flex-wrap gap-5 ">
        {dataLcp?.map((data, index) => (
          <div className="inline text-white">
            <button
              onClick={() => handleChooseChar(data.maLichChieu)}
              className="border p-2 mr-3 mt-2 rounded-lg !bg-gray-200 !text-red-500 font-medium w-[200px]"
              key={index}
            >
              {moment(data.ngayChieuGioChieu).format("lll")}
            </button>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div
      className="container mx-auto max-w-7xl space-y-5 rounded-xl py-5 mt-10"
      style={{ backgroundColor: "#fdfcf0" }}
    >
      <Tabs
        defaultActiveKey="1"
        items={renderHeThongRap()}
        tabPosition={"left"}
      />
    </div>
  );
};

export default DetailPageSchedule;
