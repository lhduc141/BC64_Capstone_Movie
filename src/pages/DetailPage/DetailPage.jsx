import React, { useEffect, useRef, useState } from "react";
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

  const myRef = useRef(null);
  const executeScroll = () =>
    myRef.current.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="bg-gray-700 py-5 md:px-">
      {/* Chi tiết phim  */}
      <div className="px-3">
        <div className="flex flex-col md:flex-row md:gap-10 justify-center">
          <div className="w-full md:max-w-[500px] h-fit">
            <img
              src={dataMovie?.hinhAnh}
              className="w-full h-full rounded-2xl"
              alt=""
            />
          </div>
          <div className=" text-white space-y-4 md:max-w-[550px]">
            <p className="text-2xl font-medium pb-5">{dataMovie?.tenPhim}</p>
            <p className="text-sm  pb-5">{dataMovie?.moTa}</p>
            <button
              className="bg-orange-500 text-white p-2 rounded transition-all hover:bg-orange-700"
              onClick={executeScroll}
            >
              Buy ticket
            </button>
          </div>
          <div className="text-[5.5rem] text-orange-500 px-auto">
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
      <section className="m-3 pt-5" ref={myRef}>
        <DetailPageSchedule idMovie={idMovie} />
      </section>
    </div>
  );
};

export default DetailPage;
