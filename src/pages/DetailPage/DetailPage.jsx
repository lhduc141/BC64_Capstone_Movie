import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { movieSer } from "../../service/movieService";
import DetailPageSchedule from "./DetailPageSchedule";

const DetailPage = () => {
  //lấy param idMovie trên url xuống
  const { idMovie } = useParams();
  const [dataMovie, setDataMovie] = useState();
  const fetchDetailMovie = async () => {
    try {
      let data = await movieSer.getDetailMovie(idMovie);
      setDataMovie(data.data.content);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchDetailMovie();
  }, []);

  return (
    <div>
      {/* Chi tiết phim  */}
      <div className="bg-gray-700 px-3 py-4">
        <div className="flex">
          <div className="w-1/5">
            <img src={dataMovie?.hinhAnh} className="w-64 h-96" alt="" />
          </div>
          <div className="w-4/5 text-white space-y-4">
            <p className="text-xl font-medium">{dataMovie?.tenPhim}</p>
            <p className="text-sm">{dataMovie?.moTa}</p>
            <button className="bg-blue-500 text-white p-2 rounded">
              Buy ticket
            </button>
          </div>
        </div>
      </div>

      {/* Lịch chiếu phim  */}
      <DetailPageSchedule idMovie={idMovie} />
    </div>
  );
};

export default DetailPage;
