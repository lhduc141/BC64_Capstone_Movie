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
    <div className="bg-gray-700 py-10">
      {/* Chi tiết phim  */}
      <div className="px-3 py-10 mx-64">
        <div className="flex">
          <div className="w-2/6 h-fit">
            <img
              src={dataMovie?.hinhAnh}
              className="w-64 h-96 rounded-2xl"
              alt=""
            />
          </div>
          <div className="w-3/6 text-white space-y-4 mr-20">
            <p className="text-xl font-medium pb-5">{dataMovie?.tenPhim}</p>
            <p className="text-sm pr-20 pb-5">{dataMovie?.moTa}</p>
            <button className="bg-orange-500 text-white p-2 rounded transition-all hover:bg-orange-700">
              Buy ticket
            </button>
          </div>
          <div className="w-1/6 text-[5.5rem] text-orange-500 px-auto">
            <i class="fa-regular fa-face-smile"></i>
            <div className="flex text-[1rem]">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </div>
          </div>
        </div>
      </div>

      {/* Lịch chiếu phim  */}
      <div className="py-10 mx-64">
        <DetailPageSchedule idMovie={idMovie} />
      </div>
    </div>
  );
};

export default DetailPage;
