import React, { useEffect, useState } from "react";
import { movieSer } from "../../../service/movieService";
import { useNavigate } from "react-router-dom";

const ListMovie = () => {
  //Hook
  const [dataMovieList, setDataMovieList] = useState([]);
  const [isHovered, setIsHovered] = useState(false);
  const [indexHover, setIndexHover] = useState(-1);
  const navigate = useNavigate();

  useEffect(() => {
    // call api
    fetchListMovie();
  }, []);

  //Function
  const navigatePageDetail = (id) => {
    navigate(`detail-movie/${id}`);
  };
  let fetchListMovie = async () => {
    try {
      const data = await movieSer.getListMovie();
      console.log("data List: ", data);

      let movieList = data.data.content;
      setDataMovieList(movieList);
    } catch (err) {
      console.log("err: ", err);
    }
  };
  const renderListMovie = () => {
    // optional chaining operator
    // dataMovieList ? "" : ""

    return dataMovieList?.map((movie) => {
      return (
        <div
          onClick={() => {
            navigatePageDetail(movie.maPhim);
          }}
          onMouseEnter={() => {
            setIsHovered(true);
            setIndexHover(movie.maPhim);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
            setIndexHover(-1);
          }}
          key={movie.maPhim}
          className={`rounded `}
        >
          <div className="h-80 relative z-0">
            {/* Image */}
            <img
              src={movie.hinhAnh}
              className="w-full h-full object-cover rounded-t-xl"
              alt=""
            />
            {/* Overlay */}
            <div
              className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 rounded-t-xl"
              style={{
                opacity: movie.maPhim === indexHover && isHovered ? "0.5" : "0",
              }}
            ></div>
          </div>

          {/* content  */}
          <div
            className="py-3 space-y-2 "
            style={{
              display:
                movie.maPhim === indexHover && isHovered ? "none" : "block",
            }}
          >
            <p className="font-medium text-[1rem] w-full">
              <span className="px-1.5 py-0.5 mr-2 border rounded text-white bg-red-500">
                BC64
              </span>
              <span className="text-[1.2rem] align-middle">
                {movie.tenPhim}
              </span>
            </p>
            <p className="text-[1rem] text-gray-500">
              {movie.moTa.substring(0, 75)}...
            </p>
          </div>

          {/* Buy button  */}
          <div
            className="w-full bg-red-600 text-white py-4 rounded-lg mt-4 transition duration-300"
            style={{
              display:
                movie.maPhim === indexHover && isHovered ? "block" : "none",
            }}
          >
            <button className="w-full">Mua vé</button>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="container max-w-7xl mx-auto py-5">
      <div className="mx-12 py-7">
        {/* Danh sách phim */}
        <div className="grid grid-cols-4 gap-9 ">{renderListMovie()}</div>
      </div>
    </div>
  );
};

export default ListMovie;
