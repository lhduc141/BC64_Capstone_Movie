import { Carousel } from "antd";
import slide1 from "../AppDownload/Assets/images/mobile_screen_1.png";
import slide2 from "../AppDownload/Assets/images/mobile_screen_2.png";
import slide3 from "../AppDownload/Assets/images/mobile_screen_3.png";
import slide4 from "../AppDownload/Assets/images/mobile_screen_4.png";
import slide5 from "../AppDownload/Assets/images/mobile_screen_5.png";
const Appdownload = () => {
  return (
    <section className="booking__downloadapp relative" id="appDownLoad">
      <div className="downloadapp__content lg:w-4/5 mx-auto py-8 flex flex-wrap justify-center items-center relative">
        <div className="col basis-8/12 md:basis-6/12 px-8">
          <div className="downloadapp__text">
            <h3 className="font-semibold text-center text-xl lg:text-2xl pb-4">
              Ứng dụng tiện lợi dành cho người yêu điện ảnh.
            </h3>
            <p className="indent-1 text-base font-semibold leading-5 my-2 lg:my-5">
              Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm rạp và
              đổi quà hấp dẫn.
            </p>
          </div>
          <div className="dowloadapp__actions flex flex-col items-center">
            <button className="text-white font-medium uppercase py-2 px-8 my-2 md:my-4 rounded-md bg-red-600 hover:-translate-y-1 duration-300 hover:bg-red-700">
              App miễn phí, tải về ngay
            </button>
            <p className="text-xs md:text-base">
              <span className="text-red-600 font-semibold">Tixket box</span> có
              hai phiên bản:<span className="mx-2 italic">IOS</span>và
              <span className="mx-2 italic">Android</span>
            </p>
          </div>
        </div>
        <div className="col basis-8/12 md:basis-6/12 px-8 overflow-hidden">
          <div className="phone-screen mx-auto">
            <Carousel
              dots={false}
              autoplay={true}
              autoplaySpeed={3000}
              effect="fade"
              className="sreen-item"
            >
              <div className="item">
                <img className="h-full" src={slide1} alt="slide1" />
              </div>
              <div className="item">
                <img className="h-full" src={slide1} alt="slide1" />
              </div>
              <div className="item">
                <img className="h-full" src={slide2} alt="slide2" />
              </div>
              <div className="item">
                <img className="h-full" src={slide3} alt="slide3" />
              </div>
              <div className="item">
                <img className="h-full" src={slide4} alt="slide4" />
              </div>
              <div className="item">
                <img className="h-full" src={slide5} alt="slide5" />
              </div>
            </Carousel>
          </div>
        </div>
      </div>
      <div className="downloadapp__bg absolute top-0 bottom-0 w-full">
        <img src='' alt="" />
      </div>
    </section>
  );
};
export default Appdownload;
