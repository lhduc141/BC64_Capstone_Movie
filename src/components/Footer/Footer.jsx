import { MdPerson, MdKeyboardArrowRight } from "react-icons/md";
import {
  FaFacebookSquare,
  FaYoutubeSquare,
  FaTwitterSquare,
  FaInstagramSquare,
  FaAppStore,
  FaAndroid,
  FaInfoCircle,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer bg-dark-1 shadow-lg pt-10 mt-20 text-grey-4">
      <div className="container mx-auto flex flex-wrap">
        <div className="w-full sm:w-6/12 md:w-1/5 col uppercase px-6 sm:px-0">
          <h3 className="relative text-white">Giới thiệu</h3>
          <div className="col-content">
            <ul>
              <li>
                <NavLink className="hover:text-primary flex items-center">
                  <MdKeyboardArrowRight className="inline-block align-middle" />
                  Về chúng tôi
                </NavLink>
              </li>
              <li>
                <NavLink className="hover:text-primary flex items-center">
                  <MdKeyboardArrowRight className="inline-block align-middle" />
                  Thỏa thuận sử dụng
                </NavLink>
              </li>
              <li>
                <NavLink className="hover:text-primary flex items-center">
                  <MdKeyboardArrowRight className="inline-block align-middle" />
                  Cơ chế bảo mật
                </NavLink>
              </li>
              <li>
                <NavLink className="hover:text-primary flex items-center">
                  <MdKeyboardArrowRight className="inline-block align-middle" />
                  Cách sử dụng
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full sm:w-6/12 md:w-1/5 col uppercase px-6 sm:px-0">
          {/* Phần Hỗ trợ */}
        </div>
        <div className="w-full sm:w-6/12 md:w-1/5 col uppercase px-6 sm:px-0">
          {/* Phần Library used */}
        </div>
        <div className="w-full sm:w-6/12 md:w-1/5 col uppercase px-6 sm:px-0">
          {/* Phần Download app */}
        </div>
        <div className="w-full sm:w-6/12 md:w-1/5 col uppercase px-6 sm:px-0">
          <h3 className="relative text-white">Kết nối & thông tin</h3>
          <div className="social flex">
            <a className="social__item mx-1" href="#url">
              <FaFacebookSquare />
            </a>
            <a className="social__item mx-1" href="#url">
              <FaYoutubeSquare />
            </a>
            <a className="social__item mx-1" href="#url">
              <FaTwitterSquare />
            </a>
            <a className="social__item mx-1" href="#url">
              <FaInstagramSquare />
            </a>
          </div>
          <div className="members">
            <h4 className="normal-case text-sm pb-1 pt-2">Triển khai dự án:</h4>
            <ul className="capitalize text-xs">
              <li className="leading-5 flex items-center tracking-wide">
                <MdPerson className="inline-block mr-1 text-green-600" /> Nguyễn Quang Minh
              </li>
              <li className="leading-5 flex items-center tracking-wide">
                <MdPerson className="inline-block mr-1 text-green-600" /> Hoàng Đức
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer__bot text-center border-t border-grey-1 pt-4 pb-4 text-lg">
        <p>
          <FaInfoCircle className="inline-block mr-3 align-middle" />
          <span className="align-middle">
            Cybersoft, BC64 Front End: 09/2023 ~ 04/2024
          </span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
