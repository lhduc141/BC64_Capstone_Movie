import React from "react";
import CarouselMovie from "./CarouselMovie/CarouselMovie";
import ListMovie from "./ListMovie/ListMovie";
import Appdownload from "../../components/AppDownload/AppDownload";

const HomePage = () => {
  return (
    <div style={{ backgroundColor: "#fdfcf0" }}>
      <CarouselMovie />
      <ListMovie />
      <Appdownload />
    </div>
  );
};

export default HomePage;
