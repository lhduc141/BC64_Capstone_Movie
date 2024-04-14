import React from "react";
import CarouselMovie from "./CarouselMovie/CarouselMovie";
import ListMovie from "./ListMovie/ListMovie";
import Appdownload from "../../components/AppDownload/AppDownload";
import QuickNews from "./QuickNews/QuickNews";
import FilterMovies from "../../components/FilterMovies";

const HomePage = () => {
  return (
    <div className="z-20" style={{ backgroundColor: "#fdfcf0" }}>
      <CarouselMovie />
      <FilterMovies />
      <ListMovie />
      <QuickNews />
      <Appdownload />
    </div>
  );
};

export default HomePage;
