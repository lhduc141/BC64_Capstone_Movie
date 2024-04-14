import { Carousel } from "antd";
import slide1 from "../AppDownload/Assets/images/mobile_screen_1.png";
import slide2 from "../AppDownload/Assets/images/mobile_screen_2.png";
import slide3 from "../AppDownload/Assets/images/mobile_screen_3.png";
import slide4 from "../AppDownload/Assets/images/mobile_screen_4.png";
import slide5 from "../AppDownload/Assets/images/mobile_screen_5.png";
import background from "../AppDownload/Assets/images/bg-mainpage.jpg";

const Appdownload = () => {
  return (
    <section
      className="booking__downloadapp block"
      id="appDownLoad"
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="downloadapp__content lg:w-4/5 mx-auto py-8 flex flex-wrap justify-center items-center">
        {/* left content  */}
        <div className="col basis-8/12 md:basis-6/12  px-10">
          <div className="downloadapp__text">
            <h3 className="font-semibold text-xxl lg:text-2xl pb-4 text-white pl-0">
              ỨNG DỤNG DÀNH CHO NGƯỜI YÊU ĐIỆN ẢNH.
            </h3>
            <p className="indent-1 text-base font-semibold leading-5 my-2 lg:my-5 text-white">
              Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm rạp và
              đổi quà hấp dẫn.
            </p>
          </div>
          <div className="dowloadapp__actions flex flex-col  text-white">
            <button className="text-white font-bold uppercase py-2 px-8 my-2 md:my-4  border-nonerounded-md bg-red-600 hover:-translate-y-1 duration-300 hover:bg-red-700 w-1/2">
              App miễn phí, tải về ngay
            </button>
            <p className="text-xs md:text-base">
              <span className="text-red-600 font-semibold  ">Ticket box</span>{" "}
              có hai phiên bản:<span className="mx-2 italic">IOS</span>và
              <span className="mx-2 italic">Android</span>
            </p>
          </div>
        </div>

        <div className="col basis-8/12 md:basis-6/12 px-8 overflow-hidden h-full">
          <div className="phone-screen mx-auto">
            <Carousel
              dots={false}
              autoplay={true}
              autoplaySpeed={3000}
              effect="fade"
              className="sreen-item"
            >
              <div className="item">
                <img
                  className="h-[30rem] object-fill ml-20"
                  src={slide1}
                  alt="slide1"
                />
              </div>
              <div className="item">
                <img
                  className="h-[30rem] object-fill ml-20"
                  src={slide1}
                  alt="slide1"
                />
              </div>
              <div className="item">
                <img
                  className="h-[30rem] object-fill ml-20"
                  src={slide2}
                  alt="slide2"
                />
              </div>
              <div className="item">
                <img
                  className="h-[30rem] object-fill ml-20"
                  src={slide3}
                  alt="slide3"
                />
              </div>
              <div className="item">
                <img
                  className="h-[30rem] object-fill ml-20"
                  src={slide4}
                  alt="slide4"
                />
              </div>
              <div className="item">
                <img
                  className="h-[30rem] object-fill ml-20"
                  src={slide5}
                  alt="slide5"
                />
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Appdownload;
