import React, { useEffect, useState } from "react";
import { movieSer } from "../../../service/movieService";
import { useNavigate } from "react-router-dom";

const ListMovie = () => {
  const [dataMovieList, setDataMovieList] = useState([]);
  const [hoveredMovieId, setHoveredMovieId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchListMovie();
  }, []);

  const fetchListMovie = async () => {
    try {
      const response = await movieSer.getListMovie();
      setDataMovieList(response.data.content);
    } catch (error) {
      console.error("Error fetching movie list:", error);
    }
  };

  const navigatePageDetail = (movieId) => {
    navigate(`detail-movie/${movieId}`);
  };

  const handleMovieMouseEnter = (movieId) => {
    setHoveredMovieId(movieId);
  };

  const handleMovieMouseLeave = () => {
    setHoveredMovieId(null);
  };

  const renderListMovie = () => {
    return dataMovieList.map((movie) => (
      <div
        key={movie.maPhim}
        className=" rounded relative cursor-pointer mt-5"
        onClick={() => navigatePageDetail(movie.maPhim)}
        onMouseEnter={() => handleMovieMouseEnter(movie.maPhim)}
        onMouseLeave={handleMovieMouseLeave}
      >
        <div className="h-80 relative z-0">
          <img
            src={movie.hinhAnh}
            className="w-full h-full object-cover rounded-t-xl"
            alt={movie.tenPhim}
          />
          <div
            className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 rounded-t-xl"
            style={{ opacity: hoveredMovieId === movie.maPhim ? 0.5 : 0 }}
          ></div>
        </div>

        <div
          className="py-3 space-y-2"
          style={{
            display: hoveredMovieId === movie.maPhim ? "none" : "block",
          }}
        >
          <p className="font-medium text-[1rem] w-full">
            <span className="px-1.5 py-0.5 mr-2 border rounded text-white bg-red-500">
              BC64
            </span>
            <span className="text-[1.2rem] align-middle">{movie.tenPhim}</span>
          </p>
          <p className="text-[1rem] text-gray-500">
            {movie.moTa.substring(0, 75)}...
          </p>
        </div>

        <div
          className="w-full bg-red-600 text-white py-4 rounded-lg mt-4 transition duration-300"
          style={{
            display: hoveredMovieId === movie.maPhim ? "block" : "none",
          }}
        >
          <button className="w-full">Mua vé</button>
        </div>
      </div>
    ));
  };

  return (
    <div className="container max-w-7xl mx-auto py-5 mt-10 md:mt-0">
      <div className="mx-12 py-7">
        <div className="grid grid-cols-2 xl:grid-cols-4 md:grid-cols-3 gap-9">
          {renderListMovie()}
        </div>
      </div>
    </div>
  );
};

export default ListMovie;
