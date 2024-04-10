import React from "react";
import CarouselMovie from "./CarouselMovie/CarouselMovie";
import ListMovie from "./ListMovie/ListMovie";
import Appdownload from "../../components/AppDownload/AppDownload";
import QuickNews from "../../components/QuickNews/QuickNews";

const HomePage = () => {
  return (
    <div>
      <CarouselMovie />
      <ListMovie />
      <QuickNews/>
      <Appdownload />
     
    </div>
  );
};

export default HomePage;
