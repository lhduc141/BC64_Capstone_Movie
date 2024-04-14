import React, { useEffect, useMemo, useState } from "react";
import { movieSer } from "../service/movieService";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearChar } from "../redux/movieReducer/movieSlice";

const FilterMovies = () => {
  const [movies, setMovies] = useState([]);
  const [schedules, setSchedules] = useState([]);
  const [dataSelected, setDataSelected] = useState(null);
  const [dataFilter, setDataFilter] = useState(null);

  const navigate = useNavigate();

  const fetchListMovie = async () => {
    try {
      const response = await movieSer.getListMovie();
      setMovies(response.data.content);
    } catch (error) {
      console.error("Error fetching movie list:", error);
    }
  };
  const fetchSchedule = async () => {
    if (!dataFilter?.movieId) return;
    try {
      let data = await movieSer.getScheduleMovie(dataFilter.movieId);
      let dataSchedule = data.data.content.heThongRapChieu;
      setSchedules(dataSchedule.flatMap((data) => data?.cumRapChieu));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchListMovie();
  }, []);

  useEffect(() => {
    fetchSchedule();
  }, [dataFilter?.movieId]);

  const time = useMemo(() => {
    const rs = schedules.find((data) => data.maCumRap === dataFilter.maCumRap);
    setDataSelected(rs);
    return rs?.lichChieuPhim;
  }, [schedules, dataFilter]);

  const dispatch = useDispatch();

  const handleBuy = () => {
    const data = {
      dataFilter,
      dataSelected,
    };

    if (!data.dataFilter.maLichChieu) return;

    dispatch(clearChar());
    navigate(`/screen-movie/${data.dataFilter.maLichChieu}`);
  };

  return (
    <div className="w-full flex justify-center absolute z-10 -mt-8">
      <div className="flex py-3 flex-row items-center px-1 bg-white shadow rounded-lg justify-center flex-wrap md:space-x-2 md:px-3 gap-3">
        <select
          className="w-[200px] font-bold text-gray-500"
          onChange={(e) => {
            if (!e.target.value) return;
            setDataFilter((prev) => ({
              ...prev,
              movieId: e.target.value,
            }));
          }}
        >
          <option>Chọn phim</option>
          {movies.map((movie) => (
            <option key={movie.maPhim} value={movie.maPhim}>
              {movie.tenPhim}
            </option>
          ))}
        </select>
        <select
          className="w-[200px] font-bold text-gray-500"
          onChange={(e) => {
            if (!e.target.value) return;
            setDataFilter((prev) => ({
              ...prev,
              maCumRap: e.target.value,
            }));
          }}
          defaultValue={schedules[0]?.maCumRap}
        >
          <option>Chọn rạp</option>
          {schedules.map((item) => (
            <option key={item.maCumRap} value={item.maCumRap}>
              {item.tenCumRap}
            </option>
          ))}
        </select>
        <select
          className="w-[200px] font-bold text-gray-500"
          onChange={(e) => {
            if (!e.target.value) return;
            setDataFilter((prev) => ({
              ...prev,
              maLichChieu: e.target.value,
            }));
          }}
        >
          <option>Thời gian</option>
          {time?.map((t) => (
            <option key={t.maLichChieu} value={t.maLichChieu}>
              {moment(t.ngayChieuGioChieu).format("lll")}
            </option>
          ))}
        </select>
        <button
          className=" w-[200px]  bg-red-500 rounded-md font-bold text-white px-2 py-4"
          onClick={handleBuy}
        >
          MUA VÉ NGAY
        </button>
      </div>
    </div>
  );
};

export default FilterMovies;
