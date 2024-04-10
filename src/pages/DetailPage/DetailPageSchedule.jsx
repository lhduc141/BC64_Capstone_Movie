import { Tabs } from "antd";
import React, { useEffect, useState } from "react";
import { movieSer } from "../../service/movieService";
import { NavLink } from "react-router-dom";

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
    console.log(dataHeThongRap);
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
  const renderLichChieuPhim = (dataLcp) => {
    return dataLcp?.map((data, index) => {
      return (
        <div className="inline text-white">
          <NavLink
            to={`/screen-movie/${data.maLichChieu}`}
            className="border p-2 mr-3 mt-2 !w-20 rounded-lg !bg-gray-200 !text-red-500 font-medium"
            key={index}
          >
            {data.ngayChieuGioChieu}
          </NavLink>
        </div>
      );
    });
  };

  return (
    <div
      className="container mx-auto max-w-7xl h-[35rem] py-10 px-10 rounded-xl"
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
